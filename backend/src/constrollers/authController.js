
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// Register
const register =  async (req, res) => {
    try {
        // Receiving data
    const {name, email, password} = req.body
    // Validation
    if (!name || !password || !email) {
        return res.status(400).json({
            'message': 'All fields are required',
        });
        
    };

    // Check if email already exists
    const duplication = await User.findOne({email});
    if (duplication) {
        return res.status(409).json({
            'message': 'Email already exists'
        })
    }

    // bcrypt password 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
        name: name, 
        email: email,
        password: hashedPassword,
    });
    
    await newUser.save();

    // Response 
    return res.status(201).json({
        'message': 'User registered successfully',
        user: {
            id: newUser._id,
            name: name,
            email: email
            
        }
    })
    } catch (error) {
        res.status(500).json({
            'message': 'Internal server error'
        }) 
    }
    
};


const login = async(req, res) => {
    try {
        // receiving data
        const {email, password} = req.body;
            // Validation    
            if(!email || !password) {
                res.status(400).json({
            'message': 'Email and password are required',
                })
            };
        // Find user by email    
        const user = await User.findOne({email});
        if(!user) {
            res.status(401).json({
                'message': 'Invalid email or password'
            });
        };
        // Compared password
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            res.status(401).json({
                'message': 'Invalid email or password'
            })
        };
        // create JWT 
        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '1h'},
        );

        return res.status(200).json({
            'message': 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })

    } catch(error) {
        return res.status(500).json({
            'message': "Internal server error"
        })
    }
    
}

module.exports = {register, login};
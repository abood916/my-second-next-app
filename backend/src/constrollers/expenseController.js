
const Expense = require('../model/expense');

const createExpense = async (req, res) => {
    try {
        
        const {title, amount, category, date, description} = req.body;

        if(!title || !amount || !category || !date || !description) {
            return res.status(400).json({
                'message': 'All fields are required',
            })
        };

        const newExpense = new Expense(
            {
                title, 
                amount,
                category,
                date, 
                description,
                userId: req.user,
            }
        );
        await newExpense.save();

        return res.status(201).json({
            'message': 'Expense created successfully'
        })
    } catch (error) {
    console.error(error);

    return res.status(500).json({
        message: 'Internal server error'
    });
}
};

const getExpenseById = async (req, res) => {
    try {
        const {id} = req.params;

        const expense = await Expense.findById(id);

        if(!expense) {
            return res.status(404).json({
                'message': 'Expense not found',
            });
        };

        return res.status(200).json({
            expense,
        });
    } catch (error) {
        return res.status(500).json({
            'message': 'Internal server error',
        });
    }
}



const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({userId: req.user});
        return res.status(200).json({
            expenses,
        })
    } catch(error) {
        return res.status(500).json({
            'message': 'Internal server error',
        })
    }
};


const updateExpense = async (req, res) => {
    try {
        const {id} = req.params;

        const expense = await Expense.findById(id);

        if (!expense) {
            return res.status(404).json({
                'message': 'Expense not found',
            })
        };

        if (expense.userId.toString() !== req.user) {
            return res.status(403).json({
                'message': 'You cannot change this expense',
            })
        };

        const expenseUpdated = await Expense.findByIdAndUpdate(
            id,
            req.body,
            {new: true, runValidators: true},
        );

        res.status(200).json({
            expenseUpdated,
        });
    } catch (error) {
        res.status(500).json({
            'message': 'Internal server error'
        })
    }
};


const deleteExpense = async (req, res) => {
    try {
        const {id} = req.params;
        const expense = await Expense.findById(id);

        if (!expense) {
            return res.status(404).json({
                'message': 'Expense not found',
            })
        };

        if (expense.userId.toString() !== req.user) {
            res.status(403).json({
                'message': 'You cannot delete this expense',
            })
        };

        await Expense.findByIdAndDelete(id);

        res.status(200).json({
            'message': 'Expense deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            'message': 'Internal server error',
        })
    }
}

module.exports = { 
        getExpenseById,  createExpense, getAllExpenses, 
        updateExpense, deleteExpense 
    };
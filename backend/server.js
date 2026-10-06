require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3500;
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRotes');
const expenseRoutes = require('./src/routes/expenseRoutes');
const authMiddleware = require('./src/middleware/authMiddleware');
const cors = require('cors');


connectDB();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


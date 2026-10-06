const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

const {
    getAllExpenses,
    createExpense,
    updateExpense,
    deleteExpense,
    getExpenseById,
} = require('../constrollers/expenseController');

// router.use(authMiddleware);

router.get('/', authMiddleware, getAllExpenses);

router.get('/:id', authMiddleware, getExpenseById)

router.post('/', authMiddleware, createExpense);

router.put('/:id', authMiddleware, updateExpense);

router.delete('/:id', authMiddleware, deleteExpense);

module.exports = router;
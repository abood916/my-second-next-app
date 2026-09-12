
"use client"

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ExpenseForm from "./components/ExpenseForm";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";

type Expense = {
  id: number
  title: string,
  amount: number,
  category: string,
  date: string,
  description: string,
}

export default function Home() {
  const [expenses, setExpenses] = useState([
    {
        id: 1,
        title: "Groceries",
        amount: 50,
        category: "Food",
        date: "7-8-2026",
        description: "Weekly groceries"
    },

    {
        id: 2,
        title: "Taxi",
        amount: 15,
        category: "Transport",
        date: "6-8-2026",
        description: "Trip to work"
    }, 
]);



useEffect(() => {
  const savedExpenses = localStorage.getItem("expenses");

  if(savedExpenses) {
    setExpenses(JSON.parse(savedExpenses));
  }
}, []);               

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses])

const [darkMode, setDarkMode] = useState(false);

const [editingId, setEditingId] = useState<number | null>(null);


const handleAddExpense = (newExpense: Omit<Expense, "id">) => { 
  const expenseWithId = {
        id: Date.now(),
        ...newExpense,
    };
    
  setExpenses([...expenses, expenseWithId])
};

const handleEdit = (id: number) => {
    setEditingId(id);
};

const handleUpdateExpense = (updatedExpense: Expense) => {
    setExpenses(
        expenses.map((expense) =>
            expense.id === updatedExpense.id
                ? updatedExpense
                : expense
        )
    );
};

const handleDeleteExpense = (id: number) => {
  setExpenses (
    expenses.filter((expense) => expense.id !== id)
  );
};

const expenseToEdit = expenses.find(
    (expense) => expense.id === editingId
);

  return (
 
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" 
    : "bg-white text-black min-h-screen"}>
    <Header onToogleDarkMode = {() => setDarkMode(!darkMode)} />

    <div className="flex">
        <SideBar />

        <main className="flex-1 px-3">
            <Dashboard 
            expenses={expenses} 
            darkMode={darkMode}
            onEdit={handleEdit}
            onDelete={handleDeleteExpense}
            />


            <ExpenseForm
              onAddExpense={handleAddExpense}
              expenseToEdit={expenseToEdit}
              onUpdateExpense={handleUpdateExpense}
/>
        </main>
    </div>
</div>
  )

}
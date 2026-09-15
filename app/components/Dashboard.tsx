"use client"
import EmptyState from "./EmptyState";
import StatsCards from "./Dashboard/StatsCards";
import SearchBar from "./SearchBar";
import ExpensesFilters from "./ExpenseFilters";
import ExpenseList from "./Dashboard/ExpenseList";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

type Expense = {
    id: number,
    title: string,
    amount: number,
    category: string,
    date: string,
    description: string,
}

export default function Dashboard ({
    expenses, 
    onEdit, 
    onDelete,
    onAddExpense,
    expenseToEdit,
    onUpdateExpense

    }: {
        expenses: Expense[],
        onEdit: (id: number) => void
        onDelete: (id: number) => void 
        onAddExpense: (newExpense: Omit<Expense, "id">) => void,
        expenseToEdit?: Expense,
        onUpdateExpense: (updatedExpense: Expense) => void,
        }) {
     const [search, setSearch] = useState("");
     const [category, setCategory] = useState("All")
     const filteredExpenses = expenses.filter((expense) => 
    expense.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || expense.category === category))
    return (
        <div>
            <StatsCards expenses={expenses}/>
            <div className="flex gap-4">
                <SearchBar onSearch={setSearch}/>
                <ExpensesFilters onFilter={setCategory} />  
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    {
                filteredExpenses.length > 0 ? (
                    <ExpenseList 
                        expenses={filteredExpenses} 
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ) : ( <EmptyState /> )
            }
                </div>
                
                <div>
                    <ExpenseForm
                        onAddExpense={onAddExpense}
                        expenseToEdit={expenseToEdit}
                        onUpdateExpense={onUpdateExpense}
                    />
                </div>

            </div>

            
        </div>
    )
}
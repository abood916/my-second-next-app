"use client"
import EmptyState from "./EmptyState";
import StatsCards from "./Dashboard/StatsCards";
import SearchBar from "./SearchBar";
import ExpensesFilters from "./ExpenseFilters";
import ExpenseList from "./Dashboard/ExpenseList";
import { useState } from "react";

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
    darkMode, 
    onEdit, 
    onDelete,

    }: {
        expenses: Expense[],
        darkMode: boolean 
        onEdit: (id: number) => void
        onDelete: (id: number) => void 
        }) {
     const [search, setSearch] = useState("");
     const [category, setCategory] = useState("All")
     const filteredExpenses = expenses.filter((expense) => 
    expense.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || expense.category === category))
    return (
        <div>
            <StatsCards expenses={expenses}/>
            <SearchBar onSearch={setSearch}/>
            <ExpensesFilters onFilter={setCategory} darkMode={darkMode}/>  

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
    )
}
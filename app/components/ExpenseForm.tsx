
"use client"

import { useState, useEffect } from "react"

export default function ExpenseForm ({
    onAddExpense,
    expenseToEdit,
    onUpdateExpense,
}: {
    onAddExpense: (newExpense: {
        title: string;
        amount: number;
        category: string;
        date: string;
        description: string;
    }) => void;

    onUpdateExpense: (updatedExpense: {
    id: number;
    title: string;
    amount: number;
    category: string;
    date: string;
    description: string;
}) => void;

    expenseToEdit?: {
        id: number;
        title: string;
        amount: number;
        category: string;
        date: string;
        description: string;
    };
}) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.title) {
            setError({...error, title: "Title Is Required"})
        };

        if(!formData.amount || Number(formData.amount) <= 0) {
            setError({...error, amount: "Must Be Greater Than 0"})
        };

        if(!formData.date) {
            setError({...error, date: "Date Is Required"})
        };

        if(!formData.description) {
            setError({...error, description: "Description Is Required"})
        };

        if (
            !formData.title ||
            !formData.amount ||
            Number(formData.amount) <= 0 ||
            !formData.date ||
            !formData.description
        ) {
    return;
}

        if (expenseToEdit) {
            onUpdateExpense({
            id: expenseToEdit.id,
            ...formData,
            amount: Number(formData.amount),
        });

    return;
}

onAddExpense({
    ...formData,
    amount: Number(formData.amount),
});

        setFormData({
            title: "",
            amount: "",
            category: "",
            date: "",
            description: "",
});
    }
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: "",
    });

    useEffect(() => {
    if (expenseToEdit) {
        setFormData({
            title: expenseToEdit.title,
            amount: String(expenseToEdit.amount),
            category: expenseToEdit.category,
            date: expenseToEdit.date,
            description: expenseToEdit.description,
        });
    }
        }, [expenseToEdit]);

    const [error, setError] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        description: "",
    });


    
    return (
    <div className="px-6 pb-6 mt-4">
        <form action="" onSubmit={handleSubmit} className="max-w-xl space-y-4">

            <div className="flex flex-col gap-1">
                <label htmlFor="t" className="text-sm font-medium">Title</label>
                <input type="text"
                id="t" placeholder="Title..." 
                value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full rounded-md border border-gray-400 px-2 py-1
                text-sm focus:outline-none"/>
                {error.title && <p>{error.title}</p>}
                
            </div>
           
            <div className="flex flex-col gap-1">
                <label htmlFor="a" className="text-sm font-medium">Amount</label>
                <input type="number"
                placeholder="Amount..."  
                id="a" 
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value })}
                className="w-full rounded-md border border-gray-400 px-2 py-1
                text-sm focus:outline-none"/>
                {error.amount && <p className="text-sm text-red-500">{error.amount}</p>}
            </div>
            
            <div className="flex flex-col gap-1">
                <label htmlFor="c" className="text-sm font-medium">Category</label>
                <select id="c"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value} )}
                className="w-full rounded-md border border-gray-400 px-2 py-1
                text-sm focus:outline-none">
                <option>Entertainment</option>
                <option>Food</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Other</option>
                </select>
            </div>
            
            <div className="flex flex-col gap-1">
                <label htmlFor="d" className="text-sm font-medium">Date</label>
                <input type="date" id="d"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full rounded-md border border-gray-400 px-2 py-1
                text-sm focus:outline-none"/>
                {error.date && <p className="text-sm text-red-500">{error.date}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="desc" className="text-sm font-medium">Description</label>
                <textarea id="desc" placeholder="Description..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full min-h-24 rounded-md border border-gray-400 px-3 py-2 text-sm
                        resize-y focus:outline-none"
                        />
                {error.description && <p className="text-sm text-red-500">{error.description}</p>}
            </div>
            

            <button type="submit"
            className="w-64 px-3 py-2 border border-gray-400 rounded-md
            hover:bg-gray-200 text-sm cursor-pointer
            font-medium transition">{expenseToEdit ? "Update Expense" : "Add Expense"}</button>
        </form>
        </div>
        
    )
}
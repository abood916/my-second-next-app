"use client"
import { useRouter } from "next/navigation";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../services/authServices";
import Header from "../components/Header";
// import SideBar from "./components/SideBar";
import Dashboard from "../components/Dashboard";
import { useState, useEffect } from "react";
import SpendingByCategory from "../components/SpendingByCategory";

type Expense = {
  id: number | string;
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingId, setEditingId] = useState<number | string | null>(null);

  const router = useRouter();

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/Login");
  }
}, [router]);

  useEffect(() => {
    getExpenses()
      .then((data) => {
        const list = Array.isArray(data) ? data : data.expenses || [];
        const formattedData = list.map((item: any) => ({
          id: item._id || item.id || Date.now().toString(),
          title: item.title || item.name || "Untitled",
          amount: Number(item.amount) || 0,
          category: item.category || "General",
          date: item.date || "",
          description: item.description || "",
        }));
        setExpenses(formattedData);
      })
      .catch((err) => {
        console.error("Error fetching expenses:", err);
      });
  }, []);

  const handleAddExpense = async (newExpense: Omit<Expense, "id">) => {
    try {
      const payload = {
        title: newExpense.title || "New Expense",
        amount: Number(newExpense.amount) || 0,
        category: newExpense.category || "General",
        date: newExpense.date || new Date().toISOString().split("T")[0],
        description: newExpense.description || "",
      };

      const created = await addExpense(payload);
      const item = created.expense || created.data || created;

      const formattedCreated: Expense = {
        id: item._id || item.id || Date.now().toString(),
        title: item.title || payload.title,
        amount: Number(item.amount) || payload.amount,
        category: item.category || payload.category,
        date: item.date || payload.date,
        description: item.description || payload.description,
      };

      setExpenses((prev) => [...prev, formattedCreated]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const handleEdit = (id: number | string) => {
    setEditingId(id);
  };

  const handleUpdateExpense = async (updatedExpense: Expense) => {
    try {
      if (typeof updatedExpense.id === "string" && updatedExpense.id.length === 24) {
        await updateExpense(updatedExpense.id, updatedExpense);
      }
      setExpenses((prev) =>
        prev.map((expense) =>
          expense.id === updatedExpense.id ? updatedExpense : expense
        )
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleDeleteExpense = async (id: number | string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));

    if (typeof id === "string" && id.length === 24) {
      try {
        await deleteExpense(id);
      } catch (error) {
        console.error("Error deleting expense from server:", error);
      }
    }
  };

  const expenseToEdit = expenses.find(
    (expense) => expense.id === editingId
  );

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      <Header />

      <div className="flex">
        {/* <SideBar /> */}

        <main className="flex-1 px-3 sm:px-4 lg:px-6">
          <Dashboard 
            expenses={expenses} 
            onEdit={handleEdit}
            onDelete={handleDeleteExpense}
            onAddExpense={handleAddExpense}
            expenseToEdit={expenseToEdit}
            onUpdateExpense={handleUpdateExpense}
          />
          <SpendingByCategory expenses={expenses} />
        </main>
      </div>
    </div>
  );
}
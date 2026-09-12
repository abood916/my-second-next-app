
"use client"

type ExpenseFilterProps = {
    onFilter: (value: string) => void
    darkMode: boolean
   
}
export default function ExpensesFilters ({onFilter, darkMode} : 
    ExpenseFilterProps) {
    return (
     <div className="px-6 mb-6">
         <select onChange={(e) => onFilter(e.target.value)}
            className={`w-full md:w-48 px-4 py-2 border rounded-md
    text-sm font-medium
    ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <option>All</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Other</option>
        </select>
     </div>   
       
    )
}
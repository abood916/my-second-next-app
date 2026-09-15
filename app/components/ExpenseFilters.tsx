
"use client"

type ExpenseFilterProps = {
    onFilter: (value: string) => void
   
}
export default function ExpensesFilters ({onFilter} : 
    ExpenseFilterProps) {
    return (
     <div className="px-6 mb-6">
         <select onChange={(e) => onFilter(e.target.value)}
            className={`w-full md:w-48 px-4 py-2 border rounded-2xl
    text-sm font-medium ml-1
    bg-white text-black`}>
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
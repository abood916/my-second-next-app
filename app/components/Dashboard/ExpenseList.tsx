

type Expenses = {
    id: number,
    title: string,
    amount: number,
    category: string,
    date: string,
    description: string,
}


export default function ExpenseList({
    expenses,
    onEdit,
    onDelete,    
}: {
        expenses: Expenses[],
        onEdit: (id: number) => void
        onDelete: (id: number) => void
        
    }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
            {expenses.map((expense) => (
                <div
                    key={expense.id}
                    className="border border-gray-400 rounded-lg p-5"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">
                            {expense.title}
                        </h2>

                        <p className="text-lg font-semibold">
                            ${expense.amount}
                        </p>
                    </div>

                    <p className="mt-2 text-sm font-medium">
                        {expense.category}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        {expense.date}
                    </p>

                    <p className="mt-3 text-sm text-gray-600">
                        {expense.description}
                    </p>
                    <button 
                    onClick={() => onEdit(expense.id)}
                    className="mt-4 border border-gray-400 rounded-md px-3 py-1">
                        Edit 
                    </button>

                    <button
                    onClick={() => onDelete(expense.id)}
                    className="mt-4 border border-gray-400 rounded-md px-3 py-1"
                        >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}
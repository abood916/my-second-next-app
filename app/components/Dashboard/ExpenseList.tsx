

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

        const categoryColors = {
    Food: "border-green-400 text-green-400",
    Transport: "border-blue-400 text-blue-400",
    Entertainment: "border-purple-400 text-purple-400",
    Shopping: "border-orange-400 text-orange-400",
    Other: "border-yellow-400 text-yellow-400",
    Bills: "border-red-700 text-red-700"
};

const borderLiftColor = {
    Food: "border-l-green-400",
    Transport: "border-l-blue-400",
    Entertainment: "border-l-purple-400",
    Shopping: "border-l-orange-400",
    Other: "border-l-yellow-400",
    Bills: "border-l-red-700",
}

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
            {expenses.map((expense) => (
                <div
                    key={expense.id}
                    className={`border border-gray-100 border-l-4 rounded-2xl p-5 bg-white ${borderLiftColor[expense.category as keyof typeof borderLiftColor]}`}
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">
                            {expense.title}
                        </h2>

                        <p className="text-lg font-semibold">
                            ${expense.amount}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <p className={`mt-2 text-sm font-bold border-2 p-2 w-fit rounded-3xl ${categoryColors[expense.category as keyof typeof categoryColors]}`}>
                            {expense.category}
                        </p>

                        <p className="mt-5 text-sm text-gray-500 flex">
                            {expense.date}
                        </p>
                    </div>
                    

                    <p className="mt-3 text-sm text-gray-600">
                        {expense.description}
                    </p>
                    <button 
                    onClick={() => onEdit(expense.id)}
                    className="mt-4 border border-none px-3 py-1 font-bold text-purple-500 cursor-pointer">
                        Edit 
                    </button>

                    <button
                    onClick={() => onDelete(expense.id)}
                    className="mt-4 border border-none  px-3 py-1 font-bold text-red-600 cursor-pointer"
                        >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}
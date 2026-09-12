type Expense = {
    title: string,
    amount: number,
    category: string,
    date: string, 
    description: string,
}


export default function StatsCards({expenses}: {expenses: Expense[]}) {

    const totalExpenses = expenses.reduce((total, expense) => 
    total + expense.amount, 0);

    const numberOfExpeses = expenses.length;
    const highestExpense = Math.max(
        ...expenses.map((expense) => expense.amount)
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                <div className="rounded-lg border border-gray-400 p-5">
            <h2 className="text-sm font-medium text-gray-500">Total Expenses</h2>
            <p className="mt-2 text-sm font-bold">{totalExpenses}</p>
        </div>

        <div className="rounded-lg p-5 border border-gray-400">
            <h2 className="text-sm font-medium text-gray-500">Number Of Expenses</h2>
            <p className="mt-2 text-sm font-bold">{numberOfExpeses}</p>
        </div>

        <div className="rounded-lg border border-gray-400 p-5">
            <h2 className="text-sm font-medium text-gray-500">Highest Expense</h2>
            <p className="mt-2 text-sm font-bold">{highestExpense}</p>
        </div>
        </div>

    )
}
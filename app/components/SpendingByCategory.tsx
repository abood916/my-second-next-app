type Expense = {
    id: number;
    title: string;
    amount: number;
    category: string;
    date: string;
    description: string;
};

export default function SpendingByCategory({
    expenses
}: {
    expenses: Expense[];
}) {

    const spendingColors = {
    Food: "bg-green-400",
    Transport: "bg-blue-400",
    Entertainment: "bg-purple-400",
    Shopping: "bg-orange-400",
    Other: "bg-yellow-400",
    Bills: "bg-red-700",
}

    const categoryTotals: { [key: string]: number } = {};

    expenses.forEach((expense) => {
        if (categoryTotals[expense.category]) {
            categoryTotals[expense.category] += expense.amount;
        } else {
            categoryTotals[expense.category] = expense.amount;
        }
    });

    const maxAmount = Math.max(...Object.values(categoryTotals));

    return (
        <div className="mt-4 mx-3 sm:mx-4 lg:mx-6 p-4 lg:p-5 bg-white rounded-2xl border border-gray-200">

            <h2 className="text-lg font-semibold mb-5">
                Spending by category
            </h2>

            {Object.entries(categoryTotals).map(([category, amount]) => {
                const percentage = (amount / maxAmount) * 100;

                return (
                    <div key={category} className="flex items-center gap-3 mb-3">
                        <p className="w-20 sm:w-24 lg:w-28 text-sm font-medium">
                            {category}
                        </p>

                        <div className="flex-1 h-3 bg-gray-200 rounded-full">
                            <div
                                className={`h-3 ${spendingColors[category as keyof typeof spendingColors]} rounded-full`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>

                        <p className="w-12 text-right text-sm font-medium">
                            ${amount}
                        </p>
                    </div>
                );
            })}

        </div>
    );
}
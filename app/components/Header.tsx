
export default function Header({
    onToogleDarkMode}
    : {onToogleDarkMode: () => void}) {
    return (
        <div className="w-full h-16 px-6 flex justify-between items-center p-4  border border-gray-400">
            <h1 className="text-2xl font-bold">Expense Tracker</h1>
            <button onClick={onToogleDarkMode}
            className="px-4 py-2 rounded-md border border-gray-400 text-sm font-medium 
            hover:bg-gray-100 cursor-pointer transition"
            >Dark Mode</button>
        </div>
        

    )
}
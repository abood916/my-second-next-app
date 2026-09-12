

export default function SideBar() {
    return (
        <aside className="w-64 min-h-screen p-4 border border-white">
            <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

            <nav className="space-y-4">
                <p className="text-base font-medium cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                    Expenses</p>
                <p className="text-base font-medium cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                    Categories</p>
                <p className="text-base font-medium cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">
                    Setting</p>
            </nav>
        </aside>
    )
}
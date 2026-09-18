

export default function Navbar () {
    return (
        <nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center gap-2">
                <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                </svg>
                <h2 className="text-lg font-bold text-slate-800">Expense Tracker</h2>
            </div>
            

            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                <a href="#" className="font-bold text-sm text-slate-800">Features</a>
                <a href="#" className="font-bold text-sm text-slate-800">How it works</a>
                <a href="#" className="font-bold text-sm text-slate-800">About</a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <a href="/Login" className="text-sm font-bold text-slate-700 hover:text-slate-600 transition-colors">Login</a>
                <a href="/register" className="text-sm bg-teal-600 hover:bg-teal-700 border border-gray-100 text-white font-bold px-4 py-2 rounded-2xl transition-colors">Create Account</a>
            </div>
        </nav>
    )
}
import Link from "next/link"

import { Poppins } from "next/font/google"

const poppins = Poppins ({
    subsets: ["latin"],
     weight: ["400", "500", "600", "700"],
})
    

export default function Header() {

      
    return (
        <div className={`${poppins.className} w-full h-16 px-6 flex items-center py-2 justify-between`}>
            <div>
                <h1 className={` text-2xl font-bold`}>Expense Tracker</h1>
                <p 
                className="text-gray-400 text-sm"
                >Keep an eye on where your money goes</p>
            </div> 
            
            <div className="flex gap-4">
                <Link href="/Login"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Login</Link >
                <Link href="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow transition-all">Create Account</Link >
            </div>
        </div>
        

    )
}
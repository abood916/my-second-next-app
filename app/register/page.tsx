

export default function RegisterPage () {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">Create account</h2>

                <form action="">

                    <div className="flex flex-col gap-1 mb-2">
                        <label htmlFor="n" className="text-sm text-gray-700">Name</label>
                        <input type="text" id="n" placeholder="Your name"
                        className="w-full bg-gray-50 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                    </div>
                    
                    <div className="flex flex-col gap-1 mb-2">
                        <label htmlFor="e" className="text-sm text-gray-700">Email</label>
                        <input type="email" id="e" placeholder="e.g. a11...@gmail.com"
                        className="w-full bg-gray-50 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                    </div>
                    
                    <div className="flex flex-col gap-1 mb-2">
                        <label htmlFor="p" className="text-sm text-gray-700">Password</label>
                        <input type="password" id="p" placeholder="Your password"
                        className="w-full bg-gray-50 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                    </div>
                   
                    <div className="flex flex-col gap-1 mb-2">
                        <label htmlFor="cP" className="text-sm text-gray-700">Confirm password</label>
                        <input type="password" id="cP" placeholder="Confirm your password"
                        className="w-full bg-gray-50 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"/>
                    </div>
                   
                    <button className="w-full mt-2 px-2 py-3 bg-indigo-500 text-white font-bold rounded-lg cursor-pointer hover:bg-indigo-600 transition">Create Account</button>

                    <p className="text-sm text-gray-700 mt-2 text-center">Already have an account?  
                        <a href="/Login" className="text-sm text-indigo-500 font-bold hover:text-indigo-600"> Login</a>
                    </p>

                </form>
            </div>
        </div>
    )
}
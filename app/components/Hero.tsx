
export default function Hero () {
    return (
        <section className="flex flex-col lg:flex-row gap-10 items-center justify-between px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="space-y-4">
                <h1 className="font-bold text-4xl sm:text-5xl tracking-tight leading-tight text-slate-900">Take Control Of <br />Your Expenses.</h1>
                <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-xl">
                    Easely track spending, manage budgets, and understand where your money goes.</p>
            </div>

            <div className="w-full max-w-lg">
                <img src="/screenshoot.png" alt="Screenshot" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200/60 object-cover"/>
            </div>
           
        </section>
        
    )
}

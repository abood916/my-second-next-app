export default function StepCard() {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto space-y-10">

      
      <h2 className="text-3xl font-bold text-center text-slate-900">
        How It Works
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        
        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900">Add Your Expenses</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connect accounts or input manually.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">

          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900">Organize Your Spending</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Automatically categorize or add tags.
            </p>
          </div>
        </div>

       
        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900">Understand Your Finances</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Visualize spending with powerful reports.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
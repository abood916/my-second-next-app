export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t border-slate-100">
      <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center text-center">
        
        <div className="flex items-center justify-center gap-2">
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
          <span className="text-lg font-bold text-slate-900">ExpenseFlow</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Product</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Support</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <hr className="w-full border-slate-100" />

        <div>
          <p className="text-xs text-slate-400">
            &copy; 2026 ExpenseFlow Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}
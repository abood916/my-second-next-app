export default function CTA() {
  return (
    <div className="w-[calc(100%-2rem)] sm:w-auto max-w-6xl mx-auto my-8 sm:my-12 p-6 sm:p-8 lg:p-12 bg-sky-100/70 rounded-2xl flex flex-col items-center justify-center space-y-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
        Start Tracking Your Expenses Today
      </h2>
      <a
        href="/MainContent"
        className="px-6 py-2.5 text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-full shadow-sm transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
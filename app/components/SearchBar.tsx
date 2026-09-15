"use client"



type searchBarProps = {
    onSearch: (value: string) => void
}
export default function SearchBar ({onSearch}: searchBarProps) {
   
    return (
        
        <input type="text"
        placeholder="Search Expenses"
        onChange={(e) => onSearch(e.target.value) }
        className="bg-white border border-gray-200 rounded-2xl mb-4 p-1 outline-none w-120
        focus:border-gray-500 px-4 py-2 transition-colors"
        />
    )
}
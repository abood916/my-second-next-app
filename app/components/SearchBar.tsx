"use client"



type searchBarProps = {
    onSearch: (value: string) => void
}
export default function SearchBar ({onSearch}: searchBarProps) {
   
    return (
        
        <input type="text"
        placeholder="Search Expenses"
        onChange={(e) => onSearch(e.target.value) }
        className=" border border-gray-400 rounded-md mb-4 p-1 outline-none w-full 
        focus:border-gray-500 px-4 py-2 transition-colors"
        />
    )
}
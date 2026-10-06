import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google"

const poppins = Poppins ({
    subsets: ["latin"],
     weight: ["400", "500", "600", "700"],
})
    

export default function Header() {

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/Login");
    };

      
    return (
        <div className={`${poppins.className} w-full h-16 px-3 md:px-6 flex items-center py-2 justify-between`}>
            <div>
                <h1 className={`text-xl md:text-2xl font-bold`}>Expense Tracker</h1>
                <p 
                className="text-gray-400 text-sm"
                >Keep an eye on where your money goes</p>
            </div> 
            
            <button 
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
                Logout
            </button>
        </div>
        

    )
}
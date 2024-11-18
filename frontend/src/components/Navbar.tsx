import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-amber-100 border-b-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/monkey.png"
                alt="Monkey mascot"
                width={40}
                height={40}
                className="transform hover:rotate-12 transition-transform"
              />
              <span className="text-2xl font-bold text-amber-800 font-['Comic_Sans_MS']">
                Snack Safari
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/home" 
              className="text-amber-800 hover:text-amber-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-amber-800 hover:text-amber-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors font-medium flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                />
              </svg>
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
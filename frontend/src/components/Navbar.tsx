
import Link from 'next/link';
import { BookOpen, Search, ShoppingCart } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
                                <BookOpen size={20} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-900">BookScout</span>
                        </Link>
                        <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                            <Link href="/category/fiction" className="border-transparent text-gray-500 hover:border-green-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Fiction
                            </Link>
                            <Link href="/category/non-fiction" className="border-transparent text-gray-500 hover:border-green-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Non-Fiction
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Search size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

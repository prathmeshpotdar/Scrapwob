
import Link from 'next/link';
import { ArrowRight, Book } from 'lucide-react';

const CATEGORIES = [
  { name: 'Fiction', slug: 'fiction', count: '1000+', color: 'bg-blue-100 text-blue-800' },
  { name: 'Non-Fiction', slug: 'non-fiction', count: '800+', color: 'bg-green-100 text-green-800' },
  { name: 'Children\'s Books', slug: 'childrens-books', count: '500+', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Rare Books', slug: 'rare-books', count: '50+', color: 'bg-indigo-100 text-indigo-800' },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Discover Books <span className="text-green-600">Reimagined</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Explore a massive collection of books from World of Books, scraped and indexed for your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <Link key={cat.slug} href={`/category/${cat.slug}`} className="group relative block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className={`w-12 h-12 rounded-full ${cat.color} flex items-center justify-center mb-4`}>
              <Book size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              {cat.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{cat.count} Books Available</p>
            <div className="mt-4 flex items-center text-sm font-medium text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

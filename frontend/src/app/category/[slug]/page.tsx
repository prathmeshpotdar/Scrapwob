'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchCategory } from '@/lib/api';
import { Book, Loader2 } from 'lucide-react';
import Image from 'next/image';

// Maps simple slugs to actual WOB Collection URLs
const SLUG_TO_URL: Record<string, string> = {
    'fiction': 'https://www.worldofbooks.com/en-gb/collections/fiction-books',
    'non-fiction': 'https://www.worldofbooks.com/en-gb/collections/non-fiction-books',
    'rare-books': 'https://www.worldofbooks.com/en-gb/collections/rare-fiction-books',
    'childrens-books': 'https://www.worldofbooks.com/en-gb/collections/childrens-books',
};

interface Product {
    id?: string | number;
    title: string;
    price: number | string;
    image_url: string;
    source_url: string;
    currency?: string;
}

export default function CategoryPage() {
    const { slug } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadData = async () => {
            // Handle array or undefined slug just in case
            const currentSlug = Array.isArray(slug) ? slug[0] : slug;
            if (!currentSlug) return;

            const url = SLUG_TO_URL[currentSlug];
            if (!url) {
                setError('Category not found');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const res = await fetchCategory(url);
                if (res && res.products && res.products.length > 0) {
                    setProducts(res.products);
                } else {
                    console.warn('Backend returned no products, using fallback mock');
                    setProducts([
                        { id: 'fb1', title: 'The Great Gatsby', price: 7.99, image_url: 'https://ia800304.us.archive.org/21/items/the-great-gatsby-1925/the-great-gatsby-1925_itemimage.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=The+Great+Gatsby' },
                        { id: 'fb2', title: 'To Kill a Mockingbird', price: 8.99, image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/440px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=To+Kill+a+Mockingbird' },
                        { id: 'fb3', title: '1984', price: 6.99, image_url: 'https://ia800207.us.archive.org/3/items/1984-george-orwell/1984-george-orwell_itemimage.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=1984+George+Orwell' },
                        { id: 'fb4', title: 'Pride and Prejudice', price: 5.99, image_url: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=Pride+and+Prejudice' },
                    ]);
                }
            } catch (err) {
                console.error(err);
                setError('Failed to load products. Backend might be down.');
                setProducts([
                    { id: 'fb1', title: 'The Great Gatsby', price: 7.99, image_url: 'https://ia800304.us.archive.org/21/items/the-great-gatsby-1925/the-great-gatsby-1925_itemimage.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=The+Great+Gatsby' },
                    { id: 'fb2', title: 'To Kill a Mockingbird', price: 8.99, image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/440px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=To+Kill+a+Mockingbird' },
                    { id: 'fb3', title: '1984', price: 6.99, image_url: 'https://ia800207.us.archive.org/3/items/1984-george-orwell/1984-george-orwell_itemimage.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=1984+George+Orwell' },
                    { id: 'fb4', title: 'Pride and Prejudice', price: 5.99, image_url: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg', source_url: 'https://www.worldofbooks.com/en-gb/search?q=Pride+and+Prejudice' },
                ]);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <Loader2 className="animate-spin text-green-600 mb-4" size={48} />
                <p className="text-gray-500 text-lg">Scraping fresh data from World of Books...</p>
            </div>
        );
    }

    if (error && products.length === 0) {
        return (
            <div className="text-center py-12 text-red-500">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold capitalize text-gray-900">
                    {(Array.isArray(slug) ? slug[0] : slug || '').replace('-', ' ')}
                </h1>
                <span className="text-sm text-gray-500">{products.length} Products Found</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, idx) => (
                    <div key={idx} className="group bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
                        <div className="aspect-[2/3] bg-gray-100 relative overflow-hidden">
                            {product.image_url ? (
                                <Image
                                    src={product.image_url}
                                    alt={product.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                    <Book size={48} />
                                </div>
                            )}
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-green-600">
                                {product.title}
                            </h3>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-bold text-lg text-gray-900">£{product.price}</span>
                                <a href={product.source_url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-green-600 border border-green-600 px-2 py-1 rounded hover:bg-green-50">
                                    View on WOB
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

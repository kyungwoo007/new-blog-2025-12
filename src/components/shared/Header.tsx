import Link from 'next/link';
import { Flame } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Flame className="w-8 h-8 text-primary fill-primary" />
                    <span className="text-xl font-bold tracking-tight">
                        Hot Korea <span className="text-secondary">Transport</span>
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
                    <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it Works</Link>
                    <Link href="/wizard" className="px-4 py-2 rounded-full bg-primary text-white text-sm font-bold hover:scale-105 transition-transform">
                        Start Writing
                    </Link>
                </nav>
            </div>
        </header>
    );
}

'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Button } from './ui/button';
import { BookMarked, LogOut, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BookMarked className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Page Whisperer</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Browse
          </Link>
          <Link
            href="/recommendations"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Recommendations
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : user ? (
            <>
              <span className="text-sm text-foreground/80 hidden sm:inline-block">
                {user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <Button variant="default" size="sm" onClick={() => router.push('/login')}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

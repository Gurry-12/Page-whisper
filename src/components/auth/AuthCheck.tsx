'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AuthCheck({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-4 py-12">
        <div className="w-full space-y-4">
            <Skeleton className="h-10 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-24" />
        </div>
        <div className="w-full space-y-4">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  return children;
}

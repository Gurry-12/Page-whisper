'use client';

import AuthCheck from '@/components/auth/AuthCheck';
import { RecommendationsForm } from '@/components/RecommendationsForm';

export default function RecommendationsPage() {
  return (
    <AuthCheck>
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary mb-2">
                AI Book Recommendations
            </h1>
            <p className="text-lg text-foreground/80">
                Describe your reading tastes, and our AI will suggest your next book.
            </p>
        </div>
        <RecommendationsForm />
      </div>
    </AuthCheck>
  );
}

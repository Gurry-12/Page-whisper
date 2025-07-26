import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/lib/books';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const aiHintMap: { [key: string]: string } = {
  'Fantasy': 'castle magic',
  'Sci-Fi': 'cyborg future',
  'Mystery': 'detective clues',
  'Romance': 'couple love',
  'Horror': 'haunted house',
  'Historical Fiction': 'vintage fashion',
  'Adventure': 'airship sky',
  'Thriller': 'art forgery'
};

export function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/book/${book.id}`} className="block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-[2/3] relative w-full">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              data-ai-hint={aiHintMap[book.genre] || 'book cover'}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="font-headline text-lg leading-tight mb-1">{book.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(Math.floor(book.rating))].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            {book.rating % 1 !== 0 && <Star key="half" className="h-4 w-4 fill-current" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />}
            {[...Array(5 - Math.ceil(book.rating))].map((_, i) => <Star key={`empty-${i}`} className="h-4 w-4" />)}
            <span className="ml-2 text-xs text-muted-foreground">{book.rating.toFixed(1)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

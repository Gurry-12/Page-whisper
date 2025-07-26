import { books, Book } from '@/lib/books';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
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

async function getBook(id: string): Promise<Book | undefined> {
  return books.find((book) => book.id === id);
}

export default async function BookDetailPage({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1">
          <div className="aspect-[2/3] relative w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              data-ai-hint={aiHintMap[book.genre] || 'book cover'}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground">{book.genre}</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-headline text-primary mb-2">{book.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1 text-amber-500">
                {[...Array(Math.floor(book.rating))].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                {book.rating % 1 !== 0 && <Star key="half" className="h-5 w-5 fill-current" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />}
                {[...Array(5 - Math.ceil(book.rating))].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5" />)}
            </div>
            <span className="text-muted-foreground font-medium">{book.rating.toFixed(1)} out of 5</span>
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground/90">
            <h2 className="font-headline text-2xl mb-2">Description</h2>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getBookRecommendations } from '@/ai/flows/book-recommendations';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Lightbulb, Loader2 } from 'lucide-react';

const formSchema = z.object({
  readingDescription: z
    .string()
    .min(20, { message: 'Please describe your preferences in at least 20 characters.' })
    .max(500, { message: 'Description must be 500 characters or less.' }),
});

export function RecommendationsForm() {
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { readingDescription: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await getBookRecommendations(values);
      if (result.recommendations && result.recommendations.length > 0) {
        setRecommendations(result.recommendations);
      } else {
        toast({
            variant: 'default',
            title: 'No recommendations found',
            description: "We couldn't find any recommendations based on your description. Try being more specific.",
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: error.message || 'Failed to get recommendations. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Your Reading Preferences</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="readingDescription"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tell us what you like to read</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="e.g., 'I love fast-paced sci-fi thrillers with complex characters and a bit of mystery. Authors like Blake Crouch and Andy Weir are my favorite. I'm not a big fan of romance subplots.'"
                                className="min-h-[120px]"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Get Recommendations
                    </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>

      {recommendations.length > 0 && (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                    <Lightbulb className="text-primary" />
                    Here are your recommendations
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                    {recommendations.map((book, index) => (
                    <li key={index}>{book}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      )}
    </div>
  );
}

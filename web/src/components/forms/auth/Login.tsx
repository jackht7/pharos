'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
  const router = useRouter();
  // This function is called when the form is submitted.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optionally, add authentication logic here.
    router.push('/contracts');
  };

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-bold'>Welcome back!</h1>
        <p className='text-balance text-sm text-muted-foreground'>Enter credentials below to login to your account</p>
      </div>
      <form onSubmit={handleSubmit} {...props}>
        <div className='grid gap-6'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            {/* TODO: Add `required` to the input below */}
            <Input id='email' type='email' placeholder='your@email.com' />
          </div>
          <Button type='submit' className='w-full'>
            Sign in with Email
          </Button>
        </div>
      </form>
    </div>
  );
}

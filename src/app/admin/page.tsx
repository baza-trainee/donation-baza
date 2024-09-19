'use client';

import SignOutButton from '@/components/ui/SignOutButton';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

const page = () => {
  const session = useSession();
  if (!session) {
    redirect('/login');
  }
  return (
    <div className="page_wrapper">
      User {session?.data?.user?.email} signed in
      <SignOutButton />
    </div>
  );
};

export default page;

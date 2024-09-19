'use client';

'use client';

import SignOutButton from '@/components/ui/SignOutButton';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const page = () => {
  const session = useSession();
  const router = useRouter();

  if (!session?.data?.user) {
    router.replace('/login');
  }
  return (
    <div className="page_wrapper">
      User {session?.data?.user?.email} signed in
      <SignOutButton />
    </div>
  );
};

export default page;

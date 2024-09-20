import SignOutButton from '@/components/ui/SignOutButton';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await getAuthSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="page_wrapper">
      User {session?.user?.email} signed in
      <SignOutButton />
    </div>
  );
};

export default page;

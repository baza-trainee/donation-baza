import SignOutButton from '@/components/ui/SignOutButton';
import { redirect } from 'next/navigation';
import { validateRequest } from '@/lib/lucia';

const page = async () => {
  const { user, session } = await validateRequest();

  if (!user && !session) {
    redirect('/login');
  }
  return (
    <div className="page_wrapper">
      User with id {user?.id} is signed in
      <SignOutButton />
    </div>
  );
};

export default page;

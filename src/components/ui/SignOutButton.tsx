'use client';

import { signOut } from '@/utils/actions/auth';

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Вийти</button>;
};

export default SignOutButton;

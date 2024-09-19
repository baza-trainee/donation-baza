'use client';

import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return <button onClick={() => signOut({ callbackUrl: '/' })}>Вийти</button>;
};

export default SignOutButton;

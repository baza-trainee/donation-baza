import '@/theme/globals.scss';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import type { Metadata } from 'next';
import React from 'react';
import RootProviders from '@/components/providers';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Donation Baza',
  description: 'Generated by create next app',
};

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <RootProviders messages={messages} locale={locale}>
      <Header />
      {children}
      <Footer />
    </RootProviders>
  );
}

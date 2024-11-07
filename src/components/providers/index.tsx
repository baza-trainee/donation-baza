import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { ModalProvider } from '../../context/ModalContext';
import QueryClientProvider from '@/components/providers/QueryClientProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function RootProviders({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}) {
  return (
    <ModalProvider>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <QueryClientProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </NextIntlClientProvider>
    </ModalProvider>
  );
}

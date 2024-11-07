import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const translation = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl mb-4">{translation('title')}</h2>
      <p className="text-gray-600 mb-6">{translation('description')}</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {translation('goHome')}
      </Link>
    </div>
  );
}

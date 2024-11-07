import Link from 'next/link';
import { NextPage } from 'next';

const Page404: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <Link href="/">
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go back to homepage
        </a>
      </Link>
    </div>
  );
};

export default Page404;

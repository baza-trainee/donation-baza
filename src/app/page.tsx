import Link from 'next/link';

export default function Home() {
  return (
    <div className="wrapper">
      <Link href={'/login'}>login</Link>
      <Link href={'/applications'}>applications</Link>
      <Link href={'/admin'}>admin</Link>
    </div>
  );
}

import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700"><a href='/'>NextGen Academy</a></h1>
          <nav className="space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
            <Link href="/teacher/login" className="text-blue-600 hover:underline">Staff Login</Link>
            <Link href="/" className="text-blue-600 hover:underline">Check Result</Link>
          </nav>
        </div>
      </header>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-20" />

      {/* Page content */}
      <main>{children}</main>
    </>
  );
}

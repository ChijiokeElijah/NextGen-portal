import Head from 'next/head';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function Home() {
  return (
    <>
      <Head>
        <title>Student Portal</title>
        <meta name="description" content="Login as a student or teacher to access the portal." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col">
        {/* Header */}
        {/* <header className="flex items-center justify-between p-6 max-w-7xl mx-auto space-x-12">
          <h1 className="text-2xl font-bold text-blue-800"><a href='/'>Home</a></h1>
          <h1 className="text-2xl font-bold text-blue-800"><a href='/about'>About Us</a></h1>
          <h1 className="text-2xl font-bold text-blue-800">News</h1> */}
          {/* <h1 className="text-2xl font-bold text-blue-800">STAFF LOGIN</h1>
          <h1 className="text-2xl font-bold text-blue-800">CHECK RESULT</h1> */}
          {/* <nav className="space-x-4">
            <a href="#staff" className="text-blue-700 hover:underline">STAFF Login</a>
            <a href="#result" className="text-blue-700 hover:underline">CHECK RESULT</a>
          </nav> */}
        {/* </header> */}

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-16 max-w-7xl mx-auto">
          {/* Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
               Welcome to NextGen Academy Portal.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This portal is your central hub for academic access and communication at NextGen Academy.
      Students can securely check their results, teachers can upload and manage student scores,
      and visitors can learn more about our school, values, and achievements.  </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/login/student"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Check Result
              </a>
              <a
                href="/teacher/login"
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              >
                Staff Login
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mb-10 lg:mb-0">
            <img
              src="/images/students.jpg"
              alt="Portal Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto bg-blue-50 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} StudentPortal. All rights reserved.
        </footer>
      </main>
    </>
  );
}

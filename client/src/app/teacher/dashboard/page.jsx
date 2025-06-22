
import React from 'react';

const page = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">School Portal</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-300">🏠 Dashboard</a>
          <a href="/teacher/my-classes" className="block hover:text-blue-300">📚 My Classes</a>
          <a href="/teacher/register-student" className="block hover:text-blue-300">💬 Register Student</a>
          <a href="/teacher/create-score" className="block hover:text-blue-300">📊 Create Result</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Top Navbar */}
        <header className="bg-white shadow rounded-lg px-6 py-4 flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">Welcome, Mr./Ms. [TeacherName]</div>
          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>
            <span className="text-xl">👤</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Today's Schedule */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold mb-3">Today's Schedule</h3>
            <ul className="space-y-2">
              <li>9:00 AM – Math (Class A)</li>
              <li>11:00 AM – Physics (Class B)</li>
              <li>2:00 PM – Chemistry (Class C)</li>
            </ul>
          </div>

          {/* Pending Reviews */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold mb-3">Pending Reviews</h3>
            <p className="text-gray-600">📝 5 Assignments to grade</p>
          </div>

          {/* My Classes Summary */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold mb-3">My Classes Summary</h3>
            <ul className="space-y-2">
              <li>Class A – 30 Students</li>
              <li>Class B – 28 Students</li>
              <li>Class C – 25 Students</li>
            </ul>
          </div>

        </section>
      </main>
    </div>
  );
};

export default page;

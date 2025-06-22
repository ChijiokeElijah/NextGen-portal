import React from 'react';

const page = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Student Portal</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-indigo-300">🏠 Dashboard</a>
          <a href="#" className="block hover:text-indigo-300">📚 My Results</a>
          <a href="#" className="block hover:text-indigo-300">💬 Messages</a>
          <a href="#" className="block hover:text-indigo-300">📅 Calendar</a>
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Topbar */}
        <header className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow">
          <h1 className="text-xl font-semibold">Welcome, [Student Name]</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl">🔔</span>
            <span className="text-2xl">👤</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Logout
            </button>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Upcoming Classes */}
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">📅 Upcoming Classes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>9:00 AM – English (Room 203)</li>
              <li>11:00 AM – Biology (Lab)</li>
              <li>2:00 PM – History (Room 101)</li>
            </ul>
          </div>

          {/* Assignments Due */}
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">📝 Assignments Due</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Math Homework – Due: Jun 14</li>
              <li>Science Report – Due: Jun 15</li>
            </ul>
          </div>

          {/* Recent Grades */}
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">📊 Recent Grades</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Math Quiz – 85%</li>
              <li>Physics Lab – 92%</li>
              <li>Literature Essay – 88%</li>
            </ul>
          </div>

        </section>
      </main>
    </div>
  );
};

export default page;

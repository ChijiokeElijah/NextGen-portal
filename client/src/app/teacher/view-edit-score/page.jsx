import React, { useState } from 'react';

const page = () => {
  const [filters, setFilters] = useState({
    classId: '',
    term: '',
    session: '',
  });

  const [scores, setScores] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      subject: 'Mathematics',
      score: 78,
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      subject: 'English',
      score: 85,
    },
    // More sample data...
  ]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleScoreChange = (id, newScore) => {
    setScores(scores.map(score =>
      score.id === id ? { ...score, score: newScore } : score
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting edited scores:', scores);
    // API call to update scores goes here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-start justify-center">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">View & Edit Student Scores</h2>

        {/* Filters */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <select
            name="classId"
            value={filters.classId}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Class</option>
            <option value="1">Grade 10</option>
            <option value="2">Grade 11</option>
          </select>

          <select
            name="term"
            value={filters.term}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Term</option>
            <option value="first">First Term</option>
            <option value="second">Second Term</option>
            <option value="third">Third Term</option>
          </select>

          <select
            name="session"
            value={filters.session}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Session</option>
            <option value="2024_2025">2024/2025</option>
            <option value="2025_2026">2025/2026</option>
          </select>
        </form>

        {/* Scores Table */}
        <form onSubmit={handleSubmit}>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Score</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((entry, index) => (
                  <tr key={entry.id} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{entry.studentName}</td>
                    <td className="px-4 py-2">{entry.subject}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={entry.score}
                        onChange={(e) => handleScoreChange(entry.id, parseInt(e.target.value))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

'use client'
import { useState } from 'react';

export default function MyClasses() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [className, setClassName] = useState('');
  const [classes, setClasses] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!className.trim()) return;

    // Simulate saving the class
    const newClass = {
      id: Date.now(),
      name: className,
    };
    setClasses([...classes, newClass]);
    setClassName('');
    setShowCreateForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">My Classes</h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showCreateForm ? 'Cancel' : 'Create Class'}
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreate} className="mb-6 bg-white p-6 rounded shadow">
          <label className="block text-gray-700 mb-2 font-medium">Class Name</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="e.g. JS3 Science"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Class
          </button>
        </form>
      )}

      <div className="space-y-3">
        {classes.length === 0 ? (
          <p className="text-gray-500">No classes created yet.</p>
        ) : (
          classes.map((cls) => (
            <div key={cls.id} className="bg-blue-50 p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-blue-800">{cls.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

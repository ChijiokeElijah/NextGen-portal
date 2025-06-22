import React from 'react'

export default function page() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12" id="about">
    <div className="max-w-5xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-blue-900 mb-6">About NextGen Academy</h3>
    <p className="text-gray-700 text-lg mb-8">
      Established in 2012, <strong>NextGen Academy</strong> is a forward-thinking secondary school committed
      to academic excellence, character development, and digital empowerment. With a vibrant learning
      environment and passionate educators, we prepare students not only for exams but for life.
    </p>
    
    <div className="grid gap-8 md:grid-cols-3 text-left mt-12">
      <div className="p-6 border rounded shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">National Recognition</h4>
        <p className="text-gray-600">
          Ranked among the top 10 secondary schools in the region by the National Education Board for
          three consecutive years (2021–2023).
        </p>
      </div>

      <div className="p-6 border rounded shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">STEM Excellence</h4>
        <p className="text-gray-600">
          Our students have won 12 awards in national coding, robotics, and science fairs, including
          the prestigious Future Innovators Award in 2023.
        </p>
      </div>

      <div className="p-6 border rounded shadow hover:shadow-md transition">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">Digital Learning</h4>
        <p className="text-gray-600">
          One of the first schools in the country to launch a fully digital results portal,
          empowering students and teachers with real-time academic access.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

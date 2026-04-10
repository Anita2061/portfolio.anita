import React from 'react';
import Anita from '../assets/Anita.jpg';

const About = () => {
  const quickInfoData = [
    { label: 'Education', value: 'Bachelor in Information Technology', icon: '🎓' },
    { label: 'Location', value: 'Butwal, Nepal', icon: '📍' },
    { label: 'Experience', value: '1+ Years', icon: '💻' },
    { label: 'Interest', value: 'Coding, Designing', icon: '💡' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-16">
        <div className="order-1 flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-950">About Me</h1>

          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p className="border-l-4 border-orange-500 pl-4 font-medium italic text-gray-800">
              "Continuous learning is not just a skill; it&apos;s a necessity in modern tech."
            </p>

            <p>
              Hi, I&apos;m <span className="font-semibold text-gray-900">Anita Gyawali</span>. I am a MERN Stack Developer
              who loves building websites that are simple to use, clean, and actually solve problems.
            </p>

            <p>
              My tech journey involves building full-stack applications with
              <span className="font-medium text-gray-900"> MongoDB, Express, React, and Node.js</span>. I specialize in
              turning complex requirements into responsive, user-friendly interfaces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {quickInfoData.map((item, index) => (
              <div key={index} className="rounded-lg border border-gray-100 bg-gray-50 p-3 shadow-sm">
                <span className="mb-1 block text-xl">{item.icon}</span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{item.label}</p>
                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="/Anita-Gyawali-Portfolio-Offline.html"
              download="Anita-Gyawali-Portfolio-Offline.html"
              className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-colors duration-300 hover:bg-orange-600 hover:shadow-lg"
            >
              <span className="mr-2">📥</span>
              Download Portfolio
            </a>
          </div>
        </div>

        <div className="order-2 relative flex justify-center md:order-2">
          <div className="h-64 w-64 transition-transform duration-300 group-hover:scale-105 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img
              src={Anita}
              alt="Anita Gyawali"
              className="h-full w-full rounded-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400/FF4D2D/FFFFFF?text=ANITA';
              }}
            />
          </div>
          <div className="animate-blob absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-orange-200 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animate-blob animation-delay-2000 absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-200 opacity-70 mix-blend-multiply blur-xl filter" />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 inline-block border-b-2 border-gray-100 pb-2 text-3xl font-bold text-gray-900">
          Working Experience
        </h2>
        <div className="space-y-8">
          <div className="relative border-l-2 border-orange-500 pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-orange-500" />
            <h3 className="text-xl font-bold text-gray-900">Full-Stack Developer (MERN)</h3>
            <p className="mb-2 text-sm font-medium text-orange-600">2025 - Present</p>
            <p className="text-gray-600">
              Developed and maintained multiple web applications using React.js and Node.js. Focused on optimizing
              database queries in MongoDB and building responsive UIs with Tailwind CSS.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-200 pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gray-200" />
            <h3 className="text-xl font-bold text-gray-900">Frontend Development Projects</h3>
            <p className="mb-2 text-sm font-medium text-gray-500">2024 - 2025</p>
            <p className="text-gray-600">
              Collaborated on various student projects at Tribhuvan University, creating dynamic dashboards and
              interactive user interfaces for educational management systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

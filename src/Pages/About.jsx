import React from 'react';
import Anita from '../assets/Anita.jpg';



const About = () => {
  const quickInfoData = [
    { label: "Location", value: "Remote", icon: "📍" },
    { label: "Education", value: "Bachelor in Information Technology management", icon: "🎓" },
    { label: "Experience", value: "1+ Years", icon: "💻" },
    { label: "Interest", value: "  Coding, Designing", icon: "💡" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Modern 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr,1fr] gap-12 items-center">
          
          {/* Column 1: Intro Text */}
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-950 tracking-tight">
              About Me
            </h1>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p className="italic font-medium text-gray-800">
                "Continuous learning is not just a skill; it's a necessity in modern tech."
              </p>
              <p>
                Hi, I'm Anita Gyawali. I am a MERN Stack Developer who loves building websites that are simple to use, clean, and actually solve problems. 
                My tech journey started because I always wanted to know how websites were made.
              </p>
              <p>
                I work with the MERN Stack (MongoDB, Express, React, and Node.js). This means I can build a whole website from start to finish. 
               My favorite part is taking a flat design and turning it into a real, responsive website that works beautifully. I primarily use Tailwind CSS and JavaScript to make this happen.       
              </p>
              
            </div>
          </div>

          {/* Column 2: The Main Event - Your Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative group">
            {/* Image Circle */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-400 shadow-2xl overflow-hidden scale-100 group-hover:scale-105 transition-transform duration-300">
              <img 
                src={Anita} 
                alt="" className="w-full h-full object-cover" 
                // Fallback for missing image
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400/FF4D2D/FFFFFF?text=YOUR+PHOTO'; }}
              />
            </div>
            {/* Subtle floating background shapes */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-100 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-8 w-8 h-8 bg-blue-100 rounded-full -z-10"></div>
          </div>

          {/* Column 3: The Updated 'Quick Info' */}
          <div className="order-3 space-y-6 md:pl-6">
            <h2 className="text-3xl font-bold text-gray-900">Expertise At a Glance</h2>
            
            <div className="space-y-4">
              {quickInfoData.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-orange-500 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500 block">{item.label}</span>
                    <span className="text-md font-medium text-gray-950">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* New CTA: Download Resume */}
            <a
              href="/Anita-Gyawali-Portfolio.txt"
              download
              className="mt-8 w-full bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
               Download My Resume
            </a>
          </div>

        </div>

        
      </div>
        
    </div>
  
  );
};

export default About;

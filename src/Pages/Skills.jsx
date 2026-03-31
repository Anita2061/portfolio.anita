import React from 'react';



const Skills = () => {
  const skillsData = [
    { name: "React.jsx ", color: "bg-blue-500" },
    { name: "Tailwind CSS",  color: "bg-cyan-400" },
    { name: "JavaScript",  color: "bg-yellow-400" },
    { name: "Digital Marketing",  color: "bg-purple-500" },
    { name: "Python",  color: "bg-pink-500" },
    { name: "Node.js",  color: "bg-green-500" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Technical <span className="text-blue-600">Skills</span></h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500">{skill.level}</span>
              </div>
              
              {/* Outer Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                {/* Inner Animated Bar */}
                <div 
                  className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Tech Icons Row */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <i className="devicon-react-original colored text-5xl"></i>
          <i className="devicon-tailwindcss-plain colored text-5xl"></i>
          <i className="devicon-javascript-plain colored text-5xl"></i>
          <i className="devicon-photoshop-plain colored text-5xl"></i>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
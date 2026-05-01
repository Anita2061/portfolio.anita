import React from 'react';

const Skills = () => {
  const skills = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain-wordmark" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original" }, // or "devicon-tailwindcss-plain"
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "GitHub", icon: "devicon-github-original" },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            My  <span className="text-blue-600">Skills</span>
          </h2>
        </div>

        {/* Attractive Icon Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center"
            >
              {/* Floating Animation & Glass Effect */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl  border border-slate-100 
                            flex items-center justify-center text-5xl md:text-6xl
                            transition-all duration-500 ease-in-out
                            group-hover:-translate-y-4 ">
                
                <i className={`${skill.icon} colored transition-all duration-500 group-hover:scale-110`}></i>
                
                {/* Decorative Glow behind icon */}
              </div>

              {/* Skill Name Tag */}
              <span className="mt-4 text-sm font-bold text-slate-400 group-hover:text-blue-600  uppercase tracking-widest">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>

      
    </section>
  );
};

export default Skills;
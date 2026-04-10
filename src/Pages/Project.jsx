import React from 'react';



const Project = () => {
  const projectList = [
    
    {
      title: "Product Management System",
      description: "Website where we can buy anything we want. ",
      tech: "React with Python",
    },
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-wide">My Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              
              {/* Project Image */}
              

              {/* Project Details */}
              <div className="p-6 flex flex-col h-full">
  {/* 1. Title at the Top */}
  <h3 className="text-xl font-bold text-slate-900 mb-2">
    Product Management System
  </h3>

  {/* 2. Description in the Middle */}
  <p className="text-slate-600 mb-6 flex-grow">
    Website where we can buy anything we want.
  </p>

  {/* 3. View Project Button at the Bottom */}
  <a
    href="https://frontend-git-main-anita2061s-projects.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex items-center justify-center px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
  >
    View Project
  </a>
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
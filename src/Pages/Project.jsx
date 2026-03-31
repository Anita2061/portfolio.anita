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
              <div className="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {project.tech}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Simple Button */}
                <button className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
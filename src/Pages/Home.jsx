import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';


const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
          MERN <span className="text-blue-600">STACK</span> DEVELOPER
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-8">
          <p className= " font-bold text-3xl ">Let’s Build Something Amazing Together.</p>
          Hi, I’m Anita Gyawali. I'm a MERN Stack Developer specializing in MongoDB, Express, React & Nodejs who builds fast, user-friendly web applications.
           I can take your ideas and turn them into clean, functional code.
          
        </p>
        <div className="flex gap-4">
          <Link to="/projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition shadow-lg">
            View Projects
          </Link>
          <Link to="/skills" className="border-2 border-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition">
            My Skills
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="text-blue-600 text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
          <p className="text-slate-500"><p className=" font-bold text-blue-600">Optimized for Speed and Efficiency.</p>
          I don't just write code, I write code that performs. By using efficient state management, optimizing images, 
            and writing clean backend queries, I ensure your application loads instantly. 
            </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="text-blue-600 text-3xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
          <p className="text-slate-500"><p className=" font-bold text-blue-600">A Seamless Experience on Every Screen.</p>
                   In today’s mobile-first world, your website needs to look stunning everywhere. I build fully responsive layouts using Tailwind CSS that 
                   adapt perfectly to any screen size. 
                  </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <div className="text-blue-600 text-3xl mb-4">🛠️</div>
          <h3 className="text-xl font-bold mb-2">Modern Tech</h3>
          <p className="text-slate-500"><p className=" font-bold text-blue-600">Built with the Latest Industry Standards.</p>
                   I build applications that are not only 
                   powerful and secure but also easy to scale and maintain as your project grows.</p>
        </div>
      </section>
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
    
  );
};

export default Home;
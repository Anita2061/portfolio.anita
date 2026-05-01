import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <section className="relative overflow-hidden pb-24 pt-12 sm:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/80 blur-[110px] sm:h-[520px] sm:w-[520px]" />

        <div className=" mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-7 text-left lg:order-1">
            

            <h1 className="text-4xl font-black  text-slate-900 ">
              MERN Stack{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              I&apos;m{' '}
              <span className="font-bold text-slate-900  decoration-4 ">
                Anita Gyawali
              </span>
              , a MERN Stack Developer building fast, polished web applications that combine clean code with thoughtful
              user experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 sm:gap-5 sm:pt-4">
              <Link
                to="/projects"
                className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-600 active:scale-95"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-2xl border-2 border-slate-200 px-8 py-4 font-bold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px]">
            </div>
          </div>
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

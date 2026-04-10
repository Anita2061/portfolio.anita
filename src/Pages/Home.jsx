import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import AnitaProfile from '../assets/Anita.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <section className="relative overflow-hidden pb-24 pt-12 sm:pt-16 lg:pt-20">
        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 -z-10">
          <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-blue-100 opacity-60 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] h-[30%] w-[30%] rounded-full bg-orange-100 opacity-50 blur-[100px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-7 text-left lg:order-1">
            <div className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className=" text-blue-600">
                Available for freelance and full-time
              </span>
            </div>

            <h1 className="text-4xl font-black  text-slate-900 ">
              MERN Stack{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              I&apos;m{' '}
              <span className="font-bold text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-4">
                Anita Gyawali
              </span>
              , a MERN Stack Developer building fast, polished web applications that combine clean code with thoughtful
              user experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 sm:gap-5 sm:pt-4">
              <Link
                to="/projects"
                className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-2xl shadow-slate-200 transition-all hover:-translate-y-1 hover:bg-blue-600 active:scale-95"
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
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-200/70 to-orange-100/70 blur-3xl" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-[spin_20s_linear_infinite]" />

              <div className="group relative m-4 aspect-square overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_24px_80px_-32px_rgba(37,99,235,0.45)] transition-transform duration-500 hover:rotate-0 rotate-2">
                <img
                  src={AnitaProfile}
                  alt="Portrait of Anita Gyawali"
                  className="h-full w-full rounded-[2rem] object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-blue-100 border border-blue-50">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Specialty</p>
                  <p className="text-sm font-black text-slate-900">MERN Stack</p>
                </div>
              </div>
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

import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 sm:py-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
          {/* 1. BRAND & STATUS */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tighter ">PORTFOLIO</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Available for hire</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Crafting immersive digital experiences through clean code and thoughtful design.
            </p>
          </div>

          {/* 2. EXPLORE LINKS */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors py-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors py-1 inline-block">About</Link></li>
              <li><Link to="/Skills" className="hover:text-blue-400 transition-colors py-1 inline-block">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors py-1 inline-block">Projects</Link></li>
            </ul>
          </div>

          {/* 3. SOCIALS & CONTACT */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Social</h3>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Anita2061"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors flex items-center justify-center"
              >
                <svg viewBox="0 0 16 16" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/anita-gyawali-30161129a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors flex items-center justify-center"
              >
                <svg viewBox="0 0 16 16" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                  <path d="M0 1.15C0 .52.52 0 1.16 0h13.68C15.48 0 16 .52 16 1.16v13.68c0 .64-.52 1.16-1.16 1.16H1.16A1.16 1.16 0 0 1 0 14.84zM4.94 13.39V6.17H2.53v7.22zM3.74 5.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m9.65 8.19V9.35c0-2.16-1.15-3.16-2.69-3.16-1.24 0-1.8.68-2.11 1.16v-1H6.18c.03.66 0 7.04 0 7.04h2.41V9.46c0-.21.02-.42.08-.57.16-.42.52-.85 1.12-.85.79 0 1.1.6 1.1 1.49v3.86z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/anita.gyawali.799849"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors flex items-center justify-center"
              >
                <svg viewBox="0 0 16 16" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
                  <path d="M16 8.05A8 8 0 1 0 6.75 15.95v-5.63H4.72V8.05h2.03V6.33c0-2 1.2-3.1 3.03-3.1.88 0 1.8.16 1.8.16v1.97h-1.01c-.99 0-1.3.61-1.3 1.24v1.49h2.22l-.35 2.27H9.27v5.63A8 8 0 0 0 16 8.05" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4. CALL TO ACTION BOX */}
          <div className="bg-slate-900/50 p-5  rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-2">Have a project?</h3>
            <p className="text-xs text-slate-500 mb-4">Let's discuss how we can work together to build something amazing.</p>
            
            <Link to="/Contact" className="inline-block w-full text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-all">
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-5 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND & STATUS */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tighter ">
                PORTFOLIO
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Available for hire</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Crafting immersive digital experiences through clean code and thoughtful design.
            </p>
          </div>

          {/* 2. EXPLORE LINKS */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">The Story</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/skills" className="hover:text-blue-400 transition-colors">Tech Stack</Link></li>
            </ul>
          </div>

          {/* 3. SOCIALS & CONTACT */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors underline decoration-slate-800 underline-offset-4">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors underline decoration-slate-800 underline-offset-4">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors underline decoration-slate-800 underline-offset-4">Facebook</a></li>
            </ul>
          </div>

          {/* 4. CALL TO ACTION BOX */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-2">Have a project?</h3>
            <p className="text-xs text-slate-500 mb-4">Let's discuss how we can work together to build something amazing.</p>
            <Link to="/contact" className="inline-block w-full text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all">
              Start a Conversation
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
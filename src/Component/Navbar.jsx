import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-600 text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <div className="text-2xl font-bold tracking-tighter">PORTFOLIO</div>

        <ul className="hidden md:flex items-center gap-8 font-medium text-white">
          <li className="hover:text-blue-400 cursor-pointer">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
              Home
            </NavLink>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
              About
            </NavLink>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <NavLink to="/Skills" className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
              Skills
            </NavLink>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
              Projects
            </NavLink>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
              Contact
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={onToggleTheme}
              className="h-10 w-10 rounded-lg border border-slate-700 hover:bg-slate-800 transition flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="h-9 w-9 rounded-lg border border-slate-700 hover:bg-slate-800 transition flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 font-medium text-white">
            <li className="hover:text-blue-400 cursor-pointer">
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
                Home
              </NavLink>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <NavLink to="/About" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
                About
              </NavLink>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <NavLink to="/Skills" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
                Skills
              </NavLink>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <NavLink to="/Projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
                Projects
              </NavLink>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <NavLink to="/Contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'text-amber-200' : '')}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-tighter">PORTFOLIO</div>
      <div className="space-x-8 font-medium">

        <ul className="flex items-center gap-8 font-medium text-white">
  <li className="hover:text-blue-400 cursor-pointer">
    <NavLink to="/" className={({ isActive }) => isActive ? "text-amber-200" : ""}>
      Home
    </NavLink>
  </li>

  <li className="hover:text-blue-400 cursor-pointer">
    <NavLink to="/About" className={({ isActive }) => isActive ? "text-amber-200" : ""}>
      About
    </NavLink>
  </li>

  <li className="hover:text-blue-400 cursor-pointer">
    <NavLink to="/Skills" className={({ isActive }) => isActive ? "text-amber-200" : ""}>
      Skills
    </NavLink>
  </li>

  <li className="hover:text-blue-400 cursor-pointer">
    <NavLink to="/Projects" className={({ isActive }) => isActive ? "text-amber-200" : ""}>
      Projects
    </NavLink>
  </li>

  <li className="hover:text-blue-400 cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-700 transition">
    <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-amber-200" : ""}>
      Contact
    </NavLink>
  </li>
</ul> 
      </div>
    </nav>
  );
};

export default Navbar;
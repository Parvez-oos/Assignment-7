import { NavLink } from 'react-router-dom';
import { Clock, BarChart2, Home } from 'lucide-react';

export default function Navbar() {
  
  const navClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all text-sm sm:text-base ${
      isActive 
        ? 'bg-[#1e3a2f] text-white shadow-sm' 
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7.5xl mx-auto px-4 h-16 flex justify-between items-center">
        
       
        <div className="shrink-0">
          <img src="/assets/logo.png" alt="KeenKeeper" className="h-6 sm:h-8" />
        </div>

       
        <div className="flex items-center gap-1 sm:gap-4">
          <NavLink to="/" className={navClass} end>
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          
          <NavLink to="/timeline" className={navClass}>
            <Clock size={18} />
            <span>Timeline</span>
          </NavLink>
          
          <NavLink to="/stats" className={navClass}>
            <BarChart2 size={18} />
            <span>Stats</span>
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
}
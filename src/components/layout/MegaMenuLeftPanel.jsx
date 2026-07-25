import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { mainNavigation } from '../../data/navigation';

export const MegaMenuLeftPanel = ({ activeId, setActiveId, onClose }) => {
  return (
    <div className="w-full md:w-5/12 pr-6 md:pr-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
      <ul className="space-y-3 md:space-y-5 relative">
        {mainNavigation.map((cat) => {
          const hasSubmenu = cat.items && cat.items.length > 0;
          const isActive = activeId === cat.id;

          return (
            <li key={cat.id} className="relative group">
              {/* Shared layoutId indicator background pill */}
              {isActive && (
                <motion.div
                  layoutId="activeMenuHighlight"
                  className="absolute inset-0 bg-white/10 rounded-xl border-l-4 border-[#2EE6A6] -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {hasSubmenu ? (
                <button
                  onMouseEnter={() => setActiveId(cat.id)}
                  onClick={() => setActiveId(cat.id)}
                  className={`w-full flex items-center justify-between text-left text-lg md:text-2xl font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-colors relative z-10 ${
                    isActive
                      ? 'text-[#2EE6A6]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronRight
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                      isActive ? 'text-[#2EE6A6] translate-x-1' : 'text-white/40 group-hover:text-white'
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={cat.path}
                  onClick={onClose}
                  className="block text-lg md:text-2xl font-bold uppercase tracking-wider py-2.5 px-4 text-white/80 hover:text-[#2EE6A6] transition-colors relative z-10"
                >
                  {cat.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

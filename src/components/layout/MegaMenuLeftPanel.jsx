import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { mainNavigation } from '../../data/navigation';

export const MegaMenuLeftPanel = ({ activeId, setActiveId, onClose }) => {
  return (
    <div className="w-full md:w-5/12 pr-4 md:pr-8 border-b md:border-b-0 md:border-r border-border-hairline flex flex-col justify-center py-2">
      <ul className="space-y-2 md:space-y-3 relative">
        {mainNavigation.map((cat) => {
          const hasSubmenu = cat.items && cat.items.length > 0;
          const isActive = activeId === cat.id;

          return (
            <li key={cat.id} className="relative group">
              {/* Shared layoutId indicator background pill */}
              {isActive && (
                <motion.div
                  layoutId="activeMenuHighlight"
                  className="absolute inset-0 bg-gold-accent/15 rounded-xl border-l-4 border-gold-accent -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {hasSubmenu ? (
                <button
                  onMouseEnter={() => setActiveId(cat.id)}
                  onClick={() => setActiveId(cat.id)}
                  className={`w-full flex items-center justify-between text-left text-base md:text-xl font-bold uppercase tracking-wider py-2 px-3.5 rounded-xl transition-colors relative z-10 ${
                    isActive
                      ? 'text-gold-accent'
                      : 'text-navy-deep hover:text-gold-accent'
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronRight
                    className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 ${
                      isActive ? 'text-gold-accent translate-x-1' : 'text-navy-muted group-hover:text-gold-accent'
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={cat.path}
                  onClick={onClose}
                  className="block text-base md:text-xl font-bold uppercase tracking-wider py-2 px-3.5 text-navy-deep hover:text-gold-accent transition-colors relative z-10"
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const MegaMenu = ({ category, onClose }) => {
  if (!category || !category.items || category.items.length === 0) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-kis-navy-dark border-t-2 border-kis-gold text-white shadow-2xl z-50 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-kis-gold uppercase tracking-wider">
              {category.title}
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Explore programs and resources in {category.title}
            </p>
          </div>
          <Link
            to={category.path}
            onClick={onClose}
            className="text-xs font-semibold text-kis-gold hover:underline flex items-center gap-1 uppercase tracking-wide"
          >
            <span>Overview Page</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.items.map((item, index) => (
            <div key={index} className="group">
              {item.isExternal ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-kis-gold hover:text-kis-navy-dark transition-all duration-200 text-sm font-medium border border-white/5"
                >
                  <span className="truncate">{item.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </a>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-kis-gold hover:text-kis-navy-dark transition-all duration-200 text-sm font-medium border border-white/5"
                >
                  <span className="truncate">{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-kis-gold group-hover:text-kis-navy-dark group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

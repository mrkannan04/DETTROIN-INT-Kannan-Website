import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';

export const MobileMegaMenu = ({ onClose }) => {
  const [expandedId, setExpandedId] = useState('about');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full space-y-4 max-h-[75vh] overflow-y-auto pr-2 py-4">
      {mainNavigation.map((cat) => {
        const hasSubmenu = cat.items && cat.items.length > 0;
        const isExpanded = expandedId === cat.id;

        return (
          <div key={cat.id} className="border-b border-white/10 pb-3">
            {hasSubmenu ? (
              <div>
                <button
                  onClick={() => toggleExpand(cat.id)}
                  className="w-full flex items-center justify-between text-left text-lg font-bold uppercase tracking-wider text-white py-1"
                >
                  <span className={isExpanded ? 'text-[#2EE6A6]' : 'text-white'}>
                    {cat.title}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-[#2EE6A6]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  )}
                </button>

                {/* Submenu links accordion */}
                {isExpanded && (
                  <ul className="mt-3 ml-4 space-y-2.5 border-l-2 border-[#2EE6A6]/40 pl-3">
                    {cat.items.map((sub, idx) => (
                      <li key={idx}>
                        {sub.isExternal ? (
                          <a
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="flex items-center justify-between text-sm text-gray-300 hover:text-[#2EE6A6] py-1"
                          >
                            <span>{sub.name}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            to={sub.path}
                            onClick={onClose}
                            className="block text-sm text-gray-300 hover:text-[#2EE6A6] py-1"
                          >
                            {sub.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={cat.path}
                onClick={onClose}
                className="block text-lg font-bold uppercase tracking-wider text-white py-1 hover:text-[#2EE6A6]"
              >
                {cat.title}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

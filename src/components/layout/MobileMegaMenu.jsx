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
    <div className="w-full space-y-3 max-h-[75vh] overflow-y-auto pr-2 py-2">
      {mainNavigation.map((cat) => {
        const hasSubmenu = cat.items && cat.items.length > 0;
        const isExpanded = expandedId === cat.id;

        return (
          <div key={cat.id} className="border-b border-border-hairline pb-2.5">
            {hasSubmenu ? (
              <div>
                <button
                  onClick={() => toggleExpand(cat.id)}
                  className="w-full flex items-center justify-between text-left text-base font-bold uppercase tracking-wider text-navy-deep py-1"
                >
                  <span className={isExpanded ? 'text-gold-accent' : 'text-navy-deep'}>
                    {cat.title}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gold-accent" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-navy-muted" />
                  )}
                </button>

                {/* Submenu links accordion */}
                {isExpanded && (
                  <ul className="mt-2.5 ml-3 space-y-2 border-l-2 border-gold-accent/40 pl-3">
                    {cat.items.map((sub, idx) => (
                      <li key={idx}>
                        {sub.isExternal ? (
                          <a
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="flex items-center justify-between text-xs sm:text-sm font-semibold text-navy-muted hover:text-gold-accent py-1"
                          >
                            <span>{sub.name}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            to={sub.path}
                            onClick={onClose}
                            className="block text-xs sm:text-sm font-semibold text-navy-muted hover:text-gold-accent py-1"
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
                className="block text-base font-bold uppercase tracking-wider text-navy-deep py-1 hover:text-gold-accent"
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

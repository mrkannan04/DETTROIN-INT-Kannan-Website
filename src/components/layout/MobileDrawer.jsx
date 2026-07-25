import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, ExternalLink, Phone, Mail } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';

export const MobileDrawer = ({ isOpen, onClose }) => {
  const [expandedId, setExpandedId] = useState(null);

  if (!isOpen) return null;

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-kis-navy-dark text-white shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 z-50 border-l border-kis-gold/30">
        
        {/* Top bar with close button */}
        <div>
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-kis-navy-darker">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-kis-gold text-kis-navy-dark flex items-center justify-center font-bold text-sm">
                KIS
              </div>
              <span className="font-bold text-sm text-kis-gold tracking-wide">
                Krishna Intl. School
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links accordion */}
          <div className="py-4 px-2 space-y-1">
            {mainNavigation.map((cat) => {
              const hasSubItems = cat.items && cat.items.length > 0;
              const isExpanded = expandedId === cat.id;

              return (
                <div key={cat.id} className="rounded-lg overflow-hidden border border-white/5">
                  <div
                    onClick={() => hasSubItems ? toggleAccordion(cat.id) : null}
                    className="flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-sm font-semibold tracking-wide"
                  >
                    {hasSubItems ? (
                      <span className="text-gray-100">{cat.title}</span>
                    ) : (
                      <Link
                        to={cat.path}
                        onClick={onClose}
                        className="text-gray-100 hover:text-kis-gold w-full block"
                      >
                        {cat.title}
                      </Link>
                    )}

                    {hasSubItems && (
                      <button className="text-kis-gold p-1">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Accordion children */}
                  {hasSubItems && isExpanded && (
                    <div className="bg-kis-navy-darker px-3 py-2 space-y-1 text-xs">
                      {cat.items.map((sub, idx) => (
                        <div key={idx}>
                          {sub.isExternal ? (
                            <a
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={onClose}
                              className="flex items-center justify-between py-2 px-3 text-gray-300 hover:text-kis-gold hover:bg-white/5 rounded transition-colors"
                            >
                              <span>{sub.name}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link
                              to={sub.path}
                              onClick={onClose}
                              className="block py-2 px-3 text-gray-300 hover:text-kis-gold hover:bg-white/5 rounded transition-colors"
                            >
                              {sub.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Contact CTA inside Drawer */}
        <div className="p-4 bg-kis-navy-darker border-t border-white/10 space-y-3 text-xs">
          <Link
            to="/enroll"
            onClick={onClose}
            className="block text-center w-full py-2.5 bg-kis-gold text-kis-navy-dark font-bold rounded-lg shadow hover:bg-kis-gold-hover transition-colors"
          >
            Click to Enroll 2026-27
          </Link>
          <div className="space-y-1 text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-kis-gold" />
              <span>+91 983-70-50000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-kis-gold" />
              <span>info@kisaligarh.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

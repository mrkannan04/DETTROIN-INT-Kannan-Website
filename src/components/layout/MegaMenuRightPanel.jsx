import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { menuPanelSwap } from '../../utils/motionVariants';

export const MegaMenuRightPanel = ({ activeId, onClose }) => {
  const activeCategory = mainNavigation.find((cat) => cat.id === activeId) || mainNavigation[0];
  const items = activeCategory?.items || [];

  return (
    <div className="w-full md:w-7/12 pl-0 md:pl-8 pt-4 md:pt-0 flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          variants={menuPanelSwap}
          initial="hidden"
          animate="show"
          exit="exit"
          className="space-y-4"
        >
          {/* Submenu Title Heading */}
          <div className="border-b border-border-hairline pb-2.5">
            <h3 className="text-xl md:text-2xl font-black text-gold-accent uppercase tracking-wider">
              {activeCategory.title}
            </h3>
            <p className="text-[11px] text-navy-muted mt-0.5 uppercase tracking-widest font-semibold">
              Explore {activeCategory.title} Overview & Pages
            </p>
          </div>

          {/* Sub-links Multi-Column Grid (No Scrolling Required) */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1">
            {items.map((sub, idx) => (
              <li key={idx}>
                {sub.isExternal ? (
                  <a
                    href={sub.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-navy-deep hover:text-gold-accent hover:translate-x-1 transition-all duration-200"
                  >
                    <span>{sub.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-accent opacity-80" />
                  </a>
                ) : (
                  <Link
                    to={sub.path}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-navy-deep hover:text-gold-accent hover:translate-x-1 transition-all duration-200"
                  >
                    <span>{sub.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

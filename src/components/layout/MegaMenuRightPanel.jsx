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
    <div className="w-full md:w-7/12 pl-0 md:pl-12 pt-6 md:pt-0 flex flex-col justify-center min-h-[360px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          variants={menuPanelSwap}
          initial="hidden"
          animate="show"
          exit="exit"
          className="space-y-6"
        >
          {/* Submenu Title Heading in Mint/Teal Green */}
          <div className="border-b border-white/10 pb-3">
            <h3 className="text-2xl md:text-3xl font-black text-[#2EE6A6] uppercase tracking-wider">
              {activeCategory.title}
            </h3>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">
              Explore {activeCategory.title} Overview & Pages
            </p>
          </div>

          {/* Sub-links Vertical List */}
          <ul className="space-y-3.5 max-h-[55vh] overflow-y-auto pr-4">
            {items.map((sub, idx) => (
              <li key={idx}>
                {sub.isExternal ? (
                  <a
                    href={sub.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center gap-2.5 text-base md:text-lg font-medium text-white/90 hover:text-[#2EE6A6] hover:translate-x-1.5 transition-all duration-200"
                  >
                    <span>{sub.name}</span>
                    <ExternalLink className="w-4 h-4 text-[#2EE6A6] opacity-80" />
                  </a>
                ) : (
                  <Link
                    to={sub.path}
                    onClick={onClose}
                    className="inline-flex items-center gap-2.5 text-base md:text-lg font-medium text-white/90 hover:text-[#2EE6A6] hover:translate-x-1.5 transition-all duration-200"
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

import React from 'react';

export const FilterTabs = ({
  tabs = [],
  activeTab,
  onTabChange,
  containerClassName = ""
}) => {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={`flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 ${containerClassName}`}>
      {tabs.map((tab) => {
        const tabId = typeof tab === 'string' ? tab : tab.id;
        const label = typeof tab === 'string' ? tab : tab.label;
        const count = typeof tab === 'object' ? tab.count : null;
        const isActive = activeTab === tabId;

        return (
          <button
            key={tabId}
            onClick={() => onTabChange(tabId)}
            className={`min-h-[40px] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 border cursor-pointer ${
              isActive
                ? 'bg-gold-accent text-navy-deep border-gold-accent shadow-md scale-105'
                : 'bg-bg-secondary text-body hover:bg-bg-accent-section border-border-hairline'
            }`}
          >
            <span>{label}</span>
            {count !== null && count !== undefined && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  isActive ? 'bg-navy-deep text-gold-accent' : 'bg-bg-accent-section text-navy-muted'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

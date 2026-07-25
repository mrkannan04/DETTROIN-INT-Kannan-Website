import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// Route lookup helper for breadcrumb strings
const getBreadcrumbPath = (label, index, total, fullList) => {
  const cleanLabel = String(label).trim().toLowerCase();
  
  if (cleanLabel === 'home') return '/';
  if (cleanLabel === 'about' || cleanLabel === 'about us') return '/about/overview';
  if (cleanLabel === 'admission' || cleanLabel === 'admissions') return '/admission/overview';
  if (cleanLabel === 'academics') return '/academics/overview';
  if (cleanLabel === 'co-curricular') return '/co-curricular/overview';
  if (cleanLabel === 'portal') return '/portal/overview';
  if (cleanLabel === 'events') return '/events';
  if (cleanLabel === 'gallery') return '/gallery';
  if (cleanLabel === 'notices' || cleanLabel === 'notice') return '/notices';
  if (cleanLabel === 'join us' || cleanLabel === 'vacancies' || cleanLabel === 'careers') return '/join-us';
  if (cleanLabel === 'enroll' || cleanLabel === 'admission form') return '/enroll';
  if (cleanLabel === 'fee payment') return '/admission/fee-payment';
  
  // Dynamic fallback for sub-items
  const slug = cleanLabel.replace(/\s+/g, '-');
  if (fullList.some(i => String(i).toLowerCase() === 'academics')) return `/academics/${slug}`;
  if (fullList.some(i => String(i).toLowerCase() === 'about')) return `/about/${slug}`;
  if (fullList.some(i => String(i).toLowerCase() === 'admission')) return `/admission/${slug}`;
  if (fullList.some(i => String(i).toLowerCase() === 'co-curricular')) return `/co-curricular/${slug}`;
  
  return `/${slug}`;
};

export const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  // Process items list
  const processedItems = items.map((item, idx) => {
    if (typeof item === 'object' && item.label) {
      return { label: item.label, path: item.path || '/' };
    }
    const labelStr = String(item);
    return {
      label: labelStr,
      path: getBreadcrumbPath(labelStr, idx, items.length, items)
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 flex-wrap">
      {/* Home link always first */}
      <Link
        to="/"
        className="hover:text-kis-gold focus:text-kis-gold outline-none focus:ring-2 focus:ring-kis-gold/50 rounded transition-colors inline-flex items-center gap-1.5 cursor-pointer"
        title="Go to Homepage"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {processedItems.map((item, idx) => {
        if (item.label.toLowerCase() === 'home') return null;
        const isLast = idx === processedItems.length - 1;

        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-kis-gold opacity-80 shrink-0" aria-hidden="true" />
            
            {isLast ? (
              <span
                aria-current="page"
                className="text-kis-gold font-bold tracking-wide"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-white focus:text-white outline-none focus:ring-2 focus:ring-kis-gold/50 rounded transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const getBreadcrumbPath = (label) => {
  const cleanLabel = String(label).trim().toLowerCase();
  
  if (cleanLabel === 'home') return '/';
  if (cleanLabel === 'about' || cleanLabel === 'about us') return '/about/overview';
  if (cleanLabel === 'admission' || cleanLabel === 'admissions') return '/admission/overview';
  if (cleanLabel === 'academics') return '/academics/overview';
  if (cleanLabel === 'co-curricular') return '/co-curricular/overview';
  if (cleanLabel === 'portal') return '/portal/overview';
  if (cleanLabel === 'events' || cleanLabel === 'school events') return '/events';
  if (cleanLabel === 'gallery') return '/gallery';
  if (cleanLabel === 'notices' || cleanLabel === 'notice' || cleanLabel === 'notice board') return '/notices';
  if (cleanLabel === 'join us' || cleanLabel === 'vacancies' || cleanLabel === 'careers') return '/join-us';
  if (cleanLabel === 'enroll' || cleanLabel === 'admission form') return '/enroll';
  if (cleanLabel === 'fee payment') return '/admission/fee-payment';
  
  const slug = cleanLabel.replace(/\s+/g, '-');
  return `/${slug}`;
};

export const Breadcrumb = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  const processedItems = items.map((item) => {
    if (typeof item === 'object' && item.label) {
      return { label: item.label, path: item.path || '/' };
    }
    const labelStr = String(item);
    return {
      label: labelStr,
      path: getBreadcrumbPath(labelStr)
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-navy-muted flex-wrap">
      {/* Home link is ALWAYS first and clickable */}
      <Link
        to="/"
        className="hover:text-gold-accent focus:text-gold-accent outline-none focus:ring-2 focus:ring-gold-accent/50 rounded transition-colors inline-flex items-center gap-1.5 cursor-pointer hover:underline text-navy-muted"
        title="Go to Homepage"
      >
        <Home className="w-3.5 h-3.5 text-gold-accent" />
        <span>Home</span>
      </Link>

      {processedItems.map((item, idx) => {
        if (item.label.toLowerCase() === 'home') return null;
        const isLast = idx === processedItems.length - 1;

        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-gold-accent opacity-80 shrink-0" aria-hidden="true" />
            
            {isLast ? (
              <span
                aria-current="page"
                className="text-gold-accent font-bold tracking-wide"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-navy-muted hover:text-navy-deep focus:text-navy-deep outline-none focus:ring-2 focus:ring-gold-accent/50 rounded transition-colors hover:underline cursor-pointer font-medium"
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

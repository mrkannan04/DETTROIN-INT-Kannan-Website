import React, { useEffect, useState } from 'react';

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion & desktop viewport size
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || window.innerWidth < 1024) {
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden lg:block"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`
      }}
    >
      <div className="w-6 h-6 rounded-full border border-kis-gold/60 bg-kis-gold/10 backdrop-blur-[1px] shadow-sm animate-pulse-slow" />
    </div>
  );
};

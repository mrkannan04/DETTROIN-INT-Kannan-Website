import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { schoolStats } from '../../data/stats';

export const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
      <div className="bg-kis-navy border-2 border-kis-gold/40 rounded-2xl shadow-card p-6 sm:p-10 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15 text-center">
          
          {schoolStats.map((stat, idx) => (
            <div key={stat.id} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 font-serif">
                {stat.display ? (
                  <span>{stat.display}</span>
                ) : (
                  <span>
                    {inView ? (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    ) : (
                      '0'
                    )}
                  </span>
                )}
                {stat.suffix && (
                  <span className="text-kis-gold font-bold ml-0.5">{stat.suffix}</span>
                )}
              </div>

              <h3 className="text-sm md:text-base font-bold text-kis-gold uppercase tracking-wide">
                {stat.label}
              </h3>
              
              <p className="text-xs text-gray-200 mt-0.5 font-medium">
                {stat.subtext}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};


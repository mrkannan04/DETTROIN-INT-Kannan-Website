import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Leaf, Droplets, ShieldCheck, Sparkles, Trees, Recycle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { fadeUpReveal } from '../../utils/premiumMotion';

export const SustainabilityWidget = () => {
  const metrics = [
    {
      title: 'Solar Energy Generated',
      value: '142,500 kWh',
      period: 'Annual Clean Power',
      icon: Sun,
      color: 'text-gold-accent',
      bgColor: 'bg-gold-accent/15',
      desc: '100 kW Rooftop Solar Grid powers 65% of campus electricity.'
    },
    {
      title: 'Trees & Botanical Flora',
      value: '1,280+ Trees',
      period: '5-Acre Eco Canopy',
      icon: Trees,
      color: 'text-emerald-accent',
      bgColor: 'bg-emerald-accent/15',
      desc: 'Dense green belt absorbing 28 tons of carbon annually.'
    },
    {
      title: 'Water Recycled',
      value: '2.4 Million L',
      period: 'Rainwater Harvested',
      icon: Droplets,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/15',
      desc: 'Zero-waste water recycling system for campus gardens.'
    },
    {
      title: 'Plastic-Free Zone',
      value: '100% Certified',
      period: 'Single-Use Plastic Banned',
      icon: Recycle,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/15',
      desc: 'Compostable dining utensils & paperless digital workflow.'
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Net-Zero Carbon Footprint & Environmental Leadership"
          subtitle="Green Campus ESG Dashboard"
          centered={true}
        />

        {/* 4 Cards Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUpReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl glass-card border border-border-hairline p-6 bg-bg-secondary flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center border border-border-hairline`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-bg-accent-section text-navy-muted border border-border-hairline">
                      Verified
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-navy-deep font-serif mb-1">{item.value}</h3>
                  <span className="text-xs font-bold text-gold-accent block mb-3">{item.title}</span>
                  <p className="text-xs text-text-body font-normal leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-hairline flex items-center justify-between text-[11px] text-navy-muted">
                  <span className="font-semibold">{item.period}</span>
                  <Leaf className="w-3.5 h-3.5 text-emerald-accent" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

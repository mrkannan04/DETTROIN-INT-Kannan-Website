import React from 'react';
import { motion } from 'framer-motion';
import { studentShowcase } from '../../data/studentShowcase';
import { fadeUpStagger, fadeUpItem } from '../../utils/motionVariants';
import { Sparkles } from 'lucide-react';

export const StudentShowcase = () => {
  return (
    <section className="relative py-20 bg-[#F7F9FC] border-t border-slate-200 overflow-hidden">
      
      {/* Background Decorative Subtle Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-kis-gold/5 via-kis-navy/5 to-kis-accent-teal/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kis-navy text-kis-gold text-xs font-black uppercase tracking-widest mb-3 shadow">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Student Showcase</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-kis-navy tracking-tight mb-12 font-serif">
          Shining Stars of Krishna International
        </h2>

        {/* 5 Oval Capsule Frames Row */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 justify-items-center"
        >
          {studentShowcase.map((student) => (
            <motion.div
              key={student.id}
              variants={fadeUpItem}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Capsule Oval Frame */}
              <div
                style={{ backgroundColor: student.bgColor || '#0B2545' }}
                className="relative w-36 sm:w-44 md:w-48 h-56 sm:h-64 md:h-72 rounded-[90px] border-4 border-white p-2 shadow-lg overflow-hidden flex items-end justify-center transition-all duration-300 group-hover:border-kis-gold group-hover:shadow-xl"
              >
                {/* Student Cutout Portrait */}
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover rounded-[80px] filter brightness-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Inner Frame Overlay */}
                <div className="absolute inset-0 rounded-[90px] ring-1 ring-inset ring-black/10 pointer-events-none" />
              </div>

              {/* Student Info */}
              <div className="mt-4 text-center">
                <h4 className="text-base font-bold text-kis-navy group-hover:text-kis-gold transition-colors">
                  {student.name}
                </h4>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  {student.grade}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};


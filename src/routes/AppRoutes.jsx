import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from '../pages/Home';
import { GenericPage } from '../pages/GenericPage';
import { EventsPage } from '../pages/EventsPage';
import { GalleryPage } from '../pages/GalleryPage';
import { VacancyPage } from '../pages/VacancyPage';
import { EnrollPage } from '../pages/EnrollPage';
import { FeePaymentPage } from '../pages/FeePaymentPage';
import { NoticesPage } from '../pages/NoticesPage';
import { NoticeDetailPage } from '../pages/NoticeDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { pageTransition } from '../utils/motionVariants';

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full flex-grow"
      >
        <Routes location={location}>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Special Feature Pages */}
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/admission/fee-payment" element={<FeePaymentPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/notices/:id" element={<NoticeDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/join-us" element={<VacancyPage />} />

          {/* Dynamic Route matching all sub-pages */}
          <Route path="/about/*" element={<GenericPage />} />
          <Route path="/admission/*" element={<GenericPage />} />
          <Route path="/academics/*" element={<GenericPage />} />
          <Route path="/co-curricular/*" element={<GenericPage />} />
          <Route path="/portal/*" element={<GenericPage />} />

          {/* Fallback 404 wildcard route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};



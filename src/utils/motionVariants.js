// Standard Framer Motion Animation Variants & Easing Curves

export const defaultEase = [0.25, 0.1, 0.25, 1];

export const fadeUpStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: defaultEase }
  }
};

export const scaleUpItem = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: defaultEase }
  }
};

export const menuBackdrop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeInOut" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" }
  }
};

export const menuPanelSwap = {
  hidden: { opacity: 0, x: 12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: defaultEase }
  },
  exit: {
    opacity: 0,
    x: -12,
    transition: { duration: 0.2, ease: defaultEase }
  }
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: defaultEase }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: defaultEase }
  }
};

export const clipPathReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  show: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.7, ease: defaultEase }
  }
};

// Shared Premium Motion System for Luxury Aesthetics
// Signature custom easing curve: [0.16, 1, 0.3, 1] ("expo-out")

export const EXPO_OUT_EASING = [0.16, 1, 0.3, 1];

export const fadeUpReveal = {
  hidden: { 
    opacity: 0, 
    y: 28, 
    scale: 0.98 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EXPO_OUT_EASING
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 10 
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EXPO_OUT_EASING
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: EXPO_OUT_EASING
    }
  }
};

export const buttonSweep = {
  rest: { width: '0%' },
  hover: { 
    width: '100%',
    transition: {
      duration: 0.35,
      ease: EXPO_OUT_EASING
    }
  }
};

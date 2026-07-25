import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300 max-w-md w-full px-4">
      <div className={`bg-bg-secondary rounded-2xl shadow-xl border-l-4 ${isSuccess ? 'border-kis-accent-teal' : 'border-red-500'} p-4 flex items-start justify-between gap-3 border border-border-hairline`}>
        <div className="flex items-center gap-3">
          {isSuccess ? (
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 stroke-[2.5]" />
            </div>
          )}
          <div>
            <h5 className="text-sm font-bold text-kis-navy">
              {isSuccess ? 'Success' : 'Notice'}
            </h5>
            <p className="text-xs text-text-body font-medium mt-0.5">{message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-text-body p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

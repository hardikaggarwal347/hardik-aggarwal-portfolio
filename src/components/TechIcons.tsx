import React from 'react';

interface TechIconProps {
  name: 'Java' | 'Python' | 'Cpp' | 'C';
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C7 2 7 4 7 4v3h5v1H5s-3 0-3 5 2.5 5 2.5 5H6v-2.5C6 14 7 13 8.5 13H13v-2H7V4s0-2 5-2z" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" />
          <path d="M12 22c5 0 5-2 5-2v-3h-5v-1h7s3 0 3-5-2.5-5-2.5-5H18v2.5c0 1.5-1 2.5-2.5 2.5H11v2h6v7s0 2-5 2z" fill="#06B6D4" fillOpacity="0.1" stroke="#0891B2" />
          <circle cx="9" cy="5.5" r="0.75" fill="#2563EB" />
          <circle cx="15" cy="18.5" r="0.75" fill="#0891B2" />
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19c4 2 12 2 16 0" stroke="#DC2626" />
          <path d="M6 22c3 1.5 9 1.5 12 0" stroke="#DC2626" />
          <path d="M8 14c2-1 4-1 6 0 1.5.75 3 .5 3-.5 0-2-3-3-5-3-3 0-5 2-4 3.5z" stroke="#2563EB" />
          <path d="M11 2c1 2-2 4 0 6" stroke="#2563EB" />
          <path d="M15 4c.5 1.5-1.5 3 0 4.5" stroke="#0284C7" />
        </svg>
      );
    case 'Cpp':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 6.5C8 6.5 6 8.5 6 12s2 5.5 5 5.5c2 0 3.5-1 4-2.5" stroke="#2563EB" />
          <path d="M15 10v4M13 12h4" stroke="#0284C7" />
          <path d="M20 10v4M18 12h4" stroke="#0891B2" />
        </svg>
      );
    case 'C':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 7.5C14.5 6.5 13 6 11 6 7.5 6 5 8.7 5 12s2.5 6 6 6c2 0 3.5-.5 5-1.5" stroke="#2563EB" />
        </svg>
      );
    default:
      return null;
  }
};

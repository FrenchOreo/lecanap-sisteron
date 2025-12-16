import React from 'react';

export const CatLogo: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} fill-current`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 85C40 85 35 80 30 80C25 80 25 75 28 70C25 65 25 50 30 40C32 35 30 30 32 25L35 15L40 25C42 22 48 22 50 25C52 22 58 22 60 25L65 15L68 25C70 30 68 35 70 40C75 50 75 65 72 70C75 75 75 80 70 80C65 80 60 85 50 85Z" />
      <path d="M72 70C75 65 85 60 90 50C92 45 92 40 90 35" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
};

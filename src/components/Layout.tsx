import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

import { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';

export function Layout({ children, className = '' }: LayoutProps) {
  const { preferences } = useQuizStore();

  useEffect(() => {
    const sizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
    document.documentElement.style.fontSize = sizeMap[preferences.fontSize];
  }, [preferences.fontSize]);

  return (
    <div className="h-dvh w-full bg-gray-50 flex justify-center overflow-hidden">
      <div className={`w-full max-w-md bg-white h-full shadow-xl relative flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  );
}

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
}

export const FloatingActionButton = forwardRef<HTMLButtonElement, FABProps>(
  ({ className, position = 'bottom-right', children, ...props }, ref) => {
    const positionClasses = {
      'bottom-right': 'bottom-20 right-4 md:bottom-6 md:right-6',
      'bottom-left': 'bottom-20 left-4 md:bottom-6 md:left-6',
      'bottom-center': 'bottom-20 left-1/2 -translate-x-1/2 md:bottom-6',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'fixed z-40 lg:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center',
          positionClasses[position],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

FloatingActionButton.displayName = 'FloatingActionButton';

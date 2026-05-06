import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const MobileCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-card border border-border rounded-xl p-4 shadow-sm active:bg-accent/50 transition-colors',
          className
        )}
        {...props}
      />
    );
  }
);

MobileCard.displayName = 'MobileCard';

export const MobileCardRow = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between py-2', className)}
        {...props}
      />
    );
  }
);

MobileCardRow.displayName = 'MobileCardRow';

export const MobileCardLabel = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    );
  }
);

MobileCardLabel.displayName = 'MobileCardLabel';

export const MobileCardValue = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('text-sm font-medium', className)}
        {...props}
      />
    );
  }
);

MobileCardValue.displayName = 'MobileCardValue';

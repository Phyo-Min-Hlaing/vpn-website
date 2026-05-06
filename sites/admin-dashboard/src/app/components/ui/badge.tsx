import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'secondary';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs transition-colors',
          {
            'bg-primary/10 text-primary': variant === 'default',
            'bg-[#16A34A]/10 text-[#16A34A]': variant === 'success',
            'bg-[#F59E0B]/10 text-[#F59E0B]': variant === 'warning',
            'bg-[#DC2626]/10 text-[#DC2626]': variant === 'danger',
            'bg-muted text-muted-foreground': variant === 'secondary',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

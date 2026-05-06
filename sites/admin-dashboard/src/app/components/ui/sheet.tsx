import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  position?: 'right' | 'bottom';
}

export function Sheet({ isOpen, onClose, title, children, position = 'bottom' }: SheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-in fade-in"
        onClick={onClose}
      />
      <div
        className={cn(
          'fixed z-50 bg-card border-l border-border transition-transform duration-300',
          position === 'right' && 'right-0 top-0 h-full w-80 max-w-[85vw]',
          position === 'bottom' && 'bottom-0 left-0 right-0 rounded-t-2xl max-h-[85vh]',
          isOpen
            ? position === 'right'
              ? 'translate-x-0'
              : 'translate-y-0'
            : position === 'right'
            ? 'translate-x-full'
            : 'translate-y-full'
        )}
      >
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3>{title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}
        <div className="overflow-y-auto max-h-[calc(85vh-4rem)] p-4">
          {children}
        </div>
      </div>
    </>
  );
}

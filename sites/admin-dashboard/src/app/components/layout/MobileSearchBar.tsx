import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '../ui/input';

export function MobileSearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden p-2 hover:bg-accent rounded-xl transition-colors"
      >
        <Search size={20} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background p-4 sm:hidden animate-in fade-in slide-in-from-top">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            autoFocus
            placeholder="Search..."
            className="pl-10 pr-10"
          />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-accent rounded-xl transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

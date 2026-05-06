import { Search, Plus, Menu } from 'lucide-react';
import { Link } from 'react-router';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { NotificationPanel } from './NotificationPanel';
import { MobileSearchBar } from './MobileSearchBar';

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <div className="h-16 bg-card border-b border-border px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-accent rounded-xl transition-colors -ml-2"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>

        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search..."
              className="pl-10"
            />
          </div>
        </div>

        <MobileSearchBar />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Link to="/keys/create" className="hidden sm:block">
          <Button variant="primary" size="sm" className="md:h-10">
            <Plus size={18} />
            <span className="hidden md:inline">Create Key</span>
          </Button>
        </Link>

        <NotificationPanel />

        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0">
          AD
        </div>
      </div>
    </div>
  );
}

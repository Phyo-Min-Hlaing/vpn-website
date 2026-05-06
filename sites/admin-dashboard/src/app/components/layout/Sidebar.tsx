import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  ShoppingCart,
  Key,
  CreditCard,
  Users,
  Wallet,
  Download,
  BarChart3,
  Settings,
  LogOut,
  Shield,
  Code,
  FileText,
  Store,
  X
} from 'lucide-react';
import { cn } from '../../lib/utils';

const coreMenuItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Orders', path: '/orders', icon: ShoppingCart },
  { name: 'VPN Keys', path: '/keys', icon: Key },
  { name: 'Plans', path: '/plans', icon: CreditCard },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Payments', path: '/payments', icon: Wallet },
  { name: 'Downloads', path: '/downloads', icon: Download },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
];

const saasMenuItems = [
  { name: 'Reseller Panel', path: '/resellers', icon: Store },
  { name: 'Roles & Permissions', path: '/roles', icon: Shield },
  { name: 'API Management', path: '/api', icon: Code },
  { name: 'Audit Logs', path: '/audit-logs', icon: FileText },
];

interface SidebarProps {
  isOpen: boolean;
  isDesktopOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, isDesktopOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed lg:static inset-y-0 left-0 z-50 h-screen bg-card border-border flex flex-col overflow-y-auto transition-all duration-300',
          isOpen ? 'translate-x-0 w-60 border-r' : '-translate-x-full w-60 border-r',
          isDesktopOpen ? 'lg:translate-x-0 lg:w-60 lg:border-r' : 'lg:-translate-x-full lg:w-0 lg:border-r-0 lg:overflow-hidden lg:p-0'
        )}
      >
        <div className="p-6 border-b border-border flex items-center justify-between min-w-[240px]">
          <div>
            <h1 className="text-primary">Kophyo.top VPN</h1>
            <p className="text-sm text-muted-foreground">Admin Dashboard</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-accent rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="space-y-1">
            {coreMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  )}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 pb-2">
            <p className="px-3 text-xs text-muted-foreground uppercase tracking-wider">SaaS Features</p>
          </div>

          <div className="space-y-1">
            {saasMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  )}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 space-y-1">
            <Link
              to="/settings"
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm',
                location.pathname === '/settings'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent'
              )}
            >
              <Settings size={18} />
              Settings
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@kophyo.top</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-accent transition-colors text-sm text-destructive">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

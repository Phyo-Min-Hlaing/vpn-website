import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Bell, X } from 'lucide-react';

const recentNotifications = [
  {
    id: '1',
    title: 'New Order Received',
    message: 'Order #ORD-1245 for Premium 1Y plan',
    time: '5m ago',
    read: false,
    icon: '🛒'
  },
  {
    id: '2',
    title: 'Payment Successful',
    message: 'Payment of $129.99 received',
    time: '15m ago',
    read: false,
    icon: '💳'
  },
  {
    id: '3',
    title: 'New Reseller Registration',
    message: 'Theta Networks registered',
    time: '1h ago',
    read: false,
    icon: '🏢'
  },
  {
    id: '4',
    title: 'API Rate Limit Warning',
    message: 'Reached 80% of rate limit',
    time: '2h ago',
    read: true,
    icon: '⚠️'
  },
  {
    id: '5',
    title: 'Key Expiring Soon',
    message: '15 keys expire in 7 days',
    time: '3h ago',
    read: true,
    icon: '🔑'
  },
];

export function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const unreadCount = recentNotifications.filter(n => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-accent rounded-xl transition-colors"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-96 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-xl shadow-lg z-50 max-h-[80vh] flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3>Notifications</h3>
              {unreadCount > 0 && (
                <Badge variant="danger" className="text-xs">
                  {unreadCount}
                </Badge>
              )}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-accent rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {recentNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-border hover:bg-accent/50 transition-colors cursor-pointer ${
                  !notification.read ? 'bg-primary/5' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-lg flex-shrink-0">{notification.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium truncate">{notification.title}</p>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border">
            <Link to="/notifications" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full" size="sm">
                View All Notifications
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

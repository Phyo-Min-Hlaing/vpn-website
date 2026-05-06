import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Bell, Check, Trash2, Settings } from 'lucide-react';

const notifications = [
  {
    id: '1',
    title: 'New Order Received',
    message: 'Order #ORD-1245 for Premium 1Y plan has been placed',
    time: '5 minutes ago',
    read: false,
    type: 'order',
    icon: '🛒'
  },
  {
    id: '2',
    title: 'Payment Successful',
    message: 'Payment of $129.99 received from John Doe',
    time: '15 minutes ago',
    read: false,
    type: 'payment',
    icon: '💳'
  },
  {
    id: '3',
    title: 'New Reseller Registration',
    message: 'Theta Networks has registered as a reseller',
    time: '1 hour ago',
    read: false,
    type: 'reseller',
    icon: '🏢'
  },
  {
    id: '4',
    title: 'API Rate Limit Warning',
    message: 'API key vpn_sk_live_5f8... reached 80% of rate limit',
    time: '2 hours ago',
    read: true,
    type: 'warning',
    icon: '⚠️'
  },
  {
    id: '5',
    title: 'Key Expiring Soon',
    message: '15 VPN keys will expire in the next 7 days',
    time: '3 hours ago',
    read: true,
    type: 'info',
    icon: '🔑'
  },
  {
    id: '6',
    title: 'Customer Support Message',
    message: 'New message from customer sarah@example.com',
    time: '5 hours ago',
    read: true,
    type: 'support',
    icon: '💬'
  },
  {
    id: '7',
    title: 'Failed Login Attempt',
    message: 'Multiple failed login attempts detected from IP 203.45.67.89',
    time: '6 hours ago',
    read: true,
    type: 'security',
    icon: '🔒'
  },
  {
    id: '8',
    title: 'Reseller Wallet Low',
    message: 'Beta Networks wallet balance is below $50',
    time: '1 day ago',
    read: true,
    type: 'reseller',
    icon: '💰'
  },
];

export function Notifications() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2">
            <Bell size={28} />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="danger" className="ml-2">
                {unreadCount} new
              </Badge>
            )}
          </h1>
          <p className="text-muted-foreground">Stay updated with your VPN service activity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check size={18} />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            <Settings size={18} />
            Settings
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`transition-all ${
              !notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{notification.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="flex items-center gap-2">
                        {notification.title}
                        {!notification.read && (
                          <span className="w-2 h-2 bg-primary rounded-full" />
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {notification.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!notification.read && (
                        <Button variant="ghost" size="sm">
                          <Check size={16} />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {notifications.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Bell size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="mb-2">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

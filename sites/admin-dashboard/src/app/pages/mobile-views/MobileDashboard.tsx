import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { TrendingUp, Users, Key, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const stats = [
  { title: 'Total Sales', value: '$45,231', trend: '+12.5%', icon: DollarSign, color: 'text-[#16A34A]' },
  { title: 'Active Users', value: '2,845', trend: '+8.2%', icon: Users, color: 'text-primary' },
  { title: 'Keys Sold', value: '1,234', trend: '+15.3%', icon: Key, color: 'text-[#F59E0B]' },
  { title: 'Revenue', value: '$28,450', trend: '+10.1%', icon: TrendingUp, color: 'text-[#16A34A]' },
];

const recentActivity = [
  { title: 'New Order #1245', desc: 'Premium 1Y - $129.99', time: '5m ago', type: 'order' },
  { title: 'Payment Received', desc: 'John Doe - $89.99', time: '15m ago', type: 'payment' },
  { title: 'Key Generated', desc: '50 Premium keys', time: '1h ago', type: 'key' },
  { title: 'New Customer', desc: 'sarah@example.com', time: '2h ago', type: 'customer' },
];

export function MobileDashboard() {
  return (
    <div className="space-y-4 pb-4">
      <div>
        <h1 className="text-xl">Welcome back! 👋</h1>
        <p className="text-sm text-muted-foreground">Here's your business overview</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Icon size={20} className={stat.color} />
                  <span className="text-xs text-[#16A34A]">{stat.trend}</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/keys/create" className="p-3 bg-primary text-primary-foreground rounded-xl text-center text-sm active:scale-95 transition-transform">
            Create Key
          </Link>
          <Link to="/orders" className="p-3 border border-border rounded-xl text-center text-sm active:scale-95 transition-transform">
            View Orders
          </Link>
          <Link to="/customers/add" className="p-3 border border-border rounded-xl text-center text-sm active:scale-95 transition-transform">
            Add Customer
          </Link>
          <Link to="/analytics" className="p-3 border border-border rounded-xl text-center text-sm active:scale-95 transition-transform">
            Analytics
          </Link>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base">Recent Activity</h3>
          <Link to="/audit-logs" className="text-xs text-primary flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                {activity.type === 'order' && '🛒'}
                {activity.type === 'payment' && '💳'}
                {activity.type === 'key' && '🔑'}
                {activity.type === 'customer' && '👤'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{activity.desc}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

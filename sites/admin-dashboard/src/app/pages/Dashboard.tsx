import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Key, DollarSign } from 'lucide-react';
import { MobileDashboard } from './mobile-views/MobileDashboard';

const stats = [
  { id: 'stat-1', title: 'Total Sales', value: '$45,231', trend: '+12.5%', icon: DollarSign },
  { id: 'stat-2', title: 'Active Users', value: '2,845', trend: '+8.2%', icon: Users },
  { id: 'stat-3', title: 'Keys Sold', value: '1,234', trend: '+15.3%', icon: Key },
  { id: 'stat-4', title: 'Revenue', value: '$28,450', trend: '+10.1%', icon: TrendingUp },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'John Doe', plan: 'Premium 1Y', price: '$89.99', status: 'Active', date: '2026-05-06' },
  { id: 'ORD-002', customer: 'Jane Smith', plan: 'Basic 6M', price: '$39.99', status: 'Pending', date: '2026-05-05' },
  { id: 'ORD-003', customer: 'Mike Johnson', plan: 'Premium 1M', price: '$12.99', status: 'Active', date: '2026-05-05' },
  { id: 'ORD-004', customer: 'Sarah Williams', plan: 'Basic 1Y', price: '$59.99', status: 'Expired', date: '2026-05-04' },
  { id: 'ORD-005', customer: 'Tom Brown', plan: 'Premium 6M', price: '$49.99', status: 'Active', date: '2026-05-04' },
];

const chartDataToday = [
  { id: 'today-1', time: '00:00', sales: 45 },
  { id: 'today-2', time: '04:00', sales: 32 },
  { id: 'today-3', time: '08:00', sales: 78 },
  { id: 'today-4', time: '12:00', sales: 125 },
  { id: 'today-5', time: '16:00', sales: 98 },
  { id: 'today-6', time: '20:00', sales: 145 },
];

const chartData7Days = [
  { id: '7days-1', time: 'Mon', sales: 420 },
  { id: '7days-2', time: 'Tue', sales: 380 },
  { id: '7days-3', time: 'Wed', sales: 520 },
  { id: '7days-4', time: 'Thu', sales: 490 },
  { id: '7days-5', time: 'Fri', sales: 650 },
  { id: '7days-6', time: 'Sat', sales: 720 },
  { id: '7days-7', time: 'Sun', sales: 580 },
];

const chartData30Days = [
  { id: '30days-1', time: 'Week 1', sales: 2400 },
  { id: '30days-2', time: 'Week 2', sales: 2800 },
  { id: '30days-3', time: 'Week 3', sales: 3200 },
  { id: '30days-4', time: 'Week 4', sales: 3800 },
];

export function Dashboard() {
  const [chartPeriod, setChartPeriod] = useState<'today' | '7days' | '30days'>('7days');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const chartData = {
    today: chartDataToday,
    '7days': chartData7Days,
    '30days': chartData30Days,
  }[chartPeriod];

  if (isMobile) {
    return <MobileDashboard />;
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl">Dashboard</h1>
        <p className="text-muted-foreground text-sm md:text-base">Welcome back! Here's what's happening with your VPN service.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.id}>
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">{stat.title}</p>
                  <Icon size={16} className="text-primary md:size-5 flex-shrink-0" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg md:text-2xl">{stat.value}</h2>
                  <p className="text-xs text-[#16A34A]">{stat.trend}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle>Sales Overview</CardTitle>
            <div className="flex gap-2 overflow-x-auto">
              <Button
                variant={chartPeriod === 'today' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setChartPeriod('today')}
              >
                Today
              </Button>
              <Button
                variant={chartPeriod === '7days' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setChartPeriod('7days')}
              >
                7 Days
              </Button>
              <Button
                variant={chartPeriod === '30days' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setChartPeriod('30days')}
              >
                30 Days
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-2 md:px-6">
          <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
            <LineChart key={chartPeriod} data={chartData}>
              <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis key="xaxis" dataKey="time" stroke="#6B7280" />
              <YAxis key="yaxis" stroke="#6B7280" />
              <Tooltip key="tooltip" />
              <Line
                key="line-sales"
                type="monotone"
                dataKey="sales"
                stroke="#6B4226"
                strokeWidth={2}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.plan}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === 'Active' ? 'success' :
                        order.status === 'Pending' ? 'warning' :
                        'danger'
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

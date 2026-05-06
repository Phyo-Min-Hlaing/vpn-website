import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { id: 'rev-1', month: 'Jan', revenue: 12400 },
  { id: 'rev-2', month: 'Feb', revenue: 15800 },
  { id: 'rev-3', month: 'Mar', revenue: 18200 },
  { id: 'rev-4', month: 'Apr', revenue: 21500 },
  { id: 'rev-5', month: 'May', revenue: 24800 },
];

const userGrowthData = [
  { id: 'user-1', month: 'Jan', users: 1200 },
  { id: 'user-2', month: 'Feb', users: 1580 },
  { id: 'user-3', month: 'Mar', users: 1920 },
  { id: 'user-4', month: 'Apr', users: 2340 },
  { id: 'user-5', month: 'May', users: 2845 },
];

const salesByPlanData = [
  { id: 'plan-1', name: 'Basic 1M', value: 245, color: '#6B4226' },
  { id: 'plan-2', name: 'Basic 6M', value: 189, color: '#16A34A' },
  { id: 'plan-3', name: 'Basic 1Y', value: 156, color: '#F59E0B' },
  { id: 'plan-4', name: 'Premium 1M', value: 298, color: '#DC2626' },
  { id: 'plan-5', name: 'Premium 6M', value: 178, color: '#6B7280' },
  { id: 'plan-6', name: 'Premium 1Y', value: 168, color: '#8B5A3C' },
];

export function Analytics() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl">Analytics</h1>
        <p className="text-muted-foreground text-sm md:text-base">Detailed insights and reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Growth</CardTitle>
        </CardHeader>
        <CardContent className="px-2 md:px-6">
          <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
            <LineChart data={revenueData}>
              <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis key="xaxis" dataKey="month" stroke="#6B7280" />
              <YAxis key="yaxis" stroke="#6B7280" />
              <Tooltip key="tooltip" />
              <Line
                key="line"
                type="monotone"
                dataKey="revenue"
                stroke="#6B4226"
                strokeWidth={2}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent className="px-2 md:px-6">
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <BarChart data={userGrowthData}>
                <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#E5E5E5" />
                <XAxis key="xaxis" dataKey="month" stroke="#6B7280" />
                <YAxis key="yaxis" stroke="#6B7280" />
                <Tooltip key="tooltip" />
                <Bar key="bar" dataKey="users" fill="#6B4226" isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales by Plan</CardTitle>
          </CardHeader>
          <CardContent className="px-2 md:px-6">
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <PieChart>
                <Pie
                  key="pie"
                  data={salesByPlanData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.name}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  isAnimationActive={false}
                >
                  {salesByPlanData.map((entry) => (
                    <Cell key={`cell-${entry.id}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip key="tooltip" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

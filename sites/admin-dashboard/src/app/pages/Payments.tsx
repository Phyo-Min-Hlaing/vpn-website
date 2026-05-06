import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { DollarSign, Clock, XCircle, Search } from 'lucide-react';

const paymentSummary = [
  { title: 'Total Revenue', value: '$128,450', icon: DollarSign },
  { title: 'Pending Payments', value: '$3,240', icon: Clock },
  { title: 'Failed Transactions', value: '$890', icon: XCircle },
];

const payments = [
  { id: 'PAY-001', user: 'John Doe', amount: '$89.99', method: 'Credit Card', status: 'Completed', date: '2026-05-06' },
  { id: 'PAY-002', user: 'Jane Smith', amount: '$39.99', method: 'PayPal', status: 'Pending', date: '2026-05-05' },
  { id: 'PAY-003', user: 'Mike Johnson', amount: '$12.99', method: 'Crypto', status: 'Completed', date: '2026-05-05' },
  { id: 'PAY-004', user: 'Sarah Williams', amount: '$59.99', method: 'Credit Card', status: 'Failed', date: '2026-05-04' },
  { id: 'PAY-005', user: 'Tom Brown', amount: '$49.99', method: 'PayPal', status: 'Completed', date: '2026-05-04' },
  { id: 'PAY-006', user: 'Emily Davis', amount: '$9.99', method: 'Credit Card', status: 'Pending', date: '2026-05-03' },
];

export function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Payments</h1>
        <p className="text-muted-foreground">Track all payment transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paymentSummary.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <Icon size={20} className="text-primary" />
                </div>
                <h2>{item.value}</h2>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Payments</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search payments..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.user}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        payment.status === 'Completed' ? 'success' :
                        payment.status === 'Pending' ? 'warning' :
                        'danger'
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{payment.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

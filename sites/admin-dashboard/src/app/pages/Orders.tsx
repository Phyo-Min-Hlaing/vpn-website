import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Eye, Copy, X, Search } from 'lucide-react';

const orders = [
  { id: 'ORD-001', name: 'John Doe', email: 'john@example.com', plan: 'Premium 1Y', payment: 'Credit Card', status: 'Active', date: '2026-05-06' },
  { id: 'ORD-002', name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic 6M', payment: 'PayPal', status: 'Pending', date: '2026-05-05' },
  { id: 'ORD-003', name: 'Mike Johnson', email: 'mike@example.com', plan: 'Premium 1M', payment: 'Crypto', status: 'Active', date: '2026-05-05' },
  { id: 'ORD-004', name: 'Sarah Williams', email: 'sarah@example.com', plan: 'Basic 1Y', payment: 'Credit Card', status: 'Expired', date: '2026-05-04' },
  { id: 'ORD-005', name: 'Tom Brown', email: 'tom@example.com', plan: 'Premium 6M', payment: 'PayPal', status: 'Active', date: '2026-05-04' },
  { id: 'ORD-006', name: 'Emily Davis', email: 'emily@example.com', plan: 'Basic 1M', payment: 'Credit Card', status: 'Active', date: '2026-05-03' },
];

export function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Orders</h1>
          <p className="text-muted-foreground">Manage and track all customer orders</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Orders</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search orders..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell className="text-muted-foreground">{order.email}</TableCell>
                  <TableCell>{order.plan}</TableCell>
                  <TableCell>{order.payment}</TableCell>
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
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X size={16} className="text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

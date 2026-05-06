import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Search, Eye, Edit, UserPlus } from 'lucide-react';
import { Link } from 'react-router';

const customers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', mobile: '+95 9 123 456 789', viber: '+95 9 123 456 789', telegram: '@johndoe', plan: 'Premium 1Y', planStatus: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', mobile: '+95 9 987 654 321', viber: '+95 9 987 654 321', telegram: '@janesmith', plan: 'Basic 6M', planStatus: 'pending' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', mobile: '+95 9 555 555 555', viber: '', telegram: '@mikej', plan: 'Premium 1M', planStatus: 'active' },
  { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', mobile: '+95 9 111 222 333', viber: '+95 9 111 222 333', telegram: '', plan: 'Basic 1Y', planStatus: 'cancelled' },
  { id: '5', name: 'Tom Brown', email: 'tom@example.com', mobile: '+95 9 444 555 666', viber: '+95 9 444 555 666', telegram: '@tombrown', plan: 'Premium 6M', planStatus: 'expired' },
  { id: '6', name: 'Emily Davis', email: 'emily@example.com', mobile: '+95 9 777 888 999', viber: '', telegram: '@emilyd', plan: 'Basic 1M', planStatus: 'active' },
];

export function Customers() {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'danger';
      case 'expired': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Customers</h1>
          <p className="text-muted-foreground">View and manage customer accounts</p>
        </div>
        <Link to="/customers/add">
          <Button variant="primary">
            <UserPlus size={18} />
            Add Customer
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Customers</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search customers..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Viber</TableHead>
                <TableHead>Telegram</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell className="text-muted-foreground">{customer.email}</TableCell>
                  <TableCell className="text-sm">{customer.mobile}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{customer.viber || '-'}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{customer.telegram || '-'}</TableCell>
                  <TableCell>{customer.plan}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(customer.planStatus)}>
                      {customer.planStatus.charAt(0).toUpperCase() + customer.planStatus.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Link to={`/customers/view/${customer.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye size={16} />
                        </Button>
                      </Link>
                      <Link to={`/customers/edit/${customer.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                      </Link>
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

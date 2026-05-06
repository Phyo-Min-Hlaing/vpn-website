import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { ArrowLeft, Edit, UserX, Phone, MessageCircle, Send } from 'lucide-react';

const customersData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', mobile: '+95 9 123 456 789', viber: '+95 9 123 456 789', telegram: '@johndoe', plan: 'Premium 1Y', planStatus: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', mobile: '+95 9 987 654 321', viber: '+95 9 987 654 321', telegram: '@janesmith', plan: 'Basic 6M', planStatus: 'pending' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', mobile: '+95 9 555 555 555', viber: '', telegram: '@mikej', plan: 'Premium 1M', planStatus: 'active' },
];

const orderHistory = [
  { id: 'ORD-001', plan: 'Premium 1Y', price: '$129.99', status: 'Active', date: '2026-01-15', expiryDate: '2027-01-15' },
  { id: 'ORD-045', plan: 'Premium 6M', price: '$74.99', status: 'Expired', date: '2025-07-10', expiryDate: '2026-01-10' },
  { id: 'ORD-023', plan: 'Basic 1Y', price: '$89.99', status: 'Cancelled', date: '2024-12-05', expiryDate: '2025-12-05' },
];

export function ViewCustomer() {
  const { customerId } = useParams();
  const customer = customersData.find(c => c.id === customerId);

  if (!customer) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/customers">
            <Button variant="outline" size="sm">
              <ArrowLeft size={18} />
              Back to Customers
            </Button>
          </Link>
          <div>
            <h1>Customer Not Found</h1>
            <p className="text-muted-foreground">The customer you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

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
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/customers">
            <Button variant="outline" size="sm">
              <ArrowLeft size={18} />
              Back to Customers
            </Button>
          </Link>
          <div>
            <h1>{customer.name}</h1>
            <p className="text-muted-foreground">Customer Details & Order History</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/customers/edit/${customer.id}`}>
            <Button variant="primary">
              <Edit size={18} />
              Edit Customer
            </Button>
          </Link>
          <Button variant="destructive">
            <UserX size={18} />
            Disable Account
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                  <p>{customer.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                  <p>{customer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mobile Number</p>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <p>{customer.mobile}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Viber Number</p>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-primary" />
                    <p>{customer.viber || 'Not provided'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telegram Account</p>
                  <div className="flex items-center gap-2">
                    <Send size={16} className="text-primary" />
                    <p>{customer.telegram || 'Not provided'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Plan</p>
                  <p>{customer.plan}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Purchase Date</TableHead>
                    <TableHead>Expiry Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderHistory.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.plan}</TableCell>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{order.date}</TableCell>
                      <TableCell className="text-muted-foreground">{order.expiryDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Current Status</p>
                  <Badge variant={getStatusVariant(customer.planStatus)} className="text-sm px-3 py-1.5">
                    {customer.planStatus.charAt(0).toUpperCase() + customer.planStatus.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Plan</p>
                  <p>{customer.plan}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                  <p>2027-01-15</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full">
                Send Message
              </Button>
              <Button variant="outline" className="w-full">
                Generate New Key
              </Button>
              <Button variant="outline" className="w-full">
                Reset Password
              </Button>
              <Button variant="outline" className="w-full text-destructive hover:bg-destructive/10">
                Cancel Subscription
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Spent</span>
                <span className="text-sm">$294.97</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Active Keys</span>
                <span className="text-sm">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Lifetime Value</span>
                <span className="text-sm text-primary">$294.97</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

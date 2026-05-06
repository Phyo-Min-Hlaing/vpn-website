import { useParams, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { ArrowLeft, Search, User, Shield, Activity, Calendar, Mail, Phone, MapPin, Eye } from 'lucide-react';

const mockReseller = {
  id: '1',
  name: 'Alpha Tech Solutions',
  email: 'alpha@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Park, Innovation City, CA 94043',
  wallet: '$1,245.50',
  keysOwned: 145,
  keysSold: 98,
  profit: '$890.20',
  status: 'active',
  joinedDate: 'Oct 12, 2023',
};

const mockCustomers = [
  { id: 'c1', name: 'John Doe', email: 'john@example.com', plan: 'Premium 1 Year', status: 'active', expiry: 'Oct 15, 2024', usage: '45 GB' },
  { id: 'c2', name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic 6 Months', status: 'active', expiry: 'Apr 20, 2024', usage: '12 GB' },
  { id: 'c3', name: 'Bob Johnson', email: 'bob@example.com', plan: 'Premium 1 Month', status: 'expired', expiry: 'Jan 10, 2024', usage: '89 GB' },
  { id: 'c4', name: 'Alice Brown', email: 'alice@example.com', plan: 'Basic 1 Year', status: 'active', expiry: 'Dec 05, 2024', usage: '105 GB' },
  { id: 'c5', name: 'Charlie Davis', email: 'charlie@example.com', plan: 'Premium 6 Months', status: 'suspended', expiry: 'Jul 22, 2024', usage: '0 GB' },
];

export function ViewReseller() {
  const { resellerId } = useParams();

  // In a real app, fetch the reseller details and their customers based on resellerId
  const reseller = mockReseller;
  const customers = mockCustomers;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/resellers">
          <Button variant="ghost" size="sm" className="p-2">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold flex items-center gap-3">
            {reseller.name}
            <Badge variant={reseller.status === 'active' ? 'success' : 'warning'}>
              {reseller.status.charAt(0).toUpperCase() + reseller.status.slice(1)}
            </Badge>
          </h1>
          <p className="text-muted-foreground">Reseller Details & Customer List</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Reseller Info Card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Mail size={16} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{reseller.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Phone size={16} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">{reseller.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <MapPin size={16} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{reseller.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Calendar size={16} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Joined</p>
                <p className="text-sm font-medium">{reseller.joinedDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reseller Stats Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted/30 rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-1">Wallet Balance</p>
                <p className="text-xl font-semibold text-primary">{reseller.wallet}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-1">Keys Owned</p>
                <p className="text-xl font-semibold">{reseller.keysOwned}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-1">Keys Sold</p>
                <p className="text-xl font-semibold">{reseller.keysSold}</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-1">Total Profit</p>
                <p className="text-xl font-semibold text-[#16A34A]">{reseller.profit}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Customer List</CardTitle>
              <CardDescription>All VPN customers managed by this reseller</CardDescription>
            </div>
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
                <TableHead>Customer Name</TableHead>
                <TableHead>Plan Details</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>VPN Status</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{customer.name}</p>
                        <p className="text-xs text-muted-foreground">{customer.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Shield size={14} className="text-muted-foreground" />
                      <span className="text-sm">{customer.plan}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-muted-foreground" />
                      <span className="text-sm">{customer.usage}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        customer.status === 'active' ? 'success' :
                        customer.status === 'expired' ? 'danger' :
                        'warning'
                      }
                    >
                      {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {customer.expiry}
                  </TableCell>
                  <TableCell>
                    <Link to={`/customers/view/${customer.id}`}>
                      <Button variant="ghost" size="sm" title="View Customer Details">
                        <Eye size={16} className="mr-2"/>
                        View
                      </Button>
                    </Link>
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

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Wallet, TrendingUp, Key, DollarSign, Search, Edit2, UserPlus, Eye } from 'lucide-react';
import { Link } from 'react-router';

const stats = [
  { title: 'Total Resellers', value: '24', trend: '+3 this month', icon: UserPlus },
  { title: 'Total Revenue', value: '$12,450', trend: '+18.2%', icon: DollarSign },
  { title: 'Keys Sold', value: '1,847', trend: '+12.5%', icon: Key },
  { title: 'Average Wallet', value: '$520', trend: '+5.3%', icon: Wallet },
];

const resellers = [
  { id: '1', name: 'Alpha Tech Solutions', email: 'alpha@example.com', wallet: '$1,245.50', keysOwned: 145, keysSold: 98, profit: '$890.20', status: 'active' },
  { id: '2', name: 'Beta Networks', email: 'beta@example.com', wallet: '$850.00', keysOwned: 98, keysSold: 76, profit: '$650.40', status: 'active' },
  { id: '3', name: 'Gamma Systems', email: 'gamma@example.com', wallet: '$45.20', keysOwned: 12, keysSold: 8, profit: '$120.00', status: 'pending' },
  { id: '4', name: 'Delta Services', email: 'delta@example.com', wallet: '$2,150.80', keysOwned: 245, keysSold: 189, profit: '$1,450.90', status: 'active' },
  { id: '5', name: 'Epsilon Telecom', email: 'epsilon@example.com', wallet: '$0.00', keysOwned: 0, keysSold: 0, profit: '$0.00', status: 'suspended' },
];

export function Resellers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Reseller Panel</h1>
          <p className="text-muted-foreground">Manage reseller accounts and monitor sales</p>
        </div>
        <Link to="/resellers/add">
          <Button variant="primary">
            <UserPlus size={18} />
            Add Reseller
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h2>{stat.value}</h2>
                  <p className="text-xs text-[#16A34A]">{stat.trend}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Resellers</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search resellers..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reseller Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Wallet Balance</TableHead>
                <TableHead>Keys Owned</TableHead>
                <TableHead>Keys Sold</TableHead>
                <TableHead>Total Profit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resellers.map((reseller) => (
                <TableRow key={reseller.id}>
                  <TableCell>{reseller.name}</TableCell>
                  <TableCell className="text-muted-foreground">{reseller.email}</TableCell>
                  <TableCell className="text-primary">{reseller.wallet}</TableCell>
                  <TableCell>{reseller.keysOwned}</TableCell>
                  <TableCell>{reseller.keysSold}</TableCell>
                  <TableCell className="text-[#16A34A]">{reseller.profit}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        reseller.status === 'active' ? 'success' :
                        reseller.status === 'pending' ? 'warning' :
                        'danger'
                      }
                    >
                      {reseller.status.charAt(0).toUpperCase() + reseller.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Link to={`/resellers/view/${reseller.id}`}>
                        <Button variant="ghost" size="sm" title="View Reseller">
                          <Eye size={16} />
                        </Button>
                      </Link>
                      <Link to={`/resellers/edit/${reseller.id}`}>
                        <Button variant="ghost" size="sm" title="Edit Reseller">
                          <Edit2 size={16} />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Reseller Pricing Tiers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                <span className="text-sm">Basic 1 Month</span>
                <span className="text-primary">$2.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                <span className="text-sm">Basic 6 Months</span>
                <span className="text-primary">$10.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                <span className="text-sm">Basic 1 Year</span>
                <span className="text-primary">$18.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                <span className="text-sm">Premium 1 Month</span>
                <span className="text-primary">$3.50</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                <span className="text-sm">Premium 6 Months</span>
                <span className="text-primary">$18.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                <span className="text-sm">Premium 1 Year</span>
                <span className="text-primary">$32.00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-start p-3 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-sm">Alpha Tech Solutions</p>
                  <p className="text-xs text-muted-foreground">Purchased 50 Premium 1Y keys</p>
                </div>
                <span className="text-sm text-primary">$1,600</span>
              </div>
              <div className="flex justify-between items-start p-3 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-sm">Delta Services</p>
                  <p className="text-xs text-muted-foreground">Wallet top-up</p>
                </div>
                <span className="text-sm text-[#16A34A]">+$500</span>
              </div>
              <div className="flex justify-between items-start p-3 bg-muted/50 rounded-xl">
                <div>
                  <p className="text-sm">Beta Networks</p>
                  <p className="text-xs text-muted-foreground">Purchased 25 Basic 6M keys</p>
                </div>
                <span className="text-sm text-primary">$250</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

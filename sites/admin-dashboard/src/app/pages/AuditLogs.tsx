import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Search, Download } from 'lucide-react';
import { Button } from '../components/ui/button';

const logs = [
  { user: 'Admin User', action: 'Created 100 VPN keys', module: 'VPN Keys', timestamp: '2026-05-06 10:45:22', ip: '192.168.1.100', severity: 'info' },
  { user: 'Reseller Beta', action: 'Purchased Premium 1Y plan', module: 'Reseller Panel', timestamp: '2026-05-06 10:42:15', ip: '192.168.1.105', severity: 'info' },
  { user: 'Admin User', action: 'Deleted user account', module: 'Customers', timestamp: '2026-05-06 10:38:05', ip: '192.168.1.100', severity: 'warning' },
  { user: 'Staff John', action: 'Updated order ORD-001', module: 'Orders', timestamp: '2026-05-06 10:35:30', ip: '192.168.1.102', severity: 'info' },
  { user: 'Unknown', action: 'Failed login attempt', module: 'Authentication', timestamp: '2026-05-06 10:32:10', ip: '203.45.67.89', severity: 'danger' },
  { user: 'Admin User', action: 'Changed API key', module: 'API Management', timestamp: '2026-05-06 10:28:45', ip: '192.168.1.100', severity: 'warning' },
  { user: 'Reseller Alpha', action: 'Generated 50 keys', module: 'VPN Keys', timestamp: '2026-05-06 10:25:20', ip: '192.168.1.106', severity: 'info' },
  { user: 'Staff Jane', action: 'Viewed customer data', module: 'Customers', timestamp: '2026-05-06 10:20:15', ip: '192.168.1.103', severity: 'info' },
  { user: 'Admin User', action: 'Updated plan pricing', module: 'Plans', timestamp: '2026-05-06 10:15:40', ip: '192.168.1.100', severity: 'warning' },
  { user: 'Reseller Gamma', action: 'Wallet top-up $500', module: 'Reseller Panel', timestamp: '2026-05-06 10:10:05', ip: '192.168.1.107', severity: 'info' },
];

export function AuditLogs() {
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'info': return 'default';
      case 'warning': return 'warning';
      case 'danger': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Audit Logs</h1>
          <p className="text-muted-foreground">Track all system activities and user actions</p>
        </div>
        <Button variant="outline">
          <Download size={18} />
          Export Logs
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Activity Log</CardTitle>
            <div className="flex gap-2">
              <select className="h-10 px-3 rounded-xl border border-input bg-input-background text-sm">
                <option>All Modules</option>
                <option>VPN Keys</option>
                <option>Orders</option>
                <option>Customers</option>
                <option>Reseller Panel</option>
                <option>API Management</option>
              </select>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input placeholder="Search logs..." className="pl-10" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell className="text-muted-foreground">{log.module}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{log.timestamp}</TableCell>
                  <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                  <TableCell>
                    <Badge variant={getSeverityVariant(log.severity)}>
                      {log.severity.charAt(0).toUpperCase() + log.severity.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Events</span>
              <span className="text-sm">1,248</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Today</span>
              <span className="text-sm">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">This Week</span>
              <span className="text-sm">892</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Users</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Admin User</span>
              <span className="text-sm text-muted-foreground">45 actions</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Staff John</span>
              <span className="text-sm text-muted-foreground">32 actions</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Reseller Alpha</span>
              <span className="text-sm text-muted-foreground">28 actions</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Failed Logins</span>
              <span className="text-sm text-destructive">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Suspicious IPs</span>
              <span className="text-sm text-[#F59E0B]">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">API Errors</span>
              <span className="text-sm text-muted-foreground">12</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Upload, Download, Search } from 'lucide-react';
import { Link } from 'react-router';

const keys = [
  { id: 'KEY-001', code: 'VPNK-2026-ABCD-1234', plan: 'Premium 1Y', status: 'Used', user: 'John Doe', created: '2026-05-01' },
  { id: 'KEY-002', code: 'VPNK-2026-EFGH-5678', plan: 'Basic 6M', status: 'Unused', user: '-', created: '2026-05-02' },
  { id: 'KEY-003', code: 'VPNK-2026-IJKL-9012', plan: 'Premium 1M', status: 'Used', user: 'Jane Smith', created: '2026-05-03' },
  { id: 'KEY-004', code: 'VPNK-2026-MNOP-3456', plan: 'Basic 1Y', status: 'Expired', user: 'Mike Johnson', created: '2026-04-01' },
  { id: 'KEY-005', code: 'VPNK-2026-QRST-7890', plan: 'Premium 6M', status: 'Unused', user: '-', created: '2026-05-04' },
];

export function Keys() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl">VPN Keys</h1>
          <p className="text-muted-foreground text-sm md:text-base">Generate and manage VPN access keys</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          <Button variant="outline">
            <Upload size={18} />
            Bulk Generate
          </Button>
          <Button variant="outline">
            <Download size={18} />
            Export CSV
          </Button>
          <Link to="/keys/create">
            <Button variant="primary">
              <Plus size={18} />
              Generate Key
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All VPN Keys</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Search keys..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key ID</TableHead>
                <TableHead>Key Code</TableHead>
                <TableHead>Plan Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned User</TableHead>
                <TableHead>Created Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell>{key.id}</TableCell>
                  <TableCell className="font-mono text-sm">{key.code}</TableCell>
                  <TableCell>{key.plan}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        key.status === 'Used' ? 'success' :
                        key.status === 'Unused' ? 'warning' :
                        'danger'
                      }
                    >
                      {key.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{key.user}</TableCell>
                  <TableCell className="text-muted-foreground">{key.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Key, Copy, RotateCw, Trash2, Check, TrendingUp, AlertCircle } from 'lucide-react';

export function APIManagement() {
  const [apiKey, setApiKey] = useState('vpn_sk_live_5f8e9d2a1b3c4e6f7a8b9c0d1e2f3a4b');
  const [copied, setCopied] = useState(false);
  const [masked, setMasked] = useState(true);

  const stats = [
    { title: 'Requests Today', value: '1,248', trend: '+12.5%', icon: TrendingUp },
    { title: 'Requests This Month', value: '34,567', trend: '+8.2%', icon: TrendingUp },
    { title: 'Error Rate', value: '0.3%', trend: '-0.1%', icon: AlertCircle },
    { title: 'Rate Limit', value: '100/min', trend: 'Active', icon: Key },
  ];

  const apiLogs = [
    { endpoint: '/api/v1/keys', method: 'POST', status: 200, time: '45ms', ip: '192.168.1.100', timestamp: '2026-05-06 10:32:15' },
    { endpoint: '/api/v1/plans', method: 'GET', status: 200, time: '12ms', ip: '192.168.1.101', timestamp: '2026-05-06 10:31:45' },
    { endpoint: '/api/v1/verify', method: 'POST', status: 200, time: '28ms', ip: '192.168.1.102', timestamp: '2026-05-06 10:30:22' },
    { endpoint: '/api/v1/keys', method: 'GET', status: 200, time: '18ms', ip: '192.168.1.100', timestamp: '2026-05-06 10:29:10' },
    { endpoint: '/api/v1/keys', method: 'POST', status: 401, time: '5ms', ip: '192.168.1.103', timestamp: '2026-05-06 10:28:05' },
    { endpoint: '/api/v1/plans', method: 'GET', status: 200, time: '15ms', ip: '192.168.1.104', timestamp: '2026-05-06 10:27:30' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const maskKey = (key: string) => {
    if (!masked) return key;
    const visible = key.slice(0, 16);
    const hidden = '••••••••••••••••••••••••••••';
    return visible + hidden;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>API Management</h1>
        <p className="text-muted-foreground">Manage API access and monitor usage</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Current API Key</label>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 font-mono text-sm p-3 bg-muted/50 rounded-xl break-all">
                    {maskKey(apiKey)}
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setMasked(!masked)}>
                    {masked ? 'Show' : 'Hide'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    {copied ? <Check size={16} className="text-[#16A34A]" /> : <Copy size={16} />}
                  </Button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">
                  <RotateCw size={18} />
                  Regenerate Key
                </Button>
                <Button variant="destructive">
                  <Trash2 size={18} />
                  Revoke Key
                </Button>
              </div>

              <div className="p-4 bg-[#F59E0B]/10 rounded-xl border border-[#F59E0B]/20">
                <p className="text-sm text-[#F59E0B]">
                  ⚠️ Regenerating or revoking your API key will break existing integrations. Make sure to update all applications using this key.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Request Logs</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Endpoint</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiLogs.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-xs">{log.endpoint}</TableCell>
                      <TableCell>
                        <Badge variant={log.method === 'GET' ? 'success' : 'default'}>
                          {log.method}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={log.status === 200 ? 'success' : 'danger'}>
                          {log.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{log.time}</TableCell>
                      <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                      <TableCell className="text-muted-foreground text-xs">{log.timestamp}</TableCell>
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
              <CardTitle>API Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="success" className="text-xs">POST</Badge>
                    <code className="text-xs">/api/v1/keys</code>
                  </div>
                  <p className="text-xs text-muted-foreground">Create VPN keys</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="default" className="text-xs">GET</Badge>
                    <code className="text-xs">/api/v1/keys</code>
                  </div>
                  <p className="text-xs text-muted-foreground">Get all keys</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="success" className="text-xs">POST</Badge>
                    <code className="text-xs">/api/v1/verify</code>
                  </div>
                  <p className="text-xs text-muted-foreground">Verify key</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="default" className="text-xs">GET</Badge>
                    <code className="text-xs">/api/v1/plans</code>
                  </div>
                  <p className="text-xs text-muted-foreground">Get all plans</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rate Limiting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Limit per Minute</span>
                <span className="text-sm">100 requests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Current Usage</span>
                <span className="text-sm">12 requests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Reset Time</span>
                <span className="text-sm">45 seconds</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm">IP Whitelist</label>
                <input type="checkbox" className="w-4 h-4 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">HTTPS Only</label>
                <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Bearer Auth</label>
                <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Monitor, Smartphone, Tablet, Edit, Trash2, Upload } from 'lucide-react';

const apps = [
  { platform: 'Windows', icon: Monitor, version: '2.5.1', updated: '2026-04-15', link: 'https://download.kophyo.top/windows' },
  { platform: 'macOS', icon: Monitor, version: '2.5.0', updated: '2026-04-12', link: 'https://download.kophyo.top/macos' },
  { platform: 'Android', icon: Smartphone, version: '2.4.8', updated: '2026-04-10', link: 'https://download.kophyo.top/android' },
  { platform: 'iOS', icon: Smartphone, version: '2.4.7', updated: '2026-04-08', link: 'https://download.kophyo.top/ios' },
];

export function Downloads() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Downloads</h1>
          <p className="text-muted-foreground">Manage VPN application downloads</p>
        </div>
        <Button variant="primary">
          <Upload size={18} />
          Upload New Version
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {apps.map((app) => {
          const Icon = app.icon;
          return (
            <Card key={app.platform}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle>{app.platform}</CardTitle>
                      <p className="text-sm text-muted-foreground">Version {app.version}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Download Link</label>
                  <Input value={app.link} readOnly className="mt-1" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Last Updated</label>
                  <p className="text-sm mt-1">{app.updated}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit size={16} />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

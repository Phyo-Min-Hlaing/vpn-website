import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Save } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1>Settings</h1>
        <p className="text-muted-foreground">Manage application settings and configuration</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label>Site Name</label>
            <Input defaultValue="Kophyo.top VPN" className="mt-1" />
          </div>
          <div>
            <label>Support Email</label>
            <Input defaultValue="support@kophyo.top" type="email" className="mt-1" />
          </div>
          <div>
            <label>Contact Phone</label>
            <Input defaultValue="+1 (555) 123-4567" type="tel" className="mt-1" />
          </div>
          <Button variant="primary">
            <Save size={18} />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label>Stripe API Key</label>
            <Input defaultValue="sk_test_..." type="password" className="mt-1" />
          </div>
          <div>
            <label>PayPal Client ID</label>
            <Input defaultValue="AXt..." type="password" className="mt-1" />
          </div>
          <div>
            <label>Crypto Wallet Address</label>
            <Input defaultValue="0x..." className="mt-1" />
          </div>
          <Button variant="primary">
            <Save size={18} />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label>API Key</label>
            <Input defaultValue="vpn_api_..." type="password" className="mt-1" />
          </div>
          <div>
            <label>Webhook URL</label>
            <Input defaultValue="https://api.kophyo.top/webhook" className="mt-1" />
          </div>
          <Button variant="primary">
            <Save size={18} />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label>Two-Factor Authentication</label>
            <div className="flex items-center gap-2 mt-1">
              <Button variant="outline" size="sm">
                Enable 2FA
              </Button>
              <p className="text-sm text-muted-foreground">Not configured</p>
            </div>
          </div>
          <div>
            <label>Session Timeout (minutes)</label>
            <Input defaultValue="30" type="number" className="mt-1" />
          </div>
          <Button variant="primary">
            <Save size={18} />
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

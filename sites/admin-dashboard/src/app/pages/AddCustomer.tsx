import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ArrowLeft, Save, Phone, MessageCircle, Send } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

export function AddCustomer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    viber: '',
    telegram: '',
    plan: 'basic-1m',
    planStatus: 'active',
  });

  const plans = [
    { id: 'basic-1m', name: 'Basic 1 Month' },
    { id: 'basic-6m', name: 'Basic 6 Months' },
    { id: 'basic-1y', name: 'Basic 1 Year' },
    { id: 'premium-1m', name: 'Premium 1 Month' },
    { id: 'premium-6m', name: 'Premium 6 Months' },
    { id: 'premium-1y', name: 'Premium 1 Year' },
  ];

  const statuses = [
    { id: 'active', name: 'Active', variant: 'success' },
    { id: 'pending', name: 'Pending', variant: 'warning' },
    { id: 'cancelled', name: 'Cancelled', variant: 'danger' },
    { id: 'expired', name: 'Expired', variant: 'secondary' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving customer:', formData);
    navigate('/customers');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link to="/customers">
          <Button variant="outline" size="sm">
            <ArrowLeft size={18} />
            Back to Customers
          </Button>
        </Link>
        <div>
          <h1>Add New Customer</h1>
          <p className="text-muted-foreground">Create a new customer account</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label>Full Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label>Email Address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                  placeholder="customer@example.com"
                />
              </div>

              <div>
                <label>Mobile Number *</label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="pl-10"
                    placeholder="+95 9 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label>Viber Number</label>
                <div className="relative mt-1">
                  <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="tel"
                    value={formData.viber}
                    onChange={(e) => handleInputChange('viber', e.target.value)}
                    className="pl-10"
                    placeholder="+95 9 XXX XXX XXX"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Optional - Leave empty if same as mobile</p>
              </div>

              <div>
                <label>Telegram Account</label>
                <div className="relative mt-1">
                  <Send className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    value={formData.telegram}
                    onChange={(e) => handleInputChange('telegram', e.target.value)}
                    className="pl-10"
                    placeholder="@username"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Optional - Telegram username</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscription Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label>Select Plan *</label>
                <Select.Root
                  value={formData.plan}
                  onValueChange={(value) => handleInputChange('plan', value)}
                >
                  <Select.Trigger className="w-full h-10 px-3 mt-1 rounded-xl border border-input bg-input-background text-foreground flex items-center justify-between">
                    <Select.Value />
                    <Select.Icon>
                      <ChevronDown size={16} className="text-muted-foreground" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                      <Select.Viewport className="p-1">
                        {plans.map((plan) => (
                          <Select.Item
                            key={plan.id}
                            value={plan.id}
                            className="px-3 py-2 rounded-lg cursor-pointer hover:bg-accent outline-none data-[highlighted]:bg-accent"
                          >
                            <Select.ItemText>{plan.name}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>

              <div>
                <label>Plan Status *</label>
                <Select.Root
                  value={formData.planStatus}
                  onValueChange={(value) => handleInputChange('planStatus', value)}
                >
                  <Select.Trigger className="w-full h-10 px-3 mt-1 rounded-xl border border-input bg-input-background text-foreground flex items-center justify-between">
                    <Select.Value />
                    <Select.Icon>
                      <ChevronDown size={16} className="text-muted-foreground" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                      <Select.Viewport className="p-1">
                        {statuses.map((status) => (
                          <Select.Item
                            key={status.id}
                            value={status.id}
                            className="px-3 py-2 rounded-lg cursor-pointer hover:bg-accent outline-none data-[highlighted]:bg-accent"
                          >
                            <Select.ItemText>{status.name}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Customer Name</p>
                <p className="font-medium">{formData.name || 'Not set'}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium text-sm break-all">{formData.email || 'Not set'}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                <p className="font-medium">{formData.mobile || 'Not set'}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Selected Plan</p>
                <p className="font-medium">{plans.find(p => p.id === formData.plan)?.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="font-medium">{statuses.find(s => s.id === formData.planStatus)?.name}</p>
              </div>

              <Button 
                variant="primary" 
                className="w-full mt-4" 
                onClick={handleSave}
                disabled={!formData.name || !formData.email || !formData.mobile}
              >
                <Save size={18} />
                Create Customer
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm">Send Welcome Email</label>
                <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Generate VPN Key</label>
                <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Auto-activate Plan</label>
                <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

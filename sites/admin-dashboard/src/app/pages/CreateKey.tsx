import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Key, Copy, Check, Send, MessageCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Switch from '@radix-ui/react-switch';

export function CreateKey() {
  const [selectedPlan, setSelectedPlan] = useState('premium-1y');
  const [quantity, setQuantity] = useState('1');
  const [generatedKeys, setGeneratedKeys] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const plans = [
    { id: 'basic-1m', name: 'Basic 1 Month', price: '$9.99', duration: '30 days' },
    { id: 'basic-6m', name: 'Basic 6 Months', price: '$49.99', duration: '180 days' },
    { id: 'basic-1y', name: 'Basic 1 Year', price: '$89.99', duration: '365 days' },
    { id: 'premium-1m', name: 'Premium 1 Month', price: '$14.99', duration: '30 days' },
    { id: 'premium-6m', name: 'Premium 6 Months', price: '$74.99', duration: '180 days' },
    { id: 'premium-1y', name: 'Premium 1 Year', price: '$129.99', duration: '365 days' },
  ];

  const handleGenerate = () => {
    const keys: string[] = [];
    const count = parseInt(quantity) || 1;
    
    for (let i = 0; i < count; i++) {
      const randomKey = `VPNK-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      keys.push(randomKey);
    }
    
    setGeneratedKeys(keys);
  };

  const handleCopy = (key: string, index: number) => {
    navigator.clipboard.writeText(key);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generatedKeys.join('\n'));
    setCopiedIndex(-1);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link to="/keys">
          <Button variant="outline" size="sm">
            <ArrowLeft size={18} />
            Back to Keys
          </Button>
        </Link>
        <div>
          <h1>Generate VPN Keys</h1>
          <p className="text-muted-foreground">Create new VPN access keys for customers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup.Root value={selectedPlan} onValueChange={setSelectedPlan}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plans.map((plan) => (
                    <RadioGroup.Item
                      key={plan.id}
                      value={plan.id}
                      className="group"
                    >
                      <div
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          selectedPlan === plan.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium">{plan.name}</p>
                            <p className="text-sm text-muted-foreground">{plan.duration}</p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedPlan === plan.id
                                ? 'border-primary bg-primary'
                                : 'border-border'
                            }`}
                          >
                            {selectedPlan === plan.id && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </div>
                        <p className="text-primary">{plan.price}</p>
                      </div>
                    </RadioGroup.Item>
                  ))}
                </div>
              </RadioGroup.Root>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label>Number of Keys</label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mt-1"
                  placeholder="Enter quantity (1-100)"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Generate up to 100 keys at once
                </p>
              </div>

              <div>
                <label>Customer Email (Optional)</label>
                <Input
                  type="email"
                  placeholder="customer@example.com"
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Assign keys to a specific customer
                </p>
              </div>

              <div>
                <label>Notes (Optional)</label>
                <textarea
                  className="w-full h-24 px-3 py-2 rounded-xl border border-input bg-input-background text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Add internal notes about these keys..."
                />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-sm">Automated Reminders</h4>
                    <p className="text-xs text-muted-foreground">Send renewal notices before expiration</p>
                  </div>
                  <Switch.Root 
                    className="w-11 h-6 bg-muted rounded-full relative data-[state=checked]:bg-primary outline-none cursor-pointer"
                    id="auto-remind"
                    defaultChecked
                  >
                    <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                </div>
                
                <div className="space-y-3 pl-1">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remind-sms" className="rounded text-primary" defaultChecked />
                    <label htmlFor="remind-sms" className="text-sm cursor-pointer">Mobile SMS</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remind-tg" className="rounded text-primary" defaultChecked />
                    <label htmlFor="remind-tg" className="text-sm cursor-pointer">Telegram</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remind-vb" className="rounded text-primary" defaultChecked />
                    <label htmlFor="remind-vb" className="text-sm cursor-pointer">Viber</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {generatedKeys.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Generated Keys ({generatedKeys.length})</CardTitle>
                  <Button variant="outline" size="sm" onClick={handleCopyAll}>
                    {copiedIndex === -1 ? (
                      <>
                        <Check size={16} className="text-[#16A34A]" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy All
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {generatedKeys.map((key, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-xl"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <Key size={16} className="text-primary" />
                        <code className="font-mono text-sm">{key}</code>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button variant="ghost" size="icon" title="Send via SMS">
                          <Smartphone size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" title="Send via Telegram">
                          <Send size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" title="Send via Viber">
                          <MessageCircle size={16} />
                        </Button>
                        <div className="w-[1px] h-4 bg-border mx-1 hidden sm:block"></div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(key, index)}
                        >
                          {copiedIndex === index ? (
                            <Check size={16} className="text-[#16A34A]" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-[#16A34A]/10 rounded-xl border border-[#16A34A]/20">
                  <p className="text-sm text-[#16A34A]">
                    Keys generated successfully! Make sure to save them before leaving this page.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Selected Plan</p>
                <p className="font-medium">
                  {plans.find(p => p.id === selectedPlan)?.name || 'None'}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Quantity</p>
                <p className="font-medium">{quantity} key{parseInt(quantity) !== 1 ? 's' : ''}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Value per Key</p>
                <p className="font-medium">
                  {plans.find(p => p.id === selectedPlan)?.price || '$0.00'}
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                <h3 className="text-primary">
                  ${(parseFloat(plans.find(p => p.id === selectedPlan)?.price.replace('$', '') || '0') * parseInt(quantity || '1')).toFixed(2)}
                </h3>
              </div>

              <Button 
                variant="primary" 
                className="w-full" 
                onClick={handleGenerate}
                disabled={!quantity || parseInt(quantity) < 1}
              >
                <Key size={18} />
                Generate Keys
              </Button>

              {generatedKeys.length > 0 && (
                <Button variant="outline" className="w-full">
                  Save to Database
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    Unique cryptographic key generation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    Automatic expiration tracking
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    One-time activation per key
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground">
                    Export to CSV for bulk distribution
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

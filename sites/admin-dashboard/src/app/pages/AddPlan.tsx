import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ArrowLeft, Save, Trash2, ChevronDown } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';
import * as Select from '@radix-ui/react-select';

export function AddPlan() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    duration: '1 Month',
    durationDays: 30,
    price: '',
    discount: '0',
    active: true,
    features: ['Standard Speed', 'Email Support'] as string[],
  });

  const [newFeature, setNewFeature] = useState('');

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    console.log('Saving plan:', formData);
    navigate('/plans');
  };

  const originalPrice = formData.price ? (parseFloat(formData.price) / (1 - parseFloat(formData.discount || '0') / 100)) : 0;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/plans">
            <Button variant="outline" size="sm">
              <ArrowLeft size={18} />
              Back to Plans
            </Button>
          </Link>
          <div>
            <h1>Create New Plan</h1>
            <p className="text-muted-foreground">Add a new VPN subscription plan</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label>Plan Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                  placeholder="e.g., Premium 1 Year"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Duration</label>
                  <Select.Root
                    value={formData.duration}
                    onValueChange={(value) => {
                      handleInputChange('duration', value);
                      const daysMap: Record<string, number> = {
                        '1 Month': 30,
                        '3 Months': 90,
                        '6 Months': 180,
                        '1 Year': 365,
                      };
                      handleInputChange('durationDays', daysMap[value] || 30);
                    }}
                  >
                    <Select.Trigger className="w-full h-10 px-3 mt-1 rounded-xl border border-input bg-input-background text-foreground flex items-center justify-between">
                      <Select.Value />
                      <Select.Icon>
                        <ChevronDown size={16} className="text-muted-foreground" />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                        <Select.Viewport className="p-1">
                          {['1 Month', '3 Months', '6 Months', '1 Year'].map((option) => (
                            <Select.Item
                              key={option}
                              value={option}
                              className="px-3 py-2 rounded-lg cursor-pointer hover:bg-accent outline-none data-[highlighted]:bg-accent"
                            >
                              <Select.ItemText>{option}</Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>

                <div>
                  <label>Duration (Days)</label>
                  <Input
                    type="number"
                    value={formData.durationDays}
                    onChange={(e) => handleInputChange('durationDays', parseInt(e.target.value))}
                    className="mt-1"
                    placeholder="30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Price (USD)</label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="pl-7"
                      placeholder="9.99"
                    />
                  </div>
                </div>

                <div>
                  <label>Discount (%)</label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.discount}
                      onChange={(e) => handleInputChange('discount', e.target.value)}
                      placeholder="0"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                  </div>
                </div>
              </div>

              {parseFloat(formData.discount || '0') > 0 && (
                <div className="p-4 bg-[#16A34A]/10 rounded-xl border border-[#16A34A]/20">
                  <p className="text-sm text-[#16A34A]">
                    Original Price: ${originalPrice.toFixed(2)} • You Save: ${(originalPrice - parseFloat(formData.price || '0')).toFixed(2)} ({formData.discount}%)
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <label className="mb-0">Plan Status</label>
                  <p className="text-sm text-muted-foreground">
                    {formData.active ? 'Plan will be active and visible to customers immediately' : 'Plan will be inactive and hidden initially'}
                  </p>
                </div>
                <Switch.Root
                  className="w-11 h-6 bg-[var(--switch-background)] rounded-full relative data-[state=checked]:bg-primary transition-colors cursor-pointer outline-none"
                  checked={formData.active}
                  onCheckedChange={(checked) => handleInputChange('active', checked)}
                >
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                </Switch.Root>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plan Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label>Add Feature</label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="e.g., 10 Devices"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddFeature();
                      }
                    }}
                  />
                  <Button variant="outline" onClick={handleAddFeature}>
                    Add
                  </Button>
                </div>
              </div>

              {formData.features.length > 0 && (
                <div className="space-y-2">
                  <label>Current Features</label>
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-xl"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveFeature(index)}
                        >
                          <Trash2 size={16} className="text-destructive" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Plan Name</p>
                <h3>{formData.name || 'Unnamed Plan'}</h3>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p>{formData.duration} ({formData.durationDays} days)</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-primary">${formData.price || '0.00'}</h2>
                  {parseFloat(formData.discount || '0') > 0 && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {parseFloat(formData.discount || '0') > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Discount</p>
                  <p className="text-[#16A34A]">{formData.discount}% OFF</p>
                </div>
              )}

              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <div className="inline-flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${formData.active ? 'bg-[#16A34A]' : 'bg-[#6B7280]'}`} />
                  <span className="text-sm">{formData.active ? 'Active' : 'Inactive'}</span>
                </div>
              </div>

              {formData.features.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Features</p>
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Button variant="primary" className="w-full" onClick={handleSave} disabled={!formData.name || !formData.price}>
            <Save size={18} />
            Create Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
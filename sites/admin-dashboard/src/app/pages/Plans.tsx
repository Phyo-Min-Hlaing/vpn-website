import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import * as Switch from '@radix-ui/react-switch';

const plans = [
  { id: 'basic-1m', name: 'Basic 1M', duration: '1 Month', price: '$9.99', discount: '0%', active: true },
  { id: 'basic-6m', name: 'Basic 6M', duration: '6 Months', price: '$49.99', discount: '15%', active: true },
  { id: 'basic-1y', name: 'Basic 1Y', duration: '1 Year', price: '$89.99', discount: '25%', active: true },
  { id: 'premium-1m', name: 'Premium 1M', duration: '1 Month', price: '$14.99', discount: '0%', active: true },
  { id: 'premium-6m', name: 'Premium 6M', duration: '6 Months', price: '$74.99', discount: '15%', active: true },
  { id: 'premium-1y', name: 'Premium 1Y', duration: '1 Year', price: '$129.99', discount: '30%', active: true },
];

export function Plans() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Plans</h1>
          <p className="text-muted-foreground">Manage VPN subscription plans</p>
        </div>
        <Link to="/plans/add">
          <Button variant="primary">
            <Plus size={18} />
            Add New Plan
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{plan.duration}</p>
                </div>
                <Switch.Root
                  className="w-11 h-6 bg-[var(--switch-background)] rounded-full relative data-[state=checked]:bg-primary transition-colors"
                  defaultChecked={plan.active}
                >
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                </Switch.Root>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <h2>{plan.price}</h2>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Discount</p>
                  <p className="text-[#16A34A]">{plan.discount}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link to={`/plans/edit/${plan.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit size={16} />
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

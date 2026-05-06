import { Link } from 'react-router';
import { ArrowLeft, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function AddReseller() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <Link to="/resellers">
          <Button variant="ghost" size="icon">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <div>
          <h1>Add Reseller</h1>
          <p className="text-muted-foreground">Create a new reseller account</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reseller Information</CardTitle>
          <CardDescription>Enter the basic details for the new reseller.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Company / Individual Name</Label>
            <Input id="name" placeholder="e.g. Alpha Tech Solutions" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="reseller@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wallet">Initial Wallet Balance ($)</Label>
            <Input id="wallet" type="number" defaultValue="0" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discount">Default Discount Rate (%)</Label>
            <Input id="discount" type="number" defaultValue="15" />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Link to="/resellers">
              <Button variant="ghost">Cancel</Button>
            </Link>
            <Button variant="primary">
              <Save size={18} className="mr-2" />
              Save Reseller
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

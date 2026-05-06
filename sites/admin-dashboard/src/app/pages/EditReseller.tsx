import { Link, useParams } from 'react-router';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function EditReseller() {
  const { resellerId } = useParams();

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/resellers">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div>
            <h1>Edit Reseller</h1>
            <p className="text-muted-foreground">Manage reseller details</p>
          </div>
        </div>
        <Button variant="ghost" className="text-destructive hover:bg-destructive/10">
          <Trash2 size={18} className="mr-2" />
          Suspend Account
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reseller Information</CardTitle>
          <CardDescription>Update details for this reseller account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Company / Individual Name</Label>
            <Input id="name" defaultValue="Alpha Tech Solutions" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="alpha@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wallet">Current Wallet Balance ($)</Label>
            <Input id="wallet" type="number" defaultValue="1245.50" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discount">Default Discount Rate (%)</Label>
            <Input id="discount" type="number" defaultValue="20" />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Link to="/resellers">
              <Button variant="ghost">Cancel</Button>
            </Link>
            <Button variant="primary">
              <Save size={18} className="mr-2" />
              Update Reseller
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

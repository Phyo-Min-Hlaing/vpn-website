import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Shield, Edit, Trash2, Plus, Users } from 'lucide-react';

const roles = [
  { name: 'Super Admin', description: 'Full system access', users: 2, permissions: 'All', color: 'danger' },
  { name: 'Admin', description: 'Manage orders, keys, and customers', users: 5, permissions: '12/15', color: 'primary' },
  { name: 'Staff', description: 'View and update orders', users: 8, permissions: '6/15', color: 'secondary' },
  { name: 'Reseller', description: 'Buy and sell VPN keys', users: 24, permissions: '4/15', color: 'success' },
];

const permissions = [
  { module: 'Dashboard', view: true, edit: false, delete: false },
  { module: 'Orders', view: true, edit: true, delete: false },
  { module: 'VPN Keys', view: true, edit: true, delete: true },
  { module: 'Plans', view: true, edit: true, delete: false },
  { module: 'Customers', view: true, edit: true, delete: false },
  { module: 'Payments', view: true, edit: false, delete: false },
  { module: 'Downloads', view: true, edit: true, delete: false },
  { module: 'API Access', view: false, edit: false, delete: false },
  { module: 'Reseller Panel', view: false, edit: false, delete: false },
  { module: 'Analytics', view: true, edit: false, delete: false },
  { module: 'Settings', view: true, edit: true, delete: false },
];

export function Roles() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Roles & Permissions</h1>
          <p className="text-muted-foreground">Manage user roles and access control</p>
        </div>
        <Button variant="primary">
          <Plus size={18} />
          Create Role
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Roles</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.name}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Shield size={16} className="text-primary" />
                          {role.name}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{role.description}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-muted-foreground" />
                          {role.users}
                        </div>
                      </TableCell>
                      <TableCell>{role.permissions}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" disabled={role.name === 'Super Admin'}>
                            <Trash2 size={16} className="text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix - Admin Role</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {permissions.map((perm) => (
                  <div key={perm.module} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                    <span className="text-sm">{perm.module}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={perm.view} readOnly className="w-4 h-4" />
                        <span className="text-xs text-muted-foreground">View</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={perm.edit} readOnly className="w-4 h-4" />
                        <span className="text-xs text-muted-foreground">Edit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={perm.delete} readOnly className="w-4 h-4" />
                        <span className="text-xs text-muted-foreground">Delete</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assign Role to User</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm">Select User</label>
                <select className="w-full h-10 px-3 mt-1 rounded-xl border border-input bg-input-background">
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Mike Johnson</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Select Role</label>
                <select className="w-full h-10 px-3 mt-1 rounded-xl border border-input bg-input-background">
                  <option>Admin</option>
                  <option>Staff</option>
                  <option>Reseller</option>
                </select>
              </div>
              <Button variant="primary" className="w-full">
                Assign Role
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Role Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Roles</span>
                <span className="text-sm">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Users</span>
                <span className="text-sm">39</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Custom Roles</span>
                <span className="text-sm">1</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

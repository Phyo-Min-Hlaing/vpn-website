import React from 'react';
import { User, Mail, Shield, LogOut } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router';

export function Profile() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </Button>
      </div>

      <div className="space-y-6">
        {/* User Info Card */}
        <Card>
          <CardHeader className="border-b border-[#E5E5E5] bg-[#FAFAFA] rounded-t-[10px]">
            <h2 className="text-lg font-bold">Account Information</h2>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#6B4226]/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-[#6B4226]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">John Doe</h3>
                  <div className="flex items-center text-[#1F1F1F]/60 text-sm mt-1">
                    <Mail className="w-4 h-4 mr-1.5" />
                    john.doe@example.com
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#F5F5F5]">
                  <p className="text-sm text-[#1F1F1F]/60 mb-1">Account Status</p>
                  <p className="font-medium text-green-600">Active Premium</p>
                </div>
                <div className="p-4 rounded-lg bg-[#F5F5F5]">
                  <p className="text-sm text-[#1F1F1F]/60 mb-1">Member Since</p>
                  <p className="font-medium">August 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="border-b border-[#E5E5E5] bg-[#FAFAFA] rounded-t-[10px]">
            <h2 className="text-lg font-bold">Quick Actions</h2>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/orders" className="flex items-center p-4 border border-[#E5E5E5] rounded-lg hover:border-[#6B4226] transition-colors group">
                <Shield className="w-5 h-5 text-[#6B4226] mr-3" />
                <div>
                  <p className="font-medium group-hover:text-[#6B4226]">View active plans</p>
                  <p className="text-sm text-[#1F1F1F]/60">Manage your subscriptions</p>
                </div>
              </Link>
              <div className="flex items-center p-4 border border-[#E5E5E5] rounded-lg cursor-not-allowed opacity-60">
                <Mail className="w-5 h-5 text-[#1F1F1F] mr-3" />
                <div>
                  <p className="font-medium">Change Email</p>
                  <p className="text-sm text-[#1F1F1F]/60">Contact support</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

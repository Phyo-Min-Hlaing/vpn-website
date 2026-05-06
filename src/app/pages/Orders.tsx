import React, { useState } from 'react';
import { Copy, Check, Key } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

// Mock data
const mockOrders = [
  {
    id: 'ORD-8923',
    plan: '12 Months Premium',
    date: 'Oct 12, 2023',
    status: 'Active',
    expires: 'Oct 12, 2024',
    key: 'VPN-ABCD-1234-EFGH-5678',
  },
  {
    id: 'ORD-4122',
    plan: '1 Month Premium',
    date: 'Aug 05, 2023',
    status: 'Expired',
    expires: 'Sep 05, 2023',
    key: 'VPN-WXYZ-9876-QWER-4321',
  }
];

export function Orders() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (key: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(key);
      } else {
        // Fallback for environments where clipboard API is restricted
        const textArea = document.createElement("textarea");
        textArea.value = key;
        // Move outside the screen to make it invisible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
        } catch (error) {
          console.error("Fallback copy failed", error);
        } finally {
          textArea.remove();
        }
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Your Orders</h1>
      <p className="text-[#1F1F1F]/70 mb-8">Manage your VPN subscriptions and license keys.</p>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="p-6 flex-1 border-b sm:border-b-0 sm:border-r border-[#E5E5E5] bg-[#FAFAFA]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{order.plan}</h3>
                      <p className="text-sm text-[#1F1F1F]/60">Order #{order.id} • {order.date}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-[#1F1F1F]/60">Valid until:</span> <span className="font-medium">{order.expires}</span>
                  </div>
                </div>
                
                <div className="p-6 sm:w-1/3 flex flex-col justify-center items-center bg-white space-y-3">
                  <div className="flex items-center gap-2 text-sm text-[#1F1F1F]/60">
                    <Key className="w-4 h-4" />
                    <span>License Key</span>
                  </div>
                  <div className="font-mono text-sm bg-[#F5F5F5] px-3 py-1.5 rounded w-full text-center truncate">
                    {order.status === 'Active' ? '••••-••••-••••-5678' : 'Expired'}
                  </div>
                  
                  <Button 
                    variant={order.status === 'Active' ? 'outline' : 'ghost'} 
                    size="sm" 
                    className="w-full gap-2"
                    disabled={order.status !== 'Active'}
                    onClick={() => copyToClipboard(order.key)}
                  >
                    {copiedKey === order.key ? (
                      <><Check className="w-4 h-4" /> Copied</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Copy Key</>
                    )}
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

import React from 'react';
import { useParams, Link } from 'react-router';
import { Check, Shield, Lock, Zap, Server, MonitorSmartphone, Headset, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const planData: Record<string, { name: string, price: number, save: number }> = {
  '1m': { name: '1 Month', price: 2.49, save: 0 },
  '3m': { name: '3 Months', price: 6.49, save: 15 },
  '6m': { name: '6 Months', price: 9.99, save: 25 },
  '12m': { name: '12 Months', price: 14.99, save: 40 },
  '24m': { name: '24 Months', price: 24.99, save: 55 },
};

export function PlanDetails() {
  const { id } = useParams<{ id: string }>();
  const plan = id ? planData[id] : planData['12m'];

  if (!plan) {
    return <div className="p-20 text-center">Plan not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <Link to="/#plans" className="text-sm text-[#1F1F1F]/60 hover:text-[#6B4226] mb-8 inline-block">
        &larr; Back to Plans
      </Link>
      
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
        {/* Left: Plan Info & Price */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-2 border-[#6B4226]">
            <CardHeader className="bg-[#FAFAFA] border-b border-[#E5E5E5] rounded-t-[10px]">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-[#6B4226]" />
                <h2 className="text-2xl font-bold">{plan.name} Plan</h2>
              </div>
              {plan.save > 0 && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-200 w-fit">
                  Save {plan.save}%
                </span>
              )}
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold mb-6">${plan.price}</div>
              
              <div className="space-y-4">
                <p className="text-sm font-medium mb-2">Select Payment Method:</p>
                <div className="grid grid-cols-3 gap-2">
                  <button className="flex flex-col items-center justify-center p-3 rounded-[8px] border-2 border-[#6B4226] bg-[#F5F5F5]">
                    <CreditCard className="w-5 h-5 mb-1" />
                    <span className="text-xs font-medium">Card</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-[8px] border border-[#E5E5E5] hover:border-[#6B4226] transition-colors">
                    <span className="font-bold text-blue-800 text-xs italic mb-1">PayPal</span>
                    <span className="text-xs font-medium">PayPal</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-[8px] border border-[#E5E5E5] hover:border-[#6B4226] transition-colors">
                    <span className="text-xs font-bold mb-1">₿</span>
                    <span className="text-xs font-medium">Crypto</span>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full">Secure Checkout</Button>
                <p className="text-center text-xs text-[#1F1F1F]/60 mt-3">
                  30-day money-back guarantee
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Features */}
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold mb-6">What's included in this plan</h3>
          
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { title: "Premium Access", icon: Shield, desc: "Full access to all VPN features without restrictions." },
              { title: "100+ Servers", icon: Server, desc: "Connect to high-speed servers across the globe." },
              { title: "High Speed Connection", icon: Zap, desc: "Optimized for streaming, gaming, and large downloads." },
              { title: "No Logs Policy", icon: Lock, desc: "We never track, collect, or share your private data." },
              { title: "Multi-device Support", icon: MonitorSmartphone, desc: "Use one account on your PC, phone, and tablet." },
              { title: "24/7 Support", icon: Headset, desc: "Our expert team is here to help you anytime." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  <feature.icon className="w-4 h-4 text-[#6B4226]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F1F1F] mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#1F1F1F]/70 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Check, Shield, Lock, Zap, Server, MonitorSmartphone, Headset, Smartphone, Upload, Send } from 'lucide-react';
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

  const [step, setStep] = useState<'details' | 'form' | 'success'>('details');
  const [selectedPayment, setSelectedPayment] = useState<string>('kbz');
  const [fileName, setFileName] = useState<string | null>(null);

  if (!plan) {
    return <div className="p-20 text-center">Plan not found</div>;
  }

  const handlePaymentSelect = (payment: string) => {
    setSelectedPayment(payment);
  };

  const handleBuyNow = () => {
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  if (step === 'success') {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Payment Submitted!</h2>
        <p className="text-lg text-[#1F1F1F]/70 mb-8 leading-relaxed">
          Thank you for your purchase. We are verifying your payment details. 
          <br/>
          Your VPN Key will be sent to your provided contact (Viber/Telegram/Mobile) shortly.
        </p>
        <Link to="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      <button 
        onClick={() => step === 'form' ? setStep('details') : window.history.back()} 
        className="text-sm text-[#1F1F1F]/60 hover:text-[#6B4226] mb-8 inline-block cursor-pointer"
      >
        &larr; {step === 'form' ? 'Back to Payment Methods' : 'Back to Plans'}
      </button>
      
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
        {/* Left: Action Card */}
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
              <div className="flex justify-between items-baseline mb-6">
                <div className="text-4xl font-bold">${plan.price}</div>
                {step === 'form' && (
                  <div className="text-sm font-bold text-[#6B4226] uppercase bg-[#6B4226]/10 px-3 py-1 rounded-full">
                    {selectedPayment} Pay
                  </div>
                )}
              </div>

              {step === 'details' ? (
                <div className="transition-opacity duration-300">
                  <div className="space-y-4">
                    <p className="text-sm font-medium mb-2">Select Payment Method:</p>
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => handlePaymentSelect('kbz')}
                        className={`flex flex-col items-center justify-center p-3 rounded-[8px] border-2 transition-colors ${selectedPayment === 'kbz' ? 'border-[#6B4226] bg-[#F5F5F5]' : 'border-[#E5E5E5] hover:border-[#6B4226]'}`}
                      >
                        <Smartphone className="w-5 h-5 mb-1 text-blue-600" />
                        <span className="text-xs font-bold text-center leading-tight">KBZ<br/>Pay</span>
                      </button>
                      <button 
                        onClick={() => handlePaymentSelect('wave')}
                        className={`flex flex-col items-center justify-center p-3 rounded-[8px] border-2 transition-colors ${selectedPayment === 'wave' ? 'border-[#6B4226] bg-[#F5F5F5]' : 'border-[#E5E5E5] hover:border-[#6B4226]'}`}
                      >
                        <Smartphone className="w-5 h-5 mb-1 text-yellow-500" />
                        <span className="text-xs font-bold text-center leading-tight">Wave<br/>Pay</span>
                      </button>
                      <button 
                        onClick={() => handlePaymentSelect('aya')}
                        className={`flex flex-col items-center justify-center p-3 rounded-[8px] border-2 transition-colors ${selectedPayment === 'aya' ? 'border-[#6B4226] bg-[#F5F5F5]' : 'border-[#E5E5E5] hover:border-[#6B4226]'}`}
                      >
                        <Smartphone className="w-5 h-5 mb-1 text-red-600" />
                        <span className="text-xs font-bold text-center leading-tight">AYA<br/>Pay</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button size="lg" className="w-full" onClick={handleBuyNow}>Buy Now</Button>
                    <p className="text-center text-xs text-[#1F1F1F]/60 mt-3">
                      Secure payment via local mobile apps
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 transition-opacity duration-300">
                  <div className="p-4 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg mb-6">
                    <p className="text-sm font-medium text-[#1F1F1F] mb-1">
                      Payment Instructions
                    </p>
                    <p className="text-sm text-[#1F1F1F]/70">
                      Please transfer <span className="font-bold text-[#1F1F1F]">${plan.price}</span> equivalent using <span className="font-bold uppercase text-[#1F1F1F]">{selectedPayment} Pay</span> to our account number <span className="font-mono font-bold text-[#1F1F1F] bg-white px-1.5 py-0.5 rounded border border-[#E5E5E5] ml-1">09123456789</span>. Then, fill out the form below.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-3 py-2 border border-[#E5E5E5] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Contact Details</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Viber, Telegram, or Mobile Number" 
                      className="w-full px-3 py-2 border border-[#E5E5E5] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Payment Screenshot</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#E5E5E5] border-dashed rounded-[8px] hover:border-[#6B4226] transition-colors relative cursor-pointer group bg-[#FAFAFA]">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-8 w-8 text-[#1F1F1F]/40 group-hover:text-[#6B4226] transition-colors" />
                        <div className="flex text-sm text-[#1F1F1F]/60 justify-center">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#6B4226] hover:underline focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} required />
                          </label>
                        </div>
                        <p className="text-xs text-[#1F1F1F]/50">PNG, JPG up to 5MB</p>
                        {fileName && <p className="text-xs font-bold text-[#6B4226] mt-2 block break-all">{fileName}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send className="w-4 h-4" /> Submit Payment
                    </Button>
                  </div>
                </form>
              )}
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

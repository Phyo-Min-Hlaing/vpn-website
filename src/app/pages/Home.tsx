import React from 'react';
import { Link } from 'react-router';
import { Shield, Zap, Lock, Globe, Server, Check, Monitor, Smartphone, Apple } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/Card';

const plans = [
  { id: '1m', name: '1 Month', price: 2.49, save: 0, link: '/plan/1m' },
  { id: '3m', name: '3 Months', price: 6.49, save: 15, link: '/plan/3m' },
  { id: '6m', name: '6 Months', price: 9.99, save: 25, link: '/plan/6m' },
  { id: '12m', name: '12 Months', price: 14.99, save: 40, popular: true, link: '/plan/12m' },
  { id: '24m', name: '24 Months', price: 24.99, save: 55, link: '/plan/24m' },
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F5F5F5] -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1F1F1F]">
            Premium VPN Keys for <span className="text-[#6B4226]">Unlimited Privacy</span>
          </h1>
          <p className="text-lg md:text-xl text-[#1F1F1F]/70 max-w-2xl mx-auto">
            Fast. Secure. No Logs. Works on all devices. Protect your digital life with a single click.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#1F1F1F]/80">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#6B4226]" /> No Logs
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#6B4226]" /> High Speed
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#6B4226]" /> Secure
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="#plans">
              <Button size="lg" className="w-full sm:w-auto">Buy Now</Button>
            </Link>
            <Link to="#download">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Download App</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-[#1F1F1F]/70">Everything you need for a secure browsing experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Instant Delivery", desc: "Get key instantly" },
              { icon: Globe, title: "Global Servers", desc: "100+ locations" },
              { icon: Server, title: "Fast & Stable", desc: "High-speed VPN" },
              { icon: Lock, title: "No Logs Policy", desc: "Your privacy first" }
            ].map((feature, i) => (
              <Card key={i} className="bg-[#FAFAFA] border-none shadow-none hover:shadow-sm transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#6B4226]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#6B4226]" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-[#1F1F1F]/70">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 px-4 md:px-6 scroll-mt-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-[#1F1F1F]/70">Choose the best plan for your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.id} className={`flex flex-col relative ${plan.popular ? 'border-[#6B4226] shadow-md ring-1 ring-[#6B4226]' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 inset-x-0 flex justify-center">
                    <span className="bg-[#6B4226] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <Shield className="w-8 h-8 text-[#6B4226] mx-auto mb-4" />
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">${plan.price}</span>
                  </div>
                  {plan.save > 0 ? (
                    <p className="text-sm text-green-600 font-medium mt-2">Save {plan.save}%</p>
                  ) : (
                    <p className="text-sm text-transparent mt-2">No discount</p> // Spacer
                  )}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-[#6B4226] mr-2 shrink-0"/> All premium features</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-[#6B4226] mr-2 shrink-0"/> Multi-device support</li>
                    <li className="flex items-center text-sm"><Check className="w-4 h-4 text-[#6B4226] mr-2 shrink-0"/> 24/7 priority support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={plan.link} className="w-full">
                    <Button variant={plan.popular ? "primary" : "outline"} className="w-full">Buy Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white px-4 md:px-6 scroll-mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Download Kophyo.top VPN</h2>
          <p className="text-[#1F1F1F]/70 mb-12">Available on all your favorite platforms</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            {[
              { name: 'Windows', icon: Monitor },
              { name: 'macOS', icon: Apple },
              { name: 'Android', icon: Smartphone },
              { name: 'iOS', icon: Smartphone },
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center p-6 rounded-[12px] border border-[#E5E5E5] hover:border-[#6B4226] transition-colors group cursor-pointer">
                <platform.icon className="w-10 h-10 text-[#1F1F1F] group-hover:text-[#6B4226] transition-colors mb-4" />
                <span className="font-medium mb-2">{platform.name}</span>
                <span className="text-sm text-[#6B4226] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Download</span>
              </div>
            ))}
          </div>
          
          <a href="#" className="text-[#6B4226] hover:underline text-sm font-medium">How to Install?</a>
        </div>
      </section>
    </div>
  );
}

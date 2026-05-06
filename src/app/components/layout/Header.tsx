import React from 'react';
import { Link, useLocation } from 'react-router';
import { Shield } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Plans', path: '/#plans' },
    { name: 'Download', path: '/#download' },
    { name: 'Orders', path: '/orders' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-[#6B4226]" />
          <span className="font-bold text-lg text-[#1F1F1F]">Kophyo.top VPN</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#6B4226] ${
                location.pathname === link.path && !link.path.includes('#')
                  ? 'text-[#6B4226]'
                  : 'text-[#1F1F1F]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/#plans">
            <Button size="sm">Buy VPN</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';

export function RootLayout() {
  const { hash } = useLocation();

  // Handle scroll to hash
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1F1F1F] font-sans selection:bg-[#6B4226]/20">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-[#E5E5E5] bg-white py-8 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-[#1F1F1F]/60">
          <p>© {new Date().getFullYear()} Kophyo.top VPN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

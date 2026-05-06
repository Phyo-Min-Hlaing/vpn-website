import { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MobileNav } from './MobileNav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar 
        isOpen={sidebarOpen} 
        isDesktopOpen={desktopOpen}
        onClose={() => setSidebarOpen(false)} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onMenuClick={() => {
          if (window.innerWidth < 1024) {
            setSidebarOpen(!sidebarOpen);
          } else {
            setDesktopOpen(!desktopOpen);
          }
        }} />
        <main className="flex-1 overflow-auto p-4 md:p-6 pb-20 lg:pb-6">
          {children}
        </main>
        <MobileNav />
      </div>
    </div>
  );
}

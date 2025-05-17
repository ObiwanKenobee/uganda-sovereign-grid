
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  BookOpen,
  Leaf,
  Heart,
  Wallet,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import OfflineIndicator from "./OfflineIndicator";
import { Link, Outlet, useLocation } from "react-router-dom";

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    name: "Edu-Grid",
    path: "/dashboard/edu-grid",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "AgroGrid",
    path: "/dashboard/agrogrid",
    icon: <Leaf className="h-5 w-5" />,
  },
  {
    name: "HealthPods",
    path: "/dashboard/healthpods",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    name: "Finance",
    path: "/dashboard/finance",
    icon: <Wallet className="h-5 w-5" />,
  },
  {
    name: "Civic Core",
    path: "/dashboard/civic-core",
    icon: <Users className="h-5 w-5" />,
  },
];

const DashboardLayout: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Mobile Header */}
      <header className="md:hidden p-4 bg-ustg-primary text-white flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white hover:bg-ustg-purple">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="font-bold">USTG</h1>
        </div>
        <OfflineIndicator />
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out fixed md:relative z-30 md:z-0 inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border flex flex-col`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-ustg-primary p-1 rounded text-white">
              <LayoutGrid className="h-5 w-5" />
            </div>
            <h1 className="font-bold text-lg text-sidebar-foreground">USTG Platform</h1>
          </div>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <Button variant="ghost" className="w-full justify-start" onClick={onLogout}>
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 z-20 bg-black/50 transition-opacity md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="hidden md:flex items-center justify-end p-4 border-b bg-card">
          <OfflineIndicator />
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

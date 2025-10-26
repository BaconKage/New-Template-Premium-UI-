import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/", label: "Dashboard" },
  { path: "/registration", label: "Registration" },
  { path: "/clients", label: "Clients" },
  { path: "/coach-hub", label: "Coach Hub" },
  { path: "/messages", label: "Messages" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with glass effect */}
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-card/80 shadow-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
                Shubhang's Gym
              </h1>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold">Admin</p>
                  <p className="text-xs text-muted-foreground">Manager</p>
                </div>
                <Avatar className="h-12 w-12 border-2 border-primary/20 ring-4 ring-primary/10 transition-all group-hover:ring-primary/20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-lg">SG</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover/95 backdrop-blur-xl border-border/50 shadow-xl">
              <DropdownMenuItem className="cursor-pointer py-3">
                <User className="mr-3 h-4 w-4" />
                <span className="font-medium">Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-destructive py-3">
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-medium">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Navigation with premium styling */}
      <nav className="sticky top-20 z-40 border-b border-border/50 backdrop-blur-xl bg-card/60 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-8 py-4 text-sm font-semibold transition-all duration-300 rounded-t-lg ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary animate-in slide-in-from-left duration-300 shadow-glow" />
                    <div className="absolute inset-0 bg-primary/5 rounded-t-lg" />
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10 animate-in fade-in duration-500">
        {children}
      </main>
    </div>
  );
}

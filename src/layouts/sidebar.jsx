import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, MessageSquare, Plus, Search } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems, servers } from "../App";

const Layout = () => {
  const [activeServer, setActiveServer] = useState("1");

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[72px_240px_1fr]">
      <ServerSidebar activeServer={activeServer} setActiveServer={setActiveServer} />
      <ChannelSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <span className="font-semibold">General</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Search className="h-5 w-5" />
            <Button variant="outline" size="icon">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
        <footer className="border-t p-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <input
              type="text"
              placeholder="Message #general"
              className="flex-1 bg-muted px-3 py-2 rounded-md"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

const ServerSidebar = ({ activeServer, setActiveServer }) => (
  <div className="flex flex-col items-center space-y-4 py-4 bg-secondary">
    {servers.map((server) => (
      <Tooltip key={server.id} delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant={activeServer === server.id ? "default" : "ghost"}
            className="h-12 w-12 rounded-full p-0"
            onClick={() => setActiveServer(server.id)}
          >
            {typeof server.icon === "string" ? (
              <span className="text-lg font-semibold">{server.icon}</span>
            ) : (
              server.icon
            )}
            <span className="sr-only">{server.name}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">{server.name}</TooltipContent>
      </Tooltip>
    ))}
  </div>
);

const ChannelSidebar = () => (
  <div className="flex flex-col border-r bg-muted/40">
    <div className="p-4 font-semibold">Server Name</div>
    <nav className="flex-1 overflow-auto p-2">
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to} icon={item.icon}>
          {item.title}
        </NavItem>
      ))}
    </nav>
    <UserInfo />
  </div>
);

const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
        isActive ? "bg-accent" : "text-muted-foreground"
      )
    }
  >
    {icon}
    {children}
  </NavLink>
);

const UserInfo = () => (
  <div className="mt-auto p-4">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <CircleUser className="h-5 w-5" />
          <span>Username</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default Layout;
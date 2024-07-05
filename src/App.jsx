import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hash, Home, Plus } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "General",
    to: "/",
    icon: <Hash className="h-4 w-4" />,
  },
  {
    title: "Random",
    to: "/random",
    icon: <Hash className="h-4 w-4" />,
  },
];

export const servers = [
  {
    id: "1",
    name: "Home",
    icon: <Home className="h-6 w-6" />,
  },
  {
    id: "2",
    name: "Server 1",
    icon: "S1",
  },
  {
    id: "3",
    name: "Server 2",
    icon: "S2",
  },
  {
    id: "add",
    name: "Add Server",
    icon: <Plus className="h-6 w-6" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
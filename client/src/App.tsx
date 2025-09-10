import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Landing from "@/pages/landing";
import ContentPlanner from "@/pages/content-planner";
import Analytics from "@/pages/analytics";
import BulkScheduling from "@/pages/bulk-scheduling";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/app" component={ContentPlanner} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/bulk-scheduling" component={BulkScheduling} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="content-planner-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

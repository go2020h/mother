import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import HomePage from "@/pages/HomePage";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route 
        path="/products" 
        component={() => (
          <>
            <Navigation />
            <ProductList />
          </>
        )}
      />
      <Route 
        path="/products/:slug" 
        component={() => (
          <>
            <Navigation />
            <ProductDetail />
          </>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
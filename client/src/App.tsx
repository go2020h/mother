import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

// FAQセクションへの直接リンク
// HomePageを表示し、ページロード時にFAQセクションにスクロールする
function FAQPage() {
  useEffect(() => {
    // FAQセクションの要素を取得
    const faqElement = document.getElementById('faq');
    if (faqElement) {
      // スムーズにスクロールするためにsetTimeoutを使用
      setTimeout(() => {
        faqElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return <HomePage />;
}

// レイアウトコンポーネント
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => (
        <Layout>
          <HomePage />
        </Layout>
      )} />
      <Route path="/faq" component={() => (
        <Layout>
          <FAQPage />
        </Layout>
      )} />
      <Route path="/privacypolicy" component={() => (
        <Layout>
          <PrivacyPolicy />
        </Layout>
      )} />
      <Route 
        path="/products" 
        component={() => (
          <Layout>
            <Navigation />
            <ProductList />
          </Layout>
        )}
      />
      <Route 
        path="/products/:slug" 
        component={() => (
          <Layout>
            <Navigation />
            <ProductDetail />
          </Layout>
        )}
      />
      <Route component={() => (
        <Layout>
          <NotFound />
        </Layout>
      )} />
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
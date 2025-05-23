import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile"; // useIsMobileフックをインポート

export default function Navigation() {
  const isMobile = useIsMobile(); // モバイル表示かどうかを検出
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // 製品一覧ページでは、モバイル表示でない場合のみデフォルトでメニューを開く
    if (location === "/products" && !isMobile) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [location, isMobile]); // isMobileも依存配列に追加

  // 画面サイズが変わった時にモバイル表示になったらメニューを閉じる
  useEffect(() => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="container max-w-[1400px] mx-auto px-12 py-4 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-4"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/products">
          <img 
            src="https://cdn.shopify.com/s/files/1/0611/4476/0578/files/logo_mother-blk.svg" 
            alt="MOTHER BRACELET"
            className="h-8"
          />
        </Link>
      </div>
      <div 
        className={`fixed left-0 top-[72px] h-full w-[300px] bg-gray-50 pl-12 pr-4 py-4 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl font-bold mb-4 px-4">製品一覧</h2>
        <nav className="space-y-2">
          <Link href="/products">
            <a className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
              MOTHER Bracelet
            </a>
          </Link>
          <Link href="/products">
            <a className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
              Accessories
            </a>
          </Link>
        </nav>
      </div>
    </nav>
  );
}
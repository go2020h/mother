import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            MOTHER Bracelet
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#story" className="text-sm hover:text-primary">ストーリー</a>
            <a href="#faq" className="text-sm hover:text-primary">FAQ</a>
            <a href="#contact" className="text-sm hover:text-primary">お問い合わせ</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
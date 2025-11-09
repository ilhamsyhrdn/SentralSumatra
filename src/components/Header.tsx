import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenProfile: () => void;
}

export function Header({ currentPage, onNavigate, onOpenSearch, onOpenCart, onOpenProfile }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "HOME", value: "home", href: "/" },
    { label: "ABOUT", value: "about", href: "/about" },
    { label: "PRODUCT", value: "products", href: "/products" },
    { label: "CONTACT", value: "contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link 
              href="/"
              className="flex items-center gap-2 tracking-wider hover:text-gray-600 transition-colors mx-auto lg:mx-0"
            >
              <img 
                src="/gambarProduct/Logo.jpg" 
                alt="Diocca Logo" 
                className="h-10 w-10 object-contain rounded-full"
              />
              <span className="font-semibold">DIOCCA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.value}
                href={item.href}
                className={`hover:text-gray-600 transition-colors ${
                  router.pathname === item.href ? "border-b-2 border-black" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right icons removed per user request */}
          <div className="flex items-center space-x-2 lg:space-x-4"></div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.value}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2 hover:text-gray-600 transition-colors ${
                  router.pathname === item.href ? "border-l-2 border-black pl-2" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

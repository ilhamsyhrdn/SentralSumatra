import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchSheet } from "./components/SearchSheet";
import { CartSheet } from "./components/CartSheet";
import { ProfileSheet } from "./components/ProfileSheet";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

type Page = "home" | "product" | "about" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "product":
        return <ProductPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as Page)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />

      {/* Overlays */}
      <SearchSheet open={searchOpen} onOpenChange={setSearchOpen} />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      <ProfileSheet open={profileOpen} onOpenChange={setProfileOpen} />
    </div>
  );
}

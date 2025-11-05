import type { AppProps } from 'next/app';
import { useState } from 'react';
import { useRouter } from 'next/router';
import '@/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchSheet } from '@/components/SearchSheet';
import { CartSheet } from '@/components/CartSheet';
import { ProfileSheet } from '@/components/ProfileSheet';

type Page = "home" | "products" | "about" | "contact";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const getCurrentPage = (): Page => {
    const path = router.pathname;
    if (path === '/') return 'home';
    if (path === '/products') return 'products';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'products': '/products',
      'about': '/about',
      'contact': '/contact'
    };
    router.push(routes[page] || '/');
  };

  return (
    <div className="min-h-screen">
      <Header
        currentPage={getCurrentPage()}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <Footer />

      <SearchSheet open={searchOpen} onOpenChange={setSearchOpen} />
      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      <ProfileSheet open={profileOpen} onOpenChange={setProfileOpen} />
    </div>
  );
}

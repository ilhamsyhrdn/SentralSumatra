import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '@/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

type Page = "home" | "products" | "about" | "contact";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
        onOpenSearch={() => {}}
        onOpenCart={() => {}}
        onOpenProfile={() => {}}
      />
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}

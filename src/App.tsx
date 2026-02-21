import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [productId, setProductId] = useState<string>('');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const [page, id] = hash.split('/');
      setCurrentPage(page || 'home');
      if (id) setProductId(id);
    }
  }, []);

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    if (id) {
      setProductId(id);
      window.location.hash = `${page}/${id}`;
    } else {
      window.location.hash = page;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'product':
        return <ProductDetail productId={productId} onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'industries':
        return <Industries onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

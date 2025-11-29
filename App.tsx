import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Catering from './pages/Catering';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ClientDashboard from './pages/ClientDashboard';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import { AnimatePresence } from 'framer-motion';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar isAuthenticated={isAuthenticated} />
          <CartDrawer />
          <main className="flex-grow">
            <AnimatePresence mode='wait'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                <Route 
                  path="/client" 
                  element={isAuthenticated ? <ClientDashboard /> : <Login onLogin={() => setIsAuthenticated(true)} />} 
                />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", url: "#inicio" },
    { name: "Inscripciones", url: "https://epetn7.netlify.app/inscripciones" },
    { name: "Aula Virtual", url: "https://epetn7.netlify.app/aula-virtual" },
    { name: "ExpoEPET", url: "https://epetn7.netlify.app/expoepet" },
    { name: "Propuestas Académicas", url: "https://epetn7.netlify.app/propuestas" },
    { name: "Contáctanos", url: "#footer" },
  ];

  // Helper to perform smooth scrolling to a given hash
  const scrollToHash = (href) => {
    if (!href || !href.startsWith("#")) return;
    if (href === "#" || href === "#inicio" || href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href === "#footer") {
      const footerEl = document.querySelector("footer");
      if (footerEl) {
        footerEl.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
      return;
    }
    const id = href.slice(1);
    const target = document.getElementById(id) || document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Unified activator for navbar internal links (handles mouse/touch and keyboard)
  const activateNavInternal = (e, href, isMobile = false) => {
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    e.stopPropagation();
    if (isMobile) {
      const targetHref = href;
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        scrollToHash(targetHref);
      }, 350);
    } else {
      scrollToHash(href);
    }
  };

  // Intercept clicks on any internal hash links and scroll smoothly
  useEffect(() => {
    const handleAnchorHash = (e) => {
      const anchor = e.target.closest && e.target.closest("a");
      if (!anchor) return;
      // Ignore navbar links; they have their own onClick logic for single-tap behavior
      if (anchor.closest('nav')) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // This is an internal hash link; perform smooth scroll
      e.preventDefault();
      setIsMobileMenuOpen(false);

      if (href === "#" || href === "#inicio" || href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (href === "#footer") {
        const footerEl = document.querySelector("footer");
        if (footerEl) {
          footerEl.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
        return;
      }

      // Generic target by id
      const id = href.slice(1);
      const target = document.getElementById(id) || document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleAnchorHash);
    return () => {
      document.removeEventListener("click", handleAnchorHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg" 
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/epet7logo.png" alt="EPET N°7" className="w-10 h-10 object-cover rounded-lg shadow-lg" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">EPET N°7</h1>
                <p className="text-xs text-gray-600">Jardín América</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => activateNavInternal(e, link.url, false)}
                  onKeyDown={(e) => {
                    if (!link.url.startsWith('#')) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                      activateNavInternal(e, link.url, false);
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => activateNavInternal(e, link.url, true)}
                    onKeyDown={(e) => {
                      if (!link.url.startsWith('#')) {
                        if (e.key === 'Enter' || e.key === ' ') setIsMobileMenuOpen(false);
                        return;
                      }
                      if (e.key === 'Enter' || e.key === ' ') {
                        activateNavInternal(e, link.url, true);
                      }
                    }}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Sobre EPET N7 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/epet7logo.png" alt="EPET N°7" className="w-10 h-10 object-cover rounded-lg" />
                <h3 className="text-xl font-bold">EPET N°7</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Formando profesionales técnicos con excelencia académica y valores desde hace décadas.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.facebook.com/E.P.E.T.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/epet7oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:epetn7@gmail.com"
                  className="w-10 h-10 bg-white/10 hover:bg-gray-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-300 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/5vi1tqr2Qmx2A5Xt8" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm transition-colors">
                    Perú y Colombia<br />
                    Jardín América,<br /> 
                    Misiones, Argentina
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a 
                    href="tel:+54123456789"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    +54 123 456 789
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a 
                    href="mailto:epetn7@gmail.com"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    epetn7@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="text-lg font-bold mb-6">Horarios</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-blue-400 font-medium">Turno Mañana</p>
                  <p className="text-gray-300">07:00 - 11:50 hs</p>
                </div>
                <div>
                  <p className="text-blue-400 font-medium">Turno Tarde</p>
                  <p className="text-gray-300">13:30 - 18:20 hs</p>
                </div>
                <div>
                  <p className="text-blue-400 font-medium">Secretaría</p>
                  <p className="text-gray-300">Lunes a Viernes<br />08:00 - 17:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} EPET N°7. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

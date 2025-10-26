import React, { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
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
    { name: "Inicio", url: "https://epetn7.netlify.app" },
    { name: "Inscripciones", url: "https://epetn7.netlify.app/inscripciones" },
    { name: "Aula Virtual", url: "https://epetn7.netlify.app/aula-virtual" },
    { name: "ExpoEPET", url: "https://epetn7.netlify.app/expoepet" },
    { name: "Propuestas Académicas", url: "https://epetn7.netlify.app/propuestas" },
    { name: "Contáctanos", url: "https://epetn7.netlify.app/contacto" },
  ];

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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E7</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">EPET N°7</h1>
                <p className="text-xs text-gray-600">Educación Técnica</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E7</span>
                </div>
                <h3 className="text-xl font-bold">EPET N°7</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Formando profesionales técnicos con excelencia académica y valores desde hace décadas.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                  <span className="text-gray-300 text-sm">
                    Av. Principal 1234<br />
                    Ciudad, Provincia<br />
                    Argentina
                  </span>
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
                    href="mailto:info@epetn7.edu.ar"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    info@epetn7.edu.ar
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
                  <p className="text-gray-300">7:30 - 12:30 hs</p>
                </div>
                <div>
                  <p className="text-blue-400 font-medium">Turno Tarde</p>
                  <p className="text-gray-300">13:00 - 18:00 hs</p>
                </div>
                <div>
                  <p className="text-blue-400 font-medium">Secretaría</p>
                  <p className="text-gray-300">Lunes a Viernes<br />8:00 - 17:00 hs</p>
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

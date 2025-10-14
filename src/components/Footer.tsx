import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A0F0A] text-white/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
                src="/images/logo.png"
                alt="La Felicidá"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Cultivamos más que café: cultivamos experiencias únicas que despiertan 
              los sentidos y conectan con nuestra tierra.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/cafe" className="text-white/70 hover:text-white transition-colors">
                  Nuestro Café
                </Link>
              </li>
              <li>
                <Link to="/mochilas" className="text-white/70 hover:text-white transition-colors">
                  Mochilas
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-white/70 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-white/70 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block">Sierra Nevada de Santa Marta</span>
                <span className="block">Colombia</span>
              </li>
              <li>
                <a 
                  href="tel:+573001234567" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@lafelicida.com" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  info@lafelicida.com
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} La Felicidá. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
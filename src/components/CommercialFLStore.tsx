import React from 'react';
import { ExternalLink } from 'lucide-react';

const FL_STORE_URL = 'https://flstore-ec.vercel.app';

const CommercialFLStore: React.FC = () => {
  return (
    <section id="comercial-fl-store" className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <p className="text-primary-100 font-semibold uppercase tracking-wider mb-3">
                Sección Comercial
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FL Store · Venta de Productos
              </h2>
              <p className="text-lg text-primary-100 leading-relaxed mb-6">
                Catálogo comercial de FL Store para venta de celulares, parlantes JBL y licores premium.
                Incluye gestión de productos, imágenes, reseñas de clientes y experiencia web/móvil integrada.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-primary-50">
                <div className="bg-white/10 rounded-lg px-4 py-3">✅ Catálogo por categorías y destacados</div>
                <div className="bg-white/10 rounded-lg px-4 py-3">✅ Contacto comercial por WhatsApp</div>
                <div className="bg-white/10 rounded-lg px-4 py-3">✅ API REST para productos y reseñas</div>
                <div className="bg-white/10 rounded-lg px-4 py-3">✅ Plataforma responsive para ventas</div>
              </div>
            </div>

            <div className="lg:w-auto">
              <a
                href={FL_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <span>Ir a FL Store</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="mt-3 text-sm text-primary-100 text-center lg:text-left">
                Acceso directo al entorno público de FL Store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialFLStore;
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contacto
            </h2>
            <p className="text-xl text-primary-100">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:fernando.lara.moran@gmail.com"
                        className="text-primary-200 hover:text-white transition-colors"
                      >
                        fernando.lara.moran@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📱</div>
                    <div>
                      <h4 className="font-semibold mb-1">Teléfono</h4>
                      <a
                        href="tel:+593993385551"
                        className="text-primary-200 hover:text-white transition-colors"
                      >
                        +593 99 338 5551
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-semibold mb-1">Ubicación</h4>
                      <p className="text-primary-200">
                        Guayaquil, Ecuador
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Sígueme en redes</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: '🐙', url: 'https://github.com/MrFercho01' },
                    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/fernando-lara-moran-47844385' },
                    { name: 'Email', icon: '📧', url: 'mailto:fernando.lara.moran@gmail.com' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg flex items-center justify-center text-2xl transition-all transform hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 animate-slide-up delay-200"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-primary-200"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-primary-200"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-primary-200 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-white text-primary-900 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white border-opacity-20">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/diseno-logo.png"
              alt="Fernando Lara"
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-contain bg-white"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-white">Fernando Lara</h3>
              <p className="text-sm text-orange-300 italic">
                Tu aliado creativo para la automatización inteligente
              </p>
            </div>
          </div>
          <p className="text-center text-primary-200">
            © {new Date().getFullYear()} Fernando Lara. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

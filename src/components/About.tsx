import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-600">
              Desarrollador apasionado por la tecnología y la innovación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-500/20">
                <img 
                  src="/foto-perfil.png" 
                  alt="Fernando Lara - Desarrollador Full Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-slide-up delay-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Licenciado en Sistemas de Información</strong> con más de 7 años de experiencia 
                en la industria. Especializado en desarrollo web desde 2013, desarrollo full stack desde 2018, 
                y desarrollo mobile desde 2024. Experto en crear soluciones innovadoras con 
                React Native, Next.js, TypeScript, Java y Power Platform.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con amplia experiencia en el sector bancario y empresarial, he desarrollado 
                proyectos de analítica avanzada, integraciones complejas, automatizaciones 
                con Power Platform y soluciones ERP con Microsoft Dynamics. Experiencia en 
                administración de Salesforce y aplicación de Inteligencia Artificial en 
                proyectos empresariales. Mi enfoque está en código de alta calidad, 
                arquitecturas escalables y mejores prácticas.
              </p>

              {/* Certificaciones */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Certificaciones
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">🎓</span>
                    <div>
                      <p className="font-semibold text-gray-800">Prevención de Lavado de Activos</p>
                      <p className="text-sm text-gray-600">ARASCO</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">🎓</span>
                    <div>
                      <p className="font-semibold text-gray-800">Habilidades Gerenciales</p>
                      <p className="text-sm text-gray-600">LONDON CONSULTING GROUP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Idiomas */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Idiomas
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600">🌎</span>
                      <span className="font-semibold text-gray-800">Español</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">Nativo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600">🌎</span>
                      <span className="font-semibold text-gray-800">Inglés</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-full">A2 - Básico</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Habilidades Técnicas
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Desarrollo Web (2013-Presente)', level: 95 },
                    { name: 'Desarrollo Full Stack (2018-Presente)', level: 92 },
                    { name: 'TypeScript & JavaScript', level: 90 },
                    { name: 'Inteligencia Artificial & ML', level: 87 },
                    { name: 'Salesforce Administration', level: 85 },
                    { name: 'Desarrollo Mobile (2024-Presente)', level: 85 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

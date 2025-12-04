import React from 'react';
import { Award, Code, Users, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      category: "Desarrollo de Software",
      title: "Arquitectura de Sistemas Escalables",
      description: "Diseño e implementación de arquitecturas de microservicios y sistemas distribuidos que manejan miles de transacciones diarias.",
      highlights: [
        "Reducción del 40% en tiempos de respuesta",
        "Escalabilidad automática para picos de tráfico",
        "Alta disponibilidad 99.9%"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      category: "Desarrollo Mobile",
      title: "Aplicaciones de Alto Impacto",
      description: "Desarrollo de aplicaciones móviles multiplataforma con React Native, enfocadas en experiencia de usuario y rendimiento óptimo.",
      highlights: [
        "15+ aplicaciones empresariales",
        "Integración con APIs REST y GraphQL",
        "Diseño responsive y accesible"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      category: "Automatización",
      title: "Optimización de Procesos",
      description: "Implementación de soluciones de automatización que mejoran la eficiencia operativa y reducen errores humanos.",
      highlights: [
        "Automatización de workflows complejos",
        "Integración de sistemas legacy",
        "Reducción de costos operativos"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      category: "Liderazgo Técnico",
      title: "Gestión de Proyectos",
      description: "Coordinación de equipos de desarrollo y entrega exitosa de proyectos complejos en tiempo y forma.",
      highlights: [
        "Metodologías ágiles (Scrum/Kanban)",
        "Mentoría de desarrolladores junior",
        "Entrega continua (CI/CD)"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      category: "Innovación Tecnológica",
      title: "Adopción de Nuevas Tecnologías",
      description: "Investigación e implementación de tecnologías emergentes para mantener ventaja competitiva.",
      highlights: [
        "TypeScript, Next.js, Node.js",
        "Cloud Computing (AWS, Azure)",
        "DevOps y contenedores (Docker)"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      category: "Calidad de Código",
      title: "Mejores Prácticas",
      description: "Implementación de estándares de código y testing que garantizan calidad y mantenibilidad del software.",
      highlights: [
        "Testing automatizado (Jest, Testing Library)",
        "Code reviews y pair programming",
        "Documentación técnica detallada"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Logros Profesionales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados comprobados en desarrollo de software, liderazgo técnico y transformación digital
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Proyectos Completados</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600">Tecnologías Dominadas</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Compromiso con Calidad</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${achievement.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  {achievement.icon}
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {achievement.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Accent */}
              <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-lg mb-6 text-primary-50">
              Estos logros son solo el comienzo. Transformemos tus ideas en realidad.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

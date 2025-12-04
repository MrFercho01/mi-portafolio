import React from 'react';
import { Building2, Briefcase, CheckCircle, Code2, Database, Settings } from 'lucide-react';

const ERP: React.FC = () => {
  const erpExpertise = [
    {
      version: "Microsoft Dynamics 365",
      icon: <Code2 className="w-8 h-8" />,
      period: "2023 - Presente",
      color: "from-blue-600 to-blue-700",
      features: [
        "Business Central",
        "Finance & Operations",
        "Customer Engagement",
        "Power Platform Integration"
      ]
    },
    {
      version: "Microsoft Dynamics 2012",
      icon: <Database className="w-8 h-8" />,
      period: "2015 - Presente",
      color: "from-indigo-600 to-indigo-700",
      features: [
        "AX 2012 R3",
        "CRM 2012",
        "Customización X++",
        "Reportes SSRS"
      ]
    },
    {
      version: "Microsoft Dynamics 2009",
      icon: <Settings className="w-8 h-8" />,
      period: "2015 - Presente",
      color: "from-purple-600 to-purple-700",
      features: [
        "Dynamics AX 2009",
        "NAV 2009",
        "Implementación ERP",
        "Integración de módulos"
      ]
    }
  ];

  const companies = [
    {
      name: "Banco Bolivariano",
      period: "2021 - 2022, 2023 - Oct 2025",
      role: "Desarrollador Full Stack & Consultor Funcional",
      logo: <Building2 className="w-12 h-12" />,
      color: "bg-green-600",
      projects: [
        {
          name: "Canal 24Online - Aplicación Web Bancaria",
          description: "Desarrollo de plataforma web con Java Spring Boot",
          achievements: [
            "Aplicación web 24Online con Java Spring Boot",
            "Implementación de arquitectura de microservicios",
            "Módulos de seguridad y autenticación bancaria",
            "Integración con servicios core del banco"
          ]
        },
        {
          name: "Omnicanalidad y Automatizaciones",
          description: "Soluciones de integración multicanal con Power Platform",
          achievements: [
            "Desarrollo de soluciones de omnicanalidad",
            "Automatización de procesos con Power Platform",
            "Integración de canales digitales y físicos",
            "Flujos automatizados con Power Automate"
          ]
        }
      ]
    },
    {
      name: "FACTECH - DQS Consulting",
      period: "2023",
      role: "Consultor Funcional ERP & Desarrollador Dynamics AX/365",
      logo: <Building2 className="w-12 h-12" />,
      color: "bg-blue-600",
      projects: [
        {
          name: "Proyectos Internacionales Dynamics AX/365",
          description: "Consultoría ERP como recurso para clientes europeos de DQS Consulting",
          achievements: [
            "Proyectos en España, Países Bajos, Finlandia y Hungría",
            "Implementación y customización Dynamics AX 2012/365",
            "Desarrollo en X++ para módulos especializados",
            "Soporte técnico y funcional multiregional"
          ]
        },
        {
          name: "Soluciones ERP Empresariales",
          description: "Desarrollo de soluciones personalizadas para retail y manufactura",
          achievements: [
            "Migración de Dynamics AX a Dynamics 365 F&O",
            "Integración con sistemas POS y WMS",
            "Reportes personalizados SSRS",
            "Capacitación a usuarios internacionales"
          ]
        }
      ]
    },
    {
      name: "Banco Pacífico",
      period: "2013 - 2015, 2019 - 2021",
      role: "Desarrollador Full Stack",
      logo: <Building2 className="w-12 h-12" />,
      color: "bg-teal-600",
      projects: [
        {
          name: "Proyecto de Analítica Avanzada - Presidencia",
          description: "Desarrollo de solución de Business Intelligence",
          achievements: [
            "Dashboards ejecutivos con Power BI",
            "ETLs con Oracle y SQL Server",
            "Data warehousing y modelado dimensional",
            "Integración de múltiples fuentes de datos"
          ]
        },
        {
          name: "Desarrollos con Java y Visual .NET",
          description: "Aplicaciones bancarias y automatizaciones",
          achievements: [
            "Aplicaciones web con Java y Visual .NET",
            "Servicios REST para integraciones bancarias",
            "Automatizaciones con Power Platform",
            "Integración con core bancario"
          ]
        }
      ]
    },
    {
      name: "Grupo Empresarial de Retail",
      period: "2017 - 2020",
      role: "Consultor Funcional ERP & Desarrollador Dynamics AX/365",
      logo: <Building2 className="w-12 h-12" />,
      color: "bg-indigo-600",
      projects: [
        {
          name: "Customización Dynamics AX 2012 R3",
          description: "Desarrollo de módulos personalizados para retail",
          achievements: [
            "Desarrollo en X++ de módulo de loyalty program",
            "Integración con POS (Point of Sale)",
            "Sincronización multi-tienda en tiempo real",
            "Reportes personalizados SSRS"
          ]
        },
        {
          name: "Migración a Dynamics 365 F&O",
          description: "Upgrade de AX 2012 a Dynamics 365 Finance & Operations",
          achievements: [
            "Análisis de fit-gap y documentación",
            "Migración de customizaciones X++",
            "Testing y validación de procesos",
            "Capacitación a usuarios finales"
          ]
        }
      ]
    },
    {
      name: "Compañía de Manufactura",
      period: "2015 - 2017",
      role: "Consultor Funcional ERP & Desarrollador",
      logo: <Building2 className="w-12 h-12" />,
      color: "bg-purple-600",
      projects: [
        {
          name: "Implementación Dynamics AX 2012",
          description: "Implementación completa de módulos de manufactura",
          achievements: [
            "Configuración de módulos: Producción, Calidad, Almacén",
            "Setup de BOM y rutas de producción",
            "Implementación de WMS (Warehouse Management)",
            "Integración con sistemas MES"
          ]
        },
        {
          name: "Optimización de Procesos",
          description: "Mejora continua y automatización de workflows",
          achievements: [
            "Reducción del 30% en tiempo de setup",
            "Automatización de órdenes de producción",
            "Implementación de kanban digital",
            "KPIs en tiempo real"
          ]
        }
      ]
    },
    {
      name: "MAINT - Servicios Tecnológicos",
      period: "2013 - 2015",
      role: "Desarrollador & Consultor ERP",
      logo: <Building2 className="w-12 h-12" />,
      color: "bg-slate-600",
      projects: [
        {
          name: "Desarrollo Java y Arquitectura SOA",
          description: "Desarrollo con Java y Arquitectura Orientada a Servicios",
          achievements: [
            "Desarrollo de aplicaciones con Java",
            "Implementación de Arquitectura Orientada a Servicios (SOA)",
            "Integración de sistemas empresariales",
            "Servicios web SOAP y REST"
          ]
        },
        {
          name: "Proyectos Dynamics AX - Múltiples Clientes",
          description: "Implementación y customización de Dynamics AX para diversos clientes",
          achievements: [
            "Terminal Terrestre - Implementación Dynamics AX",
            "Ferremundo - Customización y soporte ERP",
            "Banco del Pacífico - Desarrollos y integraciones",
            "Desarrollo en X++ y configuración funcional"
          ]
        }
      ]
    }
  ];

  const technicalSkills = [
    { skill: "X++ Development", level: 95 },
    { skill: "Dynamics 365 Configuration", level: 75 },
    { skill: "Power Platform", level: 88 },
    { skill: "SQL Server / SSRS", level: 90 },
    { skill: "Azure DevOps", level: 85 },
    { skill: "Integration Services", level: 87 }
  ];

  return (
    <section id="erp" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <Briefcase className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiencia en ERP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialista en Microsoft Dynamics con más de 10 años implementando soluciones empresariales
          </p>
        </div>

        {/* ERP Versions Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {erpExpertise.map((erp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${erp.color} p-6 text-white`}>
                <div className="flex items-center justify-center mb-3">
                  {erp.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{erp.version}</h3>
                <p className="text-center text-sm opacity-90">{erp.period}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {erp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Habilidades Técnicas ERP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{item.skill}</span>
                  <span className="text-blue-600 font-bold">{item.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Companies and Projects */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Empresas y Proyectos Destacados
          </h3>
          
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Company Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`${company.color} p-3 rounded-xl`}>
                    {company.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold">{company.name}</h4>
                    <p className="text-gray-300">{company.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
                      {company.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="p-6">
                <div className="space-y-6">
                  {company.projects.map((project, pIdx) => (
                    <div
                      key={pIdx}
                      className="border-l-4 border-blue-500 pl-6 py-2 hover:bg-gray-50 transition-colors rounded-r-lg"
                    >
                      <h5 className="text-xl font-bold text-gray-900 mb-2">
                        {project.name}
                      </h5>
                      <p className="text-gray-600 mb-4 italic">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.achievements.map((achievement, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Más de 10 Años de Experiencia ERP
            </h3>
            <p className="text-lg mb-6 text-blue-50 max-w-3xl mx-auto">
              Especializado en implementación, customización y soporte de Microsoft Dynamics. 
              Experiencia comprobada en proyectos end-to-end desde análisis hasta go-live.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm text-blue-100">Implementaciones</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-blue-100">Customizaciones</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-blue-100">Reportes SSRS</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm text-blue-100">Años ERP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERP;

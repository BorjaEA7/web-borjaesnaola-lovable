
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    id: 1,
    emoji: "🏠",
    title: "Arquitectura Residencial",
    description: "Diseño de viviendas únicas que reflejan el estilo de vida y personalidad de cada familia.",
    features: ["Diseño personalizado", "Planificación espacial", "Supervisión de obra", "Asesoría técnica"],
    detailedDescription: "Nuestro servicio de arquitectura residencial abarca desde la conceptualización inicial hasta la entrega final de tu hogar. Trabajamos contigo para entender tu forma de vivir, tus necesidades específicas y tus sueños, transformándolos en un diseño arquitectónico que los refleje perfectamente. Cada proyecto residencial es único y está pensado para evolucionar contigo a lo largo del tiempo.",
    process: [
      "Consulta inicial y análisis de necesidades",
      "Desarrollo conceptual y primeros bocetos",
      "Proyecto básico y de ejecución",
      "Gestión de licencias y permisos",
      "Supervisión de obra completa"
    ]
  },
  {
    id: 2,
    emoji: "🏢",
    title: "Interiorismo Comercial",
    description: "Espacios comerciales que maximizan la experiencia del cliente y la funcionalidad del negocio.",
    features: ["Diseño de retail", "Espacios gastronómicos", "Oficinas corporativas", "Showrooms"],
    detailedDescription: "Creamos espacios comerciales que no solo son visualmente impactantes, sino que también optimizan la experiencia del cliente y la eficiencia operativa. Entendemos que cada negocio tiene necesidades específicas y objetivos únicos, por lo que desarrollamos soluciones de interiorismo que potencian tu marca y favorecen el crecimiento de tu empresa.",
    process: [
      "Análisis del negocio y objetivos comerciales",
      "Desarrollo de la identidad espacial",
      "Diseño funcional y distribución optimizada",
      "Selección de materiales y mobiliario",
      "Implementación y puesta en marcha"
    ]
  },
  {
    id: 3,
    emoji: "✨",
    title: "Diseño de Interiores",
    description: "Transformación completa de espacios interiores con enfoque en confort y estética.",
    features: ["Selección de mobiliario", "Iluminación decorativa", "Textiles y accesorios", "Color y textura"],
    detailedDescription: "Transformamos tus espacios interiores en ambientes que inspiran y proporcionan bienestar. Nuestro enfoque integral abarca desde la planificación del layout hasta la selección de cada elemento decorativo. Creamos atmósferas únicas que reflejan tu personalidad y estilo de vida, utilizando color, textura, iluminación y mobiliario de manera armoniosa.",
    process: [
      "Análisis del espacio y estilo personal",
      "Desarrollo de paleta cromática y materiales",
      "Diseño de iluminación y ambientación",
      "Selección y adquisición de mobiliario",
      "Styling final y decoración"
    ]
  },
  {
    id: 4,
    emoji: "🎯",
    title: "Consultoría Especializada",
    description: "Asesoría experta en proyectos de arquitectura e interiorismo para optimizar resultados.",
    features: ["Análisis de viabilidad", "Optimización de costos", "Gestión de proyecto", "Control de calidad"],
    detailedDescription: "Ofrecemos consultoría especializada para proyectos en cualquier fase de desarrollo. Ya sea que necesites una segunda opinión técnica, optimización de recursos, o gestión profesional de tu proyecto, nuestro equipo te proporciona la experiencia y conocimiento necesarios para garantizar el éxito de tu inversión.",
    process: [
      "Evaluación técnica del proyecto",
      "Análisis de viabilidad y presupuesto",
      "Desarrollo de estrategia de ejecución",
      "Supervisión y control de calidad",
      "Entrega y seguimiento post-proyecto"
    ]
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const selectedServiceData = selectedService ? services.find(s => s.id === selectedService) : null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="zaguan-section bg-zaguan-50"
    >
      <div className="zaguan-container">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="zaguan-heading text-zaguan-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="zaguan-subheading max-w-3xl mx-auto">
            Ofrecemos servicios integrales de arquitectura e interiorismo,
            desde la conceptualización hasta la ejecución completa de cada proyecto.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`zaguan-card group animate-fade-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </div>
                <h3 className="text-2xl font-zaguan-serif font-medium text-zaguan-900 mb-4 group-hover:text-zaguan-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-zaguan-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-zaguan-700"
                    >
                      <div className="w-2 h-2 bg-zaguan-900 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedService(service.id)}
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-zaguan-300 text-zaguan-700 text-sm font-medium rounded-full hover:bg-zaguan-900 hover:text-white hover:border-zaguan-900 transition-all duration-300"
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-800 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-zaguan-200 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-zaguan-serif font-medium text-zaguan-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-zaguan-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Nos encantaría conocer tu visión y ayudarte a transformarla en realidad.
              Contactanos para una consulta personalizada sin compromiso.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contacto");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="zaguan-button"
            >
              Contactar Ahora
            </button>
          </div>
        </div>

        {/* Service Detail Modal */}
        {selectedService && selectedServiceData && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">
                      {selectedServiceData.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-zaguan-serif font-medium text-zaguan-900">
                        {selectedServiceData.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-zaguan-400 hover:text-zaguan-900 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">
                        Descripción Detallada
                      </h4>
                      <p className="text-zaguan-600 leading-relaxed">
                        {selectedServiceData.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">
                        Proceso de Trabajo
                      </h4>
                      <ul className="space-y-3">
                        {selectedServiceData.process.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-zaguan-900 text-white text-xs font-medium rounded-full flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-zaguan-600">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">
                        Servicios Incluidos
                      </h4>
                      <ul className="space-y-2">
                        {selectedServiceData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-zaguan-900 rounded-full flex-shrink-0"></div>
                            <span className="text-zaguan-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-zaguan-50 p-4 rounded-lg">
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-2">
                        ¿Interesado?
                      </h4>
                      <p className="text-zaguan-600 text-sm mb-4">
                        Contactanos para una consulta personalizada sin compromiso.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          const element = document.getElementById("contacto");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full zaguan-button text-center"
                      >
                        Contactar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

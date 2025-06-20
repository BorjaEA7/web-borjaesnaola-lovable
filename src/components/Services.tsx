
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Arquitectura Residencial",
    description: "Diseño de viviendas únicas que reflejan el estilo de vida y personalidad de cada familia.",
    features: ["Diseño personalizado", "Planificación espacial", "Supervisión de obra", "Asesoría técnica"],
  },
  {
    title: "Interiorismo Comercial",
    description: "Espacios comerciales que maximizan la experiencia del cliente y la funcionalidad del negocio.",
    features: ["Diseño de retail", "Espacios gastronómicos", "Oficinas corporativas", "Showrooms"],
  },
  {
    title: "Diseño de Interiores",
    description: "Transformación completa de espacios interiores con enfoque en confort y estética.",
    features: ["Selección de mobiliario", "Iluminación decorativa", "Textiles y accesorios", "Color y textura"],
  },
  {
    title: "Consultoría Especializada",
    description: "Asesoría experta en proyectos de arquitectura e interiorismo para optimizar resultados.",
    features: ["Análisis de viabilidad", "Optimización de costos", "Gestión de proyecto", "Control de calidad"],
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
                <h3 className="text-2xl font-zaguan-serif font-medium text-zaguan-900 mb-4 group-hover:text-zaguan-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-zaguan-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
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
      </div>
    </section>
  );
};

export default Services;

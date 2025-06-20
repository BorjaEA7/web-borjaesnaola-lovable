
import { useEffect, useRef, useState } from "react";

const approaches = [
  {
    title: "Funcionalidad",
    description: "Cada espacio debe cumplir perfectamente su propósito, optimizando flujos y necesidades reales.",
    icon: "🎯"
  },
  {
    title: "Estética",
    description: "La belleza no es opcional. Creamos espacios que inspiran y emocionan a quienes los habitan.",
    icon: "✨"
  },
  {
    title: "Sostenibilidad",
    description: "Diseño responsable con el medio ambiente, utilizando materiales nobles y sistemas eficientes.",
    icon: "🌿"
  },
  {
    title: "Personalización",
    description: "Cada proyecto refleja la personalidad única de nuestros clientes y su forma de vivir.",
    icon: "🎨"
  },
  {
    title: "Innovación",
    description: "Incorporamos las últimas tendencias y tecnologías para crear espacios del futuro.",
    icon: "🚀"
  }
];

const Approach = () => {
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
            Nuestro Enfoque
          </h2>
          <p className="zaguan-subheading max-w-3xl mx-auto">
            Cinco pilares fundamentales que guían cada uno de nuestros proyectos,
            desde la conceptualización hasta la realización final.
          </p>
        </div>

        {/* Approach Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`text-center group animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {approach.icon}
              </div>
              <h3 className="text-xl font-zaguan-serif font-medium text-zaguan-900 mb-3 group-hover:text-zaguan-700 transition-colors duration-200">
                {approach.title}
              </h3>
              <p className="text-zaguan-600 leading-relaxed text-sm">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

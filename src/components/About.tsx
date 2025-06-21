
import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";

// Logo data with placeholder PNG URLs
const logos = [
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo1",
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo2", 
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo3",
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo4",
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo5",
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo6",
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo7",
  "https://via.placeholder.com/120x60/f5f5f5/737373?text=Logo8",
];

// Hook para animar números
const useCountUp = (end: number, duration: number = 2000, startAnimation: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startAnimation) return;
    
    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);
  
  return count;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const fullQuote = "El espacio debe ser el sirviente de la vida, no su tirano. Cada proyecto es una oportunidad de crear no solo un lugar, sino una experiencia que trascienda lo puramente funcional.";

  // Animated counters
  const projectsCount = useCountUp(150, 2000, statsVisible);
  const yearsCount = useCountUp(15, 2000, statsVisible);
  const satisfactionCount = useCountUp(98, 2000, statsVisible);

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

  useEffect(() => {
    const quoteObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (quoteRef.current) {
      quoteObserver.observe(quoteRef.current);
    }

    return () => quoteObserver.disconnect();
  }, []);

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (quoteVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullQuote.length) {
          setTypewriterText(fullQuote.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [quoteVisible, fullQuote]);

  // Scroll effect for logos
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="zaguan-section bg-white"
    >
      <div className="zaguan-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div
            className={`lg:col-span-1 transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Borja Esnaola"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl lg:text-3xl font-zaguan-serif font-medium mb-2">
                  Borja Esnaola
                </h3>
                <p className="text-lg opacity-90">
                  Arquitecto & Director Creativo
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-2 transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="zaguan-heading text-zaguan-900 mb-6">
              Nosotros
            </h2>
            <div className="space-y-6">
              <p className="zaguan-subheading">
                Somos un estudio de arquitectura e interiorismo con más de 15
                años de experiencia creando espacios únicos y funcionales que
                reflejan la personalidad de nuestros clientes.
              </p>
              <p className="text-zaguan-600 leading-relaxed">
                Nuestro enfoque se basa en la comprensión profunda de las
                necesidades de cada proyecto, combinando funcionalidad,
                estética y sostenibilidad para crear espacios que trascienden
                las tendencias y perduran en el tiempo.
              </p>
              <p className="text-zaguan-600 leading-relaxed">
                Cada proyecto es una oportunidad para explorar nuevas
                posibilidades y desafiar los límites del diseño
                convencional, siempre manteniendo un equilibrio perfecto entre
                innovación y practicidad.
              </p>
            </div>

            {/* LinkedIn Button */}
            <div className="mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-zaguan-900 text-white rounded-lg hover:bg-zaguan-800 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span className="font-medium">Quiero saber más sobre ti</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats - Full width */}
        <div
          ref={statsRef}
          className={`grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-zaguan-200 transition-all duration-800 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { key: "projects", number: projectsCount, suffix: "+", label: "Proyectos" },
            { key: "years", number: yearsCount, suffix: "+", label: "Años" },
            { key: "satisfaction", number: satisfactionCount, suffix: "%", label: "Satisfacción" },
          ].map((stat, index) => (
            <div key={stat.key} className="text-center">
              <div className="text-3xl lg:text-4xl font-zaguan-serif font-medium text-zaguan-900 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-zaguan-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Quote with Typewriter Effect */}
        <div
          ref={quoteRef}
          className={`mt-20 text-center transition-all duration-1000 ${
            quoteVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-zaguan-serif font-medium text-zaguan-800 italic leading-relaxed mb-6 min-h-[120px] flex items-center justify-center">
              "{typewriterText}"
              {quoteVisible && typewriterText.length < fullQuote.length && (
                <span className="animate-pulse">|</span>
              )}
            </blockquote>
            <cite className="text-zaguan-600 font-medium not-italic">
              — Filosofía Zaguan Estudio
            </cite>
          </div>
        </div>

        {/* Scrolling Logos Section - Two rows moving in opposite directions */}
        <div className="mt-20 overflow-hidden">
          {/* First row - moves right when scrolling down */}
          <div 
            className="flex gap-8 mb-8 whitespace-nowrap"
            style={{
              transform: `translateX(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`top-${index}`} 
                className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-zaguan-200 p-4 hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second row - moves left when scrolling down */}
          <div 
            className="flex gap-8 whitespace-nowrap"
            style={{
              transform: `translateX(${-scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`bottom-${index}`} 
                className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-zaguan-200 p-4 hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

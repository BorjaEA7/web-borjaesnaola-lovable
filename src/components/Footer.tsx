
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zaguan-900 text-white py-12 lg:py-16">
      <div className="zaguan-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl lg:text-3xl font-zaguan-serif font-medium mb-4 hover:text-zaguan-200 transition-colors duration-200"
            >
              Zaguan Estudio
            </button>
            <p className="text-zaguan-300 leading-relaxed mb-6 max-w-md">
              Transformamos espacios en experiencias únicas a través del diseño
              arquitectónico e interiorismo, creando ambientes que reflejan la
              personalidad y necesidades de cada cliente.
            </p>
            <div className="flex space-x-6">
              {[
                { name: "Instagram", href: "#" },
                { name: "Facebook", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "Pinterest", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zaguan-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-4">Navegación</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Nosotros", id: "nosotros" },
                { label: "Proyectos", id: "proyectos" },
                { label: "Servicios", id: "servicios" },
                { label: "Contacto", id: "contacto" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-zaguan-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-zaguan-300">
              <p>
                Av. Arquitectura 123<br />
                Colonia Diseño<br />
                Ciudad de México, CDMX 12345
              </p>
              <p>
                <a
                  href="tel:+525512345678"
                  className="hover:text-white transition-colors duration-200"
                >
                  +52 (55)·1234-5678
                </a>
              </p>
              <p>
                <a
                  href="mailto:hola@zaguanestudio.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  hola@zaguanestudio.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zaguan-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-zaguan-400 text-sm mb-4 lg:mb-0">
            © {currentYear} Zaguan Estudio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-zaguan-400 hover:text-white transition-colors duration-200"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-zaguan-400 hover:text-white transition-colors duration-200"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

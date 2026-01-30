import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const servicesDropdown = [
  { name: "Website Development", path: "/services" },
  { name: "Mobile App Development", path: "/services" },
  { name: "Software Development", path: "/services" },
  { name: "UI/UX Design", path: "/services" },
  { name: "Maintenance & Support", path: "/services" },
  { name: "SEO & Digital Marketing", path: "/services" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-gray-800 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Lumyx Group" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-[15px] font-medium transition-colors relative py-2 flex items-center gap-1 ${
                      isActive(link.path)
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    {isActive(link.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A9FF5]" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-[#1A1A1A] border border-gray-700 shadow-lg transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {servicesDropdown.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#4A9FF5] hover:text-white transition-colors border-b border-gray-800 last:border-b-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors relative py-2 ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A9FF5]" />
                  )}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="bg-[#4A9FF5] hover:bg-[#3A8FE5] text-white px-6 h-11 group">
                Get Started
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-gray-800">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`w-full flex items-center justify-between py-3 text-base font-medium ${
                      isActive(link.path)
                        ? "text-[#4A9FF5]"
                        : "text-gray-300"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {servicesDropdown.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-gray-400 hover:text-[#4A9FF5] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-base font-medium ${
                    isActive(link.path)
                      ? "text-[#4A9FF5]"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#4A9FF5] hover:bg-[#3A8FE5] text-white h-12 mt-4">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
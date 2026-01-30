import { Link } from "react-router";
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Lumyx Group</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A global technology services partner delivering enterprise-grade solutions that drive business transformation and measurable outcomes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/lumyx-group/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A9FF5] hover:bg-[#3A8FE5] transition-colors flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A9FF5] hover:bg-[#3A8FE5] transition-colors flex items-center justify-center"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587022867521"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A9FF5] hover:bg-[#3A8FE5] transition-colors flex items-center justify-center"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/lumyxgroupofficial/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4A9FF5] hover:bg-[#3A8FE5] transition-colors flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/website-development" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-solutions" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/amc" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#4A9FF5] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#4A9FF5] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:lumyxgroupofficial@gmail.com"
                  className="text-gray-400 hover:text-[#4A9FF5] transition-colors"
                >
                  lumyxgroupofficial@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#4A9FF5] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lumyx Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-[#4A9FF5] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#4A9FF5] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#4A9FF5] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
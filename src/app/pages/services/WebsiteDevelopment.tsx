import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const websiteProjects = [
  {
    id: 1,
    title: "E-Commerce Platform for Fashion Retailer",
    client: "StyleHub Fashion",
    description: "Built a comprehensive e-commerce solution with advanced product filtering, secure payment integration, and real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    deliveryDate: "December 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Responsive Design", "Payment Gateway", "Admin Dashboard", "SEO Optimized"],
  },
  {
    id: 2,
    title: "Corporate Website for Financial Services",
    client: "SecureBank Ltd",
    description: "Developed a professional corporate website with interactive features, client portal, and integration with banking systems.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    deliveryDate: "November 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Client Portal", "Multi-language Support", "High Security", "Analytics Dashboard"],
  },
  {
    id: 3,
    title: "Healthcare Portal for Clinic Network",
    client: "HealthCare Plus",
    description: "Created a patient management system with appointment booking, medical records, and telemedicine capabilities.",
    technologies: ["Vue.js", "Python Django", "MySQL", "WebRTC"],
    deliveryDate: "October 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Appointment Booking", "Video Consultations", "Medical Records", "HIPAA Compliant"],
  },
  {
    id: 4,
    title: "Educational Learning Platform",
    client: "EduTech Academy",
    description: "Designed and developed an interactive learning management system with course management, video streaming, and student tracking.",
    technologies: ["React", "Firebase", "Node.js", "Cloudflare"],
    deliveryDate: "September 2025",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Video Streaming", "Progress Tracking", "Certificate Generation", "Discussion Forums"],
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    client: "PropFinder Solutions",
    description: "Built a property listing website with advanced search filters, virtual tours, and agent management system.",
    technologies: ["Angular", "Node.js", "MongoDB", "Google Maps API"],
    deliveryDate: "August 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Property Listings", "Virtual Tours", "Map Integration", "Lead Management"],
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    client: "Foodie Delight Chain",
    description: "Developed an online ordering platform with menu management, delivery tracking, and loyalty program integration.",
    technologies: ["React Native Web", "Express.js", "PostgreSQL", "Stripe"],
    deliveryDate: "July 2025",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Online Ordering", "Delivery Tracking", "Loyalty Program", "Kitchen Display System"],
  },
];

export function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Website Development"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-32 lg:py-48">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Website Development Projects
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our portfolio of successful website development projects that have transformed digital experiences for businesses across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Delivered Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Comprehensive web solutions built with cutting-edge technologies and best practices.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {websiteProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="mb-4">
                    <span className="text-sm text-[#4A9FF5] font-semibold">
                      {project.client}
                    </span>
                    <span className="text-gray-500 mx-2">•</span>
                    <span className="text-sm text-gray-400">
                      {project.deliveryDate}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-white mb-3">KEY FEATURES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm border border-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white mb-3">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#4A9FF5]/10 text-[#4A9FF5] text-sm border border-[#4A9FF5]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A9FF5] text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to build your website?
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Let's create a powerful web presence that drives results for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white h-14 px-8 text-base group">
                Start Your Project
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

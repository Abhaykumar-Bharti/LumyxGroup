import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const softwareProjects = [
  {
    id: 1,
    title: "Enterprise Resource Planning (ERP) System",
    client: "ManufacturePro Industries",
    description: "Developed a comprehensive ERP solution integrating inventory management, accounting, HR, and production planning modules.",
    technologies: ["Java Spring Boot", "Angular", "Oracle DB", "Docker"],
    deliveryDate: "December 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Inventory Management", "Accounting Module", "HR Management", "Production Planning"],
  },
  {
    id: 2,
    title: "Customer Relationship Management (CRM) Platform",
    client: "SalesForce Solutions",
    description: "Built a powerful CRM system with sales pipeline management, customer analytics, and marketing automation capabilities.",
    technologies: ["Python Django", "React", "PostgreSQL", "Redis"],
    deliveryDate: "November 2025",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Sales Pipeline", "Contact Management", "Email Automation", "Analytics Dashboard"],
  },

  {
    id: 4,
    title: "Supply Chain Management Software",
    client: "LogiChain Global",
    description: "Designed a comprehensive supply chain solution with warehouse management, shipment tracking, and vendor coordination.",
    technologies: ["Node.js", "React", "MongoDB", "Kubernetes"],
    deliveryDate: "September 2025",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Warehouse Management", "Shipment Tracking", "Vendor Portal", "Route Optimization"],
  },
  {
    id: 5,
    title: "School Management Information System",
    client: "EduManage Schools",
    description: "Built a complete school management platform with student enrollment, attendance tracking, grading, and parent portal features.",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
    deliveryDate: "August 2025",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Student Enrollment", "Attendance Tracking", "Grade Management", "Parent Portal"],
  },
];

export function SoftwareSolutions() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Software Solutions"
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
              Software Solutions Projects
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Custom enterprise software solutions that streamline operations and drive digital transformation.
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
              Enterprise-grade software solutions tailored to unique business requirements and challenges.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {softwareProjects.map((project, index) => (
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
              Need custom software solutions?
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Let's build enterprise software that transforms your business operations.
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

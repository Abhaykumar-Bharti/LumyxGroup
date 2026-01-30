import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

const services = [
  {
    title: "Strategy & Consulting",
    description: "Navigate digital transformation with expert guidance tailored to your business objectives.",
    capabilities: [
      "Digital strategy development",
      "Technology roadmap planning",
      "Business process optimization",
      "Change management",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    title: "Cloud Services",
    description: "Modernize your infrastructure with scalable, secure cloud solutions that drive agility and innovation.",
    capabilities: [
      "Cloud migration and implementation",
      "Multi-cloud and hybrid solutions",
      "Cloud-native application development",
      "DevOps and automation",
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    title: "Application Services",
    description: "Build, modernize, and manage applications that deliver exceptional experiences and business value.",
    capabilities: [
      "Custom application development",
      "Legacy modernization",
      "API development and integration",
      "Mobile app development",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    title: "Data & Analytics",
    description: "Transform data into insights that drive intelligent decision-making and competitive advantage.",
    capabilities: [
      "Data strategy and governance",
      "Advanced analytics and AI",
      "Business intelligence solutions",
      "Data engineering and management",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions that safeguard your digital assets.",
    capabilities: [
      "Security assessment and strategy",
      "Threat detection and response",
      "Identity and access management",
      "Compliance and risk management",
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    title: "Managed Services",
    description: "Focus on your core business while we manage and optimize your technology infrastructure.",
    capabilities: [
      "24/7 monitoring and support",
      "Infrastructure management",
      "Application maintenance",
      "Service desk operations",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
];

const industries = [
  {
    name: "Financial Services",
    description: "Digital banking, wealth management, and fintech innovation",
  },
  {
    name: "Healthcare",
    description: "Patient care solutions, healthcare IT, and medical innovation",
  },
  {
    name: "Retail",
    description: "E-commerce platforms, customer experience, and supply chain",
  },
  {
    name: "Manufacturing",
    description: "Smart factories, IoT integration, and operational excellence",
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-black text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#4A9FF5] rounded-full opacity-20 blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full opacity-15 blur-[100px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Services background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </motion.div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-32 lg:py-48">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-[#4A9FF5] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Services that drive transformation
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive solutions designed to help you navigate change, accelerate innovation, and achieve sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 overflow-hidden relative">
        {/* Background gradient */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4A9FF5] rounded-full opacity-10 blur-[150px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What we do
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              End-to-end technology services that power your digital ambitions.
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div 
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.capabilities.map((capability, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-br from-[#4A9FF5] to-[#3A8FE5] mt-2 mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(74,159,245,0.6)]"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-lg text-gray-300">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-[#4A9FF5] to-[#3A8FE5] hover:from-[#3A8FE5] hover:to-[#2A7FD5] text-white h-12 px-6 group shadow-[0_0_20px_rgba(74,159,245,0.4)] hover:shadow-[0_0_35px_rgba(74,159,245,0.7)] transition-all duration-300">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  className={
                    index % 2 === 1
                      ? "lg:col-start-1 lg:row-start-1"
                      : ""
                  }
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative group">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#4A9FF5] to-purple-600 rounded-lg opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
                    
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="relative w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1a1a2e] to-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
        {/* Glowing orb */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-15 blur-[100px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Industry expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Deep sector knowledge combined with technical excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="relative group bg-gradient-to-br from-[#0A0A0A] to-[#151515] border border-gray-700 hover:border-[#4A9FF5] p-10 lg:p-12 transition-all cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FF5]/0 to-[#4A9FF5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Radial glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A9FF5] opacity-0 group-hover:opacity-30 blur-[60px] transition-opacity duration-500" />
                
                <h3 className="relative text-2xl font-bold mb-4 text-white group-hover:text-[#4A9FF5] transition-colors">
                  {industry.name}
                </h3>
                <p className="relative text-lg text-gray-400 mb-6">
                  {industry.description}
                </p>
                <div className="relative flex items-center text-[#4A9FF5] font-medium group-hover:drop-shadow-[0_0_8px_rgba(74,159,245,0.8)]">
                  Explore solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4A9FF5] rounded-full opacity-10 blur-[150px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technology ecosystem
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We partner with industry leaders to deliver best-in-class solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Microsoft", "Amazon Web Services", "Google Cloud", "Salesforce", "SAP", "Oracle", "Adobe", "IBM"].map(
              (partner, index) => (
                <motion.div
                  key={index}
                  className="relative group border border-gray-700 bg-gradient-to-br from-[#1A1A1A] to-[#151515] p-8 flex items-center justify-center h-32 hover:border-[#4A9FF5] transition-all overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-[#4A9FF5] opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500" />
                  
                  <span className="relative text-xl font-bold text-white group-hover:text-[#4A9FF5] transition-colors group-hover:drop-shadow-[0_0_10px_rgba(74,159,245,0.8)]">
                    {partner}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#4A9FF5] via-[#3A8FE5] to-purple-600 text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              Let's build something extraordinary
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Discover how our services can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white h-14 px-8 text-base group shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(0,0,0,0.7)] transition-all duration-300">
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
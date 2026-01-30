import { Link } from "react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";
import logoImage from "figma:asset/73a6f45899ba9764cdb681c05f8a0ce66cfe578e.png";

const services = [
  {
    title: "Website Development",
    description: "Build high-performance web applications that enhance customer experience and drive revenue growth with scalable, enterprise-grade architecture.",
    link: "/services/website-development",
  },
  {
    title: "Mobile App Development",
    description: "Deliver mobile-first experiences across iOS and Android platforms that increase customer engagement and accelerate digital adoption.",
    link: "/services/mobile-app-development",
  },
  {
    title: "Software Solutions",
    description: "Custom enterprise software solutions engineered for complex business challenges with proven ROI and seamless integration capabilities.",
    link: "/services/software-solutions",
  },
  {
    title: "AMC (Annual Maintenance Contract)",
    description: "Ensure business continuity with proactive 24/7 monitoring, maintenance, and support services that maximize system uptime and performance.",
    link: "/services/amc",
  },
];

const stats = [
  { value: "20+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "3+", label: "Years of Excellence" },
  { value: "30+", label: "Technology Experts" },
];

const trustedBrands = [
  "Fortune 500 Companies",
  "Global Financial Institutions",
  "Leading Healthcare Providers",
  "Major E-commerce Platforms",
  "International Manufacturers",
  "Technology Innovators",
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#0A0A0A] text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#4A9FF5] rounded-full opacity-20 blur-[120px]"
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
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-20 blur-[100px]"
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

        {/* Rotating Earth Globe Background - Contained */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vw] lg:w-[150vw] lg:h-[150vw] -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 120, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ transformOrigin: "center center" }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
              alt="Technology background"
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
          
          {/* Smooth radial gradient overlay to blend edges naturally */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 50% at center, transparent 0%, transparent 20%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.7) 60%, #0A0A0A 80%)"
            }}
          />
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-[#4A9FF5] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Enterprise Technology Solutions That Drive Business Value
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Partner with Lumyx Group to accelerate digital transformation, optimize operations, and achieve measurable business outcomes through innovative technology solutions.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#4A9FF5] to-[#3A8FE5] hover:from-[#3A8FE5] hover:to-[#2A7FD5] text-white h-14 px-8 text-base group shadow-[0_0_30px_rgba(74,159,245,0.5)] hover:shadow-[0_0_50px_rgba(74,159,245,0.8)] transition-all duration-300"
                  >
                    Schedule a Consultation
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-[#4A9FF5] text-black hover:bg-[#4A9FF5]/10 hover:border-[#3A8FE5] h-14 px-8 text-base backdrop-blur-sm hover:shadow-[0_0_30px_rgba(74,159,245,0.3)] transition-all duration-300"
                  >
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Logo with border */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="relative border-4 border-[#4A9FF5] rounded-3xl p-8 shadow-[0_0_50px_rgba(74,159,245,0.5)]"
                animate={{
                  boxShadow: [
                    "0_0_50px_rgba(74,159,245,0.5)",
                    "0_0_80px_rgba(74,159,245,0.7)",
                    "0_0_50px_rgba(74,159,245,0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img 
                  src={logoImage} 
                  alt="Lumyx Group" 
                  className="w-64 h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-b border-gray-800 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center lg:text-left relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A9FF5]/0 via-[#4A9FF5]/5 to-[#4A9FF5]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                <motion.div 
                  className="relative text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#4A9FF5] to-[#7BB9FF] bg-clip-text text-transparent mb-2 drop-shadow-[0_0_15px_rgba(74,159,245,0.5)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="relative text-sm lg:text-base text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A9FF5] rounded-full opacity-10 blur-[150px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Comprehensive IT solutions designed to accelerate your digital transformation journey.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link
                  to={service.link}
                  className="block group relative border border-gray-700 hover:border-[#4A9FF5] transition-all duration-300 p-8 lg:p-12 bg-gradient-to-br from-[#1A1A1A] to-[#151515] hover:shadow-[0_0_50px_rgba(74,159,245,0.3)] h-full overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FF5]/0 via-[#4A9FF5]/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glowing corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A9FF5] opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500" />
                  
                  <h3 className="relative text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#4A9FF5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative text-gray-400 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="relative flex items-center text-[#4A9FF5] font-medium group-hover:drop-shadow-[0_0_8px_rgba(74,159,245,0.8)]">
                    Learn more
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1a1a2e] to-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
        {/* Glowing orb */}
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-20 blur-[100px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Technology meets innovation
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We combine deep industry expertise with cutting-edge technology to deliver solutions that transform businesses and create value at scale.
              </p>
              <div className="space-y-4">
                {["Strategic consulting and planning", "Agile development methodology", "Continuous support and optimization"].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-br from-[#4A9FF5] to-[#3A8FE5] flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(74,159,245,0.6)] group-hover:shadow-[0_0_25px_rgba(74,159,245,0.9)]"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-gray-300 text-lg">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4A9FF5] to-purple-600 rounded-lg opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Team collaboration"
                className="relative w-full h-[500px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4A9FF5] rounded-full opacity-10 blur-[150px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries we serve
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {trustedBrands.map((industry, index) => (
              <motion.div
                key={index}
                className="relative group border border-gray-700 bg-gradient-to-br from-[#1A1A1A] to-[#151515] p-4 md:p-8 text-center hover:border-[#4A9FF5] transition-all cursor-pointer overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FF5]/0 to-[#4A9FF5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Radial glow effect */}
                <div className="absolute inset-0 bg-[#4A9FF5] opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500" />
                
                <h3 className="relative text-xl font-bold text-white break-words group-hover:text-[#4A9FF5] group-hover:drop-shadow-[0_0_10px_rgba(74,159,245,0.8)] transition-all">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-black via-[#1a1a2e] to-black text-white py-24 lg:py-32 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#4A9FF5] rounded-full opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600 rounded-full opacity-20 blur-[80px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-[#4A9FF5] bg-clip-text text-transparent">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let's discuss how our solutions can drive your success.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#4A9FF5] to-[#3A8FE5] hover:from-[#3A8FE5] hover:to-[#2A7FD5] text-white h-14 px-8 text-base group shadow-[0_0_30px_rgba(74,159,245,0.5)] hover:shadow-[0_0_50px_rgba(74,159,245,0.8)] transition-all duration-300"
              >
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
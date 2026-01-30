import { Target, Eye, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const certifications = [
  {
    title: "Industry Recognition",
    items: ["ISO 9001:2015 Certified", "ISO 27001:2013 Information Security", "CMMI Level 5 Certified"]
  },
  {
    title: "Technology Partnerships",
    items: ["Microsoft Gold Partner", "AWS Advanced Consulting Partner", "Google Cloud Partner"]
  },
  {
    title: "Awards & Accolades",
    items: ["Top IT Services Provider 2023", "Excellence in Digital Transformation", "Best Workplace Technology Company"]
  },
  {
    title: "Global Capabilities",
    items: ["24/7 Support Operations", "Multi-Region Deployment", "Enterprise-Grade Security"]
  },
];

const values = [
  {
    title: "Innovation",
    description: "We embrace change and continuously explore new technologies to deliver breakthrough solutions that drive competitive advantage.",
  },
  {
    title: "Excellence",
    description: "Quality is at the heart of everything we do. We maintain the highest standards in delivery and service.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of partnership and work closely with our clients to achieve shared success.",
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, ethical practices, and unwavering commitment to our clients.",
  },
];

const leadership = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    bio: "20+ years leading digital transformation initiatives across Fortune 500 companies.",
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    bio: "Expert in cloud architecture, AI, and scalable enterprise systems.",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Strategy Officer",
    bio: "Former McKinsey consultant specializing in technology and innovation strategy.",
  },
  {
    name: "David Kumar",
    role: "Chief Innovation Officer",
    bio: "Pioneer in emerging technologies with multiple patents in AI and machine learning.",
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-black text-white overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4A9FF5] rounded-full opacity-20 blur-[120px]"
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Modern office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
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
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Powering Enterprise Digital Transformation
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A global technology services leader helping Fortune 500 companies and enterprises worldwide achieve measurable business outcomes through innovative solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 overflow-hidden relative">
        {/* Background gradient */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#4A9FF5] rounded-full opacity-10 blur-[150px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our story
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Founded in 2023, Lumyx Group emerged from a vision to bridge the gap between cutting-edge technology and business transformation. What started as a small team of passionate innovators has evolved into a global technology powerhouse.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Today, we partner with the world's leading organizations to deliver comprehensive technology solutions that drive measurable business outcomes. Our expertise spans the full spectrum of digital services—from strategy and consulting to implementation and support.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  With a presence of a team of 20+ professionals, we combine deep industry knowledge with technological excellence to help our clients navigate complexity and achieve sustainable growth.
                </motion.p>
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
                className="relative w-full h-[600px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1a1a2e] to-[#1A1A1A] py-16 lg:py-20 overflow-hidden">
        {/* Glowing orb */}
        <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-purple-600 rounded-full opacity-15 blur-[100px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div 
              className="relative group bg-gradient-to-br from-[#0A0A0A] to-[#151515] border border-gray-700 hover:border-[#4A9FF5] p-12 lg:p-16 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Glowing background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FF5]/0 to-[#4A9FF5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Radial glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A9FF5] opacity-0 group-hover:opacity-30 blur-[60px] transition-opacity duration-500" />
              
              <div className="relative mb-8">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[#4A9FF5] to-[#3A8FE5] mb-6 shadow-[0_0_20px_rgba(74,159,245,0.6)]"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-[#4A9FF5] transition-colors">
                  Our Mission
                </h2>
              </div>
              <p className="relative text-xl text-gray-400 leading-relaxed">
                To deliver innovation that transforms businesses and improves the way the world works and lives.
              </p>
            </motion.div>

            <motion.div 
              className="relative group bg-gradient-to-br from-[#0A0A0A] to-[#151515] border border-gray-700 hover:border-[#4A9FF5] p-12 lg:p-16 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glowing background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FF5]/0 to-[#4A9FF5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Radial glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A9FF5] opacity-0 group-hover:opacity-30 blur-[60px] transition-opacity duration-500" />
              
              <div className="relative mb-8">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[#4A9FF5] to-[#3A8FE5] mb-6 shadow-[0_0_20px_rgba(74,159,245,0.6)]"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-[#4A9FF5] transition-colors">
                  Our Vision
                </h2>
              </div>
              <p className="relative text-xl text-gray-400 leading-relaxed">
                To be the partner of choice for organizations seeking to achieve exceptional outcomes through technology and human ingenuity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4A9FF5] rounded-full opacity-10 blur-[150px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              The principles that guide our decisions, shape our culture, and define who we are.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="relative group border-l-4 border-[#4A9FF5] pl-8 bg-gradient-to-r from-[#4A9FF5]/5 to-transparent hover:from-[#4A9FF5]/10 p-6 -ml-0 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {/* Glowing effect on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4A9FF5] opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(74,159,245,0.8)] transition-opacity duration-300" />
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#4A9FF5] transition-colors">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1a1a2e] to-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full opacity-15 blur-[120px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Enterprise Credentials & Partnerships
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Trusted certifications, strategic partnerships, and global capabilities that ensure exceptional service delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="relative group bg-gradient-to-br from-[#0A0A0A] to-[#151515] border border-gray-700 hover:border-[#4A9FF5] p-8 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FF5]/0 to-[#4A9FF5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Radial glow effect */}
                <div className="absolute inset-0 bg-[#4A9FF5] opacity-0 group-hover:opacity-5 blur-[40px] transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[#4A9FF5] to-[#2A7FD5] mb-6 shadow-[0_0_30px_rgba(74,159,245,0.4)] group-hover:shadow-[0_0_50px_rgba(74,159,245,0.7)]"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#4A9FF5] transition-colors">
                    {cert.title}
                  </h3>
                  <ul className="space-y-3">
                    {cert.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#4A9FF5] rounded-full mt-2 flex-shrink-0 shadow-[0_0_6px_rgba(74,159,245,0.8)]" />
                        <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-[#4A9FF5] bg-clip-text text-transparent">
              Join us in shaping the future
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Explore career opportunities and become part of our journey.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#4A9FF5] to-[#3A8FE5] hover:from-[#3A8FE5] hover:to-[#2A7FD5] text-white h-14 px-8 text-base group shadow-[0_0_30px_rgba(74,159,245,0.5)] hover:shadow-[0_0_50px_rgba(74,159,245,0.8)] transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const amcBenefits = [
  {
    title: "Regular Security Updates",
    description: "Keep your systems secure with timely security patches and vulnerability fixes.",
    icon: "🔒",
  },
  {
    title: "Performance Optimization",
    description: "Continuous monitoring and optimization to ensure peak performance.",
    icon: "⚡",
  },
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock support to resolve issues and answer queries.",
    icon: "🛟",
  },
  {
    title: "Backup & Recovery",
    description: "Regular data backups and disaster recovery planning.",
    icon: "💾",
  },
];

export function AMC() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="AMC Services"
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
              Annual Maintenance Contract
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive maintenance and support services to keep your digital products running smoothly and efficiently.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* AMC Benefits Section */}
      <section className="py-24 lg:py-32 border-b border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              AMC Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive maintenance packages ensure your products stay secure, performant, and up-to-date.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amcBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] border border-gray-700 p-8 hover:border-[#4A9FF5] transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A1A1A] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "200+", label: "Active AMC Contracts" },
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7", label: "Support Available" },
              { value: "< 2hrs", label: "Response Time" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-5xl lg:text-6xl font-bold text-[#4A9FF5] mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg text-gray-400">{stat.label}</div>
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
              Protect your digital investment
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Get peace of mind with our comprehensive AMC plans. Contact us to learn more.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white h-14 px-8 text-base group">
                Get AMC Quote
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
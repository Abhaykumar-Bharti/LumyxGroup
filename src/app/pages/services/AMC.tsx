import { ChevronRight, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const maintenanceSchedules = [
  {
    id: 1,
    client: "StyleHub Fashion",
    product: "E-Commerce Platform",
    type: "Website",
    contractStart: "January 2026",
    contractEnd: "December 2026",
    status: "Active",
    lastMaintenance: "January 15, 2026",
    nextMaintenance: "February 15, 2026",
    services: ["Security Updates", "Performance Optimization", "Bug Fixes", "Feature Updates"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 2,
    client: "FitLife Pro",
    product: "Fitness & Wellness App",
    type: "Mobile App",
    contractStart: "February 2026",
    contractEnd: "January 2027",
    status: "Active",
    lastMaintenance: "January 20, 2026",
    nextMaintenance: "February 20, 2026",
    services: ["App Updates", "Server Maintenance", "API Updates", "Cloud Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 3,
    client: "ManufacturePro Industries",
    product: "ERP System",
    type: "Software Solution",
    contractStart: "January 2026",
    contractEnd: "December 2026",
    status: "Active",
    lastMaintenance: "January 10, 2026",
    nextMaintenance: "February 10, 2026",
    services: ["Database Optimization", "Module Updates", "Backup Management", "User Support"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 4,
    client: "SecureBank Ltd",
    product: "Corporate Banking Website",
    type: "Website",
    contractStart: "December 2025",
    contractEnd: "November 2026",
    status: "Active",
    lastMaintenance: "January 5, 2026",
    nextMaintenance: "February 5, 2026",
    services: ["Security Patches", "SSL Certificate Renewal", "Performance Monitoring", "Content Updates"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 5,
    client: "QuickDelivery Services",
    product: "On-Demand Delivery App",
    type: "Mobile App",
    contractStart: "January 2026",
    contractEnd: "December 2026",
    status: "Active",
    lastMaintenance: "January 18, 2026",
    nextMaintenance: "February 18, 2026",
    services: ["GPS Integration Updates", "Payment Gateway Maintenance", "Push Notifications", "Analytics Upgrade"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: 6,
    client: "HealthCare Plus",
    product: "Healthcare Portal",
    type: "Website",
    contractStart: "November 2025",
    contractEnd: "October 2026",
    status: "Active",
    lastMaintenance: "January 12, 2026",
    nextMaintenance: "February 12, 2026",
    services: ["HIPAA Compliance Updates", "Data Backup", "System Monitoring", "Feature Enhancements"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
];

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

      {/* Maintenance Schedules */}
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
              Active Maintenance Contracts
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              View the maintenance schedules for our clients' delivered products and services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {maintenanceSchedules.map((schedule, index) => (
              <motion.div
                key={schedule.id}
                className="bg-[#1A1A1A] border border-gray-700 overflow-hidden hover:border-[#4A9FF5] transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={schedule.image}
                    alt={schedule.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold border border-green-500/30">
                      {schedule.status}
                    </span>
                    <span className="text-sm text-gray-400">{schedule.type}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {schedule.product}
                  </h3>
                  <p className="text-[#4A9FF5] font-semibold mb-4">
                    {schedule.client}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">Contract Period</p>
                        <p className="text-white font-medium">
                          {schedule.contractStart} - {schedule.contractEnd}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">Last Maintenance</p>
                        <p className="text-white font-medium">{schedule.lastMaintenance}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#4A9FF5] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">Next Scheduled</p>
                        <p className="text-white font-medium">{schedule.nextMaintenance}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white mb-3">MAINTENANCE SERVICES</h4>
                    <div className="flex flex-wrap gap-2">
                      {schedule.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs border border-gray-700"
                        >
                          {service}
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

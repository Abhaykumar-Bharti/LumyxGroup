import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const mobileProjects = [
  {
    id: 1,
    title: "Fitness & Wellness Mobile App",
    client: "FitLife Pro",
    description: "Developed a comprehensive fitness tracking app with workout plans, nutrition tracking, and social features for iOS and Android.",
    technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
    deliveryDate: "January 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Workout Tracking", "Nutrition Plans", "Social Feed", "Progress Analytics"],
  },
  {
    id: 2,
    title: "On-Demand Delivery App",
    client: "QuickDelivery Services",
    description: "Built a full-featured delivery platform connecting customers with couriers, featuring real-time tracking and payment processing.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps SDK"],
    deliveryDate: "December 2025",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Real-time Tracking", "In-app Payments", "Push Notifications", "Rating System"],
  },
  {
    id: 3,
    title: "Banking & Finance Mobile App",
    client: "NextGen Bank",
    description: "Created a secure mobile banking application with account management, bill payments, and investment tracking capabilities.",
    technologies: ["Swift", "Kotlin", "Azure", "Biometric Auth"],
    deliveryDate: "November 2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Account Management", "Bill Payments", "Investment Tracking", "Biometric Login"],
  },
  {
    id: 4,
    title: "Social Networking App",
    client: "ConnectHub",
    description: "Designed and developed a feature-rich social platform with messaging, media sharing, and community features.",
    technologies: ["React Native", "GraphQL", "PostgreSQL", "AWS S3"],
    deliveryDate: "October 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Instant Messaging", "Media Sharing", "Stories", "Group Chats"],
  },
  {
    id: 5,
    title: "Food Ordering & Restaurant App",
    client: "TastyBites",
    description: "Built an intuitive food ordering app with menu browsing, order customization, and delivery tracking features.",
    technologies: ["Flutter", "Firebase", "Stripe", "Google Maps"],
    deliveryDate: "September 2025",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Menu Browsing", "Order Customization", "Live Tracking", "Favorites & Reorder"],
  },
  {
    id: 6,
    title: "Travel & Booking Mobile App",
    client: "WanderLust Travels",
    description: "Developed a comprehensive travel app with flight/hotel bookings, itinerary planning, and travel guides.",
    technologies: ["React Native", "Node.js", "MongoDB", "Payment Gateway"],
    deliveryDate: "August 2025",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    features: ["Flight Booking", "Hotel Reservations", "Itinerary Planner", "Travel Guides"],
  },
];

export function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Mobile App Development"
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
              Mobile App Development Projects
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our mobile application portfolio featuring innovative solutions for iOS and Android platforms.
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
              Native and cross-platform mobile applications built with modern frameworks and exceptional user experiences.
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {mobileProjects.map((project, index) => (
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
              Ready to launch your mobile app?
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Let's create a mobile experience that engages your users and drives business growth.
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

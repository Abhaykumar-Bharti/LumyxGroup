import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { Link } from "react-router";
import { motion } from "motion/react";

const caseStudies = [
  {
    id: 1,
    client: "Global Financial Services",
    title: "Digital banking transformation",
    description: "Modernizing legacy systems to deliver seamless digital banking experiences across all channels.",
    impact: "85% increase in mobile banking adoption",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Cloud Migration", "Mobile Banking", "API Integration"],
  },
  {
    id: 2,
    client: "Healthcare Innovation Corp",
    title: "AI-powered patient care platform",
    description: "Building an intelligent healthcare platform that improves patient outcomes through predictive analytics.",
    impact: "40% reduction in readmission rates",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["AI/ML", "Healthcare IT", "Data Analytics"],
  },
  {
    id: 3,
    client: "Retail Innovations Ltd",
    title: "Omnichannel customer experience",
    description: "Creating unified shopping experiences that seamlessly connect online and in-store customer journeys.",
    impact: "150% growth in e-commerce revenue",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["E-commerce", "Customer Experience", "Cloud"],
  },
  {
    id: 4,
    client: "Manufacturing Solutions Inc",
    title: "Smart factory implementation",
    description: "Deploying IoT sensors and predictive maintenance systems to optimize production efficiency.",
    impact: "30% improvement in operational efficiency",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["IoT", "Industry 4.0", "Automation"],
  },
  {
    id: 5,
    client: "TechStart Ventures",
    title: "Scalable SaaS platform development",
    description: "Building a multi-tenant SaaS platform that scales to support millions of users globally.",
    impact: "1M+ active users in first year",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["SaaS", "Cloud-Native", "Microservices"],
  },
  {
    id: 6,
    client: "Energy Solutions Group",
    title: "Smart grid optimization",
    description: "Implementing advanced analytics and automation to create more efficient and sustainable energy distribution.",
    impact: "25% reduction in energy waste",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    tags: ["Smart Grid", "Analytics", "Sustainability"],
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Portfolio background"
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
              className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-[#4A9FF5] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Client Success Stories
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Real-world results from enterprise clients worldwide. See how we've delivered transformative technology solutions that drive measurable business impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">{study.client}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#4A9FF5] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <p className="text-[#4A9FF5] font-bold text-lg">
                      {study.impact}
                    </p>
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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Delivering measurable impact
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our client success speaks for itself.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "$5B+", label: "Value Created" },
              { value: "20+", label: "Industry Awards" }
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

      {/* Testimonial Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl lg:text-4xl font-bold mb-8 leading-relaxed text-white">
              "Working with Lumyx Group has been transformational for our business. Their expertise, commitment, and innovative approach helped us achieve results beyond our expectations."
            </p>
            <div>
              <p className="font-bold text-lg mb-1 text-white">Jennifer Martinez</p>
              <p className="text-gray-400">Chief Digital Officer, Fortune 500 Company</p>
            </div>
          </motion.div>
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
              Ready to create your success story?
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Let's discuss how we can help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white h-14 px-8 text-base group">
                Start a Conversation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
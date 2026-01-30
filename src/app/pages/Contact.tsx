import { Mail, MapPin, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Contact() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Contact background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-32 lg:py-48">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Let's create together
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Connect with our experts to discuss your project and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white text-center">
              Get in touch
            </h2>
            
            <div className="space-y-8 mb-12">
              <div>
                <div className="flex items-center mb-3">
                  <Phone className="w-6 h-6 mr-3 text-[#4A9FF5]" />
                  <h3 className="font-bold text-lg text-white">Phone</h3>
                </div>
                <p className="text-gray-400 text-lg pl-9">
                  +91 8652663272
                </p>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <Mail className="w-6 h-6 mr-3 text-[#4A9FF5]" />
                  <h3 className="font-bold text-lg text-white">Email</h3>
                </div>
                <p className="text-gray-400 text-lg pl-9">
                  lumyxgroupofficial@gmail.com
                </p>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 mr-3 text-[#4A9FF5]" />
                  <h3 className="font-bold text-lg text-white">Office</h3>
                </div>
                <p className="text-gray-400 text-lg pl-9">
                  Mumbai
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-gray-800 p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Office hours
              </h3>
              <div className="space-y-2 text-lg text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A9FF5] text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Join our team
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Explore career opportunities and become part of our innovative culture.
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white h-14 px-8 text-base group">
              View Open Positions
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "motion/react";
import whatsappIcon from "@/assets/whatsapp.png";

export function WhatsAppButton() {
  // Replace this with your actual WhatsApp number
  // Format: country code + phone number (no + sign, no spaces)
  // Example: "1234567890" for US number or "919876543210" for India
  const phoneNumber = "YOUR_WHATSAPP_NUMBER_HERE";
  
  // Optional: Add a default message
  const message = "Hello! I'm interested in your IT services.";
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing ring animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* WhatsApp icon image */}
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full relative z-10"
      />
    </motion.a>
  );
}
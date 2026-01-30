import { Link } from "react-router";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#4A9FF5]">404</h1>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
          Page not found
        </h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-[#4A9FF5] hover:bg-[#3A8FE5] text-white h-14 px-8 text-base group">
            Return Home
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
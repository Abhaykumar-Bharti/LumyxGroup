import { Link } from "react-router";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const blogPost = {
  title: "The future of enterprise technology in 2026",
  author: "Alexandra Chen",
  role: "Chief Executive Officer",
  date: "January 20, 2026",
  category: "Technology Trends",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000",
};

export function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Back Navigation */}
      <div className="border-b border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-[#4A9FF5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <span className="text-sm font-medium text-gray-400">
              {blogPost.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-12 pb-12 border-b border-gray-800">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#4A9FF5] mr-4" />
              <div>
                <p className="font-bold text-white">{blogPost.author}</p>
                <p className="text-sm text-gray-400">{blogPost.role}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{blogPost.date}</span>
              <span className="mx-3">•</span>
              <span>{blogPost.readTime}</span>
            </div>
            <button className="ml-auto flex items-center text-gray-400 hover:text-[#4A9FF5] transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <ImageWithFallback
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              As we move deeper into 2026, the technology landscape continues to evolve at an unprecedented pace. Organizations that embrace these emerging trends will be better positioned to compete and thrive in an increasingly digital world.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              The rise of intelligent automation
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Artificial intelligence and machine learning are no longer experimental technologies—they're becoming essential components of enterprise operations. From automating routine tasks to providing predictive insights, AI is transforming how businesses operate and make decisions.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Leading organizations are deploying AI-powered solutions across their operations, from customer service chatbots to sophisticated analytics platforms that identify trends and opportunities in real-time. The key is not just implementing AI, but doing so strategically and ethically.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              Cloud-native architecture becomes the standard
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              The shift to cloud-native development is accelerating. Organizations are moving beyond simple "lift and shift" migrations to building applications specifically designed for cloud environments. This approach offers unprecedented scalability, resilience, and cost efficiency.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Microservices architectures, containerization, and serverless computing are becoming standard practices, enabling teams to deploy updates faster and respond to market changes with greater agility.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              Data as a strategic asset
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Organizations are recognizing data as one of their most valuable assets. Advanced analytics, real-time processing, and sophisticated visualization tools are enabling businesses to extract actionable insights from their data like never before.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              The challenge lies not in collecting data, but in building the infrastructure and capabilities to analyze and act on it effectively. Data governance, quality, and security are becoming critical priorities.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              The imperative of cybersecurity
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              As digital transformation accelerates, so do cybersecurity threats. Organizations must adopt a "security-first" mindset, embedding security considerations into every aspect of their technology strategy.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Zero-trust architectures, continuous monitoring, and AI-powered threat detection are becoming essential components of enterprise security strategies. The cost of a breach—both financial and reputational—makes cybersecurity investment non-negotiable.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
              Looking ahead
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              The technologies shaping 2026 represent both tremendous opportunity and significant challenge. Success will belong to organizations that can balance innovation with pragmatism, embracing new technologies while maintaining focus on business outcomes.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              At Lumyx Group, we're committed to helping our clients navigate this complex landscape, providing the expertise and solutions needed to turn technological possibility into business reality.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">
            Related insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud transformation: A strategic imperative",
                category: "Cloud Computing",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "AI and machine learning in business applications",
                category: "Artificial Intelligence",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                title: "Building resilient digital infrastructure",
                category: "Infrastructure",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
            ].map((post, index) => (
              <Link key={index} to="/blog/2" className="group">
                <div className="mb-4 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#4A9FF5] transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A9FF5] text-white py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-purple-200 mb-10 leading-relaxed">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white h-14 px-8 text-base">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
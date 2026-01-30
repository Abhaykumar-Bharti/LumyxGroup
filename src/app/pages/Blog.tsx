import { Link } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

const blogPosts = [
  {
    id: "1",
    title: "The future of enterprise technology in 2026",
    excerpt: "Exploring emerging technologies that are reshaping how businesses operate and compete in the digital age.",
    author: "Alexandra Chen",
    date: "January 20, 2026",
    category: "Technology Trends",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: "2",
    title: "Cloud transformation: A strategic imperative",
    excerpt: "Why cloud adoption is no longer optional for organizations seeking to remain competitive and agile.",
    author: "Marcus Williams",
    date: "January 15, 2026",
    category: "Cloud Computing",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: "3",
    title: "AI and machine learning in business applications",
    excerpt: "Practical applications of artificial intelligence that are driving real business value across industries.",
    author: "Sarah Mitchell",
    date: "January 10, 2026",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: "4",
    title: "Building resilient digital infrastructure",
    excerpt: "Best practices for creating technology foundations that can withstand disruption and scale with growth.",
    author: "David Kumar",
    date: "January 5, 2026",
    category: "Infrastructure",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: "5",
    title: "Cybersecurity in the age of digital transformation",
    excerpt: "How organizations can protect their digital assets while embracing innovation and new technologies.",
    author: "Alexandra Chen",
    date: "December 28, 2025",
    category: "Security",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
  {
    id: "6",
    title: "The role of data in strategic decision-making",
    excerpt: "Leveraging advanced analytics to transform data into actionable business intelligence.",
    author: "Marcus Williams",
    date: "December 20, 2025",
    category: "Data & Analytics",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  },
];

export function Blog() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
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
              Insights & Thought Leadership
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert perspectives on technology trends, digital transformation strategies, and innovation shaping the future of enterprise business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 lg:py-32 border-b border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold text-[#4A9FF5]">FEATURED</span>
          </motion.div>
          <Link to={`/blog/${blogPosts[0].id}`} className="group">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-[500px] object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-sm text-gray-400">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white group-hover:text-[#4A9FF5] transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-gray-400 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{blogPosts[0].date}</span>
                  <span className="mx-3">•</span>
                  <span className="text-sm">{blogPosts[0].readTime}</span>
                </div>
                <div className="flex items-center text-[#4A9FF5] font-medium">
                  Read article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
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
              Latest articles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="group block"
                >
                  <div className="mb-6 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className="text-sm text-gray-400">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight text-white group-hover:text-[#4A9FF5] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#4A9FF5] text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Stay informed
            </h2>
            <p className="text-xl text-purple-200 mb-10 leading-relaxed">
              Subscribe to our newsletter for the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 bg-white text-black placeholder-gray-500"
              />
              <button className="bg-black hover:bg-gray-900 text-white h-12 px-8 font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
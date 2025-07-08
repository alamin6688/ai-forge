
"use client";

import { motion } from "framer-motion";
import { FileText, Zap, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: FileText,
    title: "Bangla Paraphraser",
    description: "আপনার বাংলা কন্টেন্ট রিরাইট করুন professional ও casual tone এ।",
    features: ["Multiple tone options", "Context preservation", "Grammar correction"],
    href: "/tools/paraphraser",
    color: "blue"
  },
  {
    icon: Zap,
    title: "Smart Summarizer",
    description: "Long articles এবং documents এর quick summary পান ৩-৫ bullet points এ।",
    features: ["Key points extraction", "Bangla & English", "Adjustable length"],
    href: "/tools/summarizer",
    color: "purple"
  },
  {
    icon: MessageSquare,
    title: "Caption Generator",
    description: "Social media posts এর জন্য engaging captions তৈরি করুন emojis সহ।",
    features: ["Platform optimized", "Emoji integration", "Hashtag suggestions"],
    href: "/tools/caption-generator",
    color: "green"
  }
];

const FeaturedTools = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Tools
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our collection of specialized tools designed for Bangladeshi content creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link to={tool.href}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-${tool.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <tool.icon className={`h-6 w-6 text-${tool.color}-600`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Try Now →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;

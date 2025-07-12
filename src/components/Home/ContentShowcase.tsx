
"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageSquare, Hash } from "lucide-react";
import { Link } from "react-router-dom";

const showcaseItems = [
  {
    icon: FileText,
    title: "Smart Paraphrasing",
    description: "Transform your content while maintaining meaning and context",
    example: {
      input: "The weather today is exceptionally beautiful with clear skies.",
      output: "Today's weather conditions are remarkably pleasant, featuring cloudless heavens."
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Intelligent Summarization",
    description: "Extract key insights from lengthy content in seconds",
    example: {
      input: "Long article about climate change impacts...",
      output: "Climate change significantly affects global weather patterns, leading to increased extreme events and rising sea levels."
    },
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Hash,
    title: "Caption Generation",
    description: "Create engaging social media captions automatically",
    example: {
      input: "Photo of sunset at beach",
      output: "Golden hour magic ✨ When the sky paints itself in dreams #SunsetVibes #BeachLife #NaturalBeauty"
    },
    color: "from-orange-500 to-red-500"
  }
];

const ContentShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            See AI in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of our AI tools with real examples of content transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} mb-6`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600 mb-2">Input:</p>
                    <p className="text-sm text-gray-800 italic">"{item.example.input}"</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-600 mb-2">AI Output:</p>
                    <p className="text-sm text-blue-800">"{item.example.output}"</p>
                  </div>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/tools"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Try it now
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;

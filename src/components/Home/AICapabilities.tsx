
"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Globe, Shield, Cpu, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Advanced NLP",
    description: "Powered by state-of-the-art natural language processing models",
    stats: "99.5% accuracy"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of words in milliseconds with optimized algorithms",
    stats: "<2s response time"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Support for 50+ languages with context-aware translations",
    stats: "50+ languages"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your content is never stored or used for training our models",
    stats: "100% private"
  },
  {
    icon: Cpu,
    title: "Smart Processing",
    description: "Intelligent content analysis that understands context and nuance",
    stats: "AI-powered"
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "Our AI models are constantly updated with the latest improvements",
    stats: "Daily updates"
  }
];

const AICapabilities = () => {
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
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Our AI is Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technology to deliver exceptional results for your content needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {capability.description}
                </p>
                <div className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {capability.stats}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Trusted by 10,000+ content creators worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICapabilities;

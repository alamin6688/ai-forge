
"use client";

import React from "react";
import { motion } from "framer-motion";
import Carousel3D, { CarouselCard } from "@/components/ui/carousel-3d";
import {
  Edit3,
  FileText,
  MessageSquare,
  Image,
  Mic,
  FileCheck,
  QrCode,
  Palette,
  Shield,
  Sparkles
} from "lucide-react";

const Tools3DCarousel = () => {
  const toolCards: CarouselCard[] = [
    {
      id: "paraphraser",
      category: "WRITING TOOL",
      title: "English Paraphraser",
      icon: <Edit3 className="h-6 w-6" />,
      preview: "Rewrite your content in different tones while maintaining the original meaning.",
      content: "Transform your text with our AI-powered paraphraser. Choose from multiple tones including professional, casual, creative, and academic. Perfect for avoiding plagiarism, improving readability, and adapting content for different audiences.",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "summarizer",
      category: "CONTENT TOOL",
      title: "Smart Summarizer",
      icon: <FileText className="h-6 w-6" />,
      preview: "Get concise summaries of long articles and documents in seconds.",
      content: "Extract key insights from lengthy content with our intelligent summarizer. Generate bullet points, identify main themes, and get the essence of any text. Save time while ensuring you don't miss important information.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "caption-generator",
      category: "SOCIAL MEDIA",
      title: "Caption Generator",
      icon: <MessageSquare className="h-6 w-6" />,
      preview: "Create engaging social media captions with relevant emojis and hashtags.",
      content: "Boost your social media presence with AI-generated captions. Get platform-specific content for Instagram, Twitter, LinkedIn, and more. Includes hashtag suggestions and emoji integration for maximum engagement.",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "text-to-image",
      category: "CREATIVE TOOL",
      title: "Text to Image",
      icon: <Image className="h-6 w-6" />,
      preview: "Generate stunning visuals from simple text descriptions using AI.",
      content: "Bring your imagination to life with our text-to-image generator. Create artwork, illustrations, and graphics from detailed prompts. Perfect for content creators, marketers, and anyone needing custom visuals.",
      imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "voice-generator",
      category: "AUDIO TOOL",
      title: "Voice Generator",
      icon: <Mic className="h-6 w-6" />,
      preview: "Convert text to natural-sounding speech with multiple voice options.",
      content: "Transform written content into professional audio with our advanced voice synthesis. Choose from various accents, languages, and speaking styles. Ideal for podcasts, presentations, and accessibility features.",
      imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "pdf-summarizer",
      category: "DOCUMENT TOOL",
      title: "PDF Summarizer",
      icon: <FileCheck className="h-6 w-6" />,
      preview: "Extract key insights and summaries from PDF documents instantly.",
      content: "Upload any PDF and get comprehensive summaries, key points, and actionable insights. Perfect for research papers, reports, and lengthy documents. Save hours of reading while capturing essential information.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const featuredTools: CarouselCard[] = [
    {
      id: "featured-1",
      category: "FEATURED",
      title: "AI Content Suite",
      icon: <Sparkles className="h-6 w-6" />,
      preview: "Complete toolkit for English content creation and optimization.",
      content: "Access our full suite of AI-powered writing tools. From paraphrasing and summarizing to generating captions and converting text to speech. Everything you need for professional content creation in one place.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "qr-generator",
      category: "UTILITY TOOL",
      title: "QR Code Generator",
      icon: <QrCode className="h-6 w-6" />,
      preview: "Create custom QR codes for URLs, text, and contact information.",
      content: "Generate professional QR codes with custom designs and colors. Perfect for business cards, marketing materials, and digital content sharing. Track scans and optimize your campaigns.",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "color-palette",
      category: "DESIGN TOOL",
      title: "Color Palette Generator",
      icon: <Palette className="h-6 w-6" />,
      preview: "Create beautiful, harmonious color schemes for your projects.",
      content: "Generate professional color palettes using color theory principles. Export in various formats, check accessibility compliance, and find the perfect colors for your brand or design project.",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "password-generator",
      category: "SECURITY TOOL",
      title: "Password Generator",
      icon: <Shield className="h-6 w-6" />,
      preview: "Generate secure, customizable passwords for enhanced security.",
      content: "Create strong, unique passwords with customizable criteria. Include special characters, numbers, and various lengths. Built-in strength meter ensures maximum security for your accounts.",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3D Carousel */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Our <span className="gradient-text">AI Tools</span> in 3D
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience our comprehensive suite of AI-powered English content tools. 
              Click on any card to discover detailed features and capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/80 to-primary/5 dark:from-gray-800/80 dark:to-primary/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/10"
          >
            <Carousel3D
              cards={toolCards}
              cardWidth={320}
              cardHeight={420}
              radius={450}
              enableGlitchEffect={false}
              enableGlowEffect={true}
              showControls={true}
              showThemeToggle={false}
              autoRotate={false}
              pauseOnHover={true}
              onCardClick={(card, index) =>
                console.log("Tool clicked:", card.title, index)
              }
              onCardFlip={(card, index, isFlipped) =>
                console.log("Card flipped:", card.title, isFlipped)
              }
            />
          </motion.div>
        </div>

        {/* Featured Tools Carousel */}
        <div className="space-y-12 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured & Utility Tools
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Additional tools to enhance your workflow and productivity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-secondary/10 dark:from-primary/10 dark:to-secondary/20 rounded-2xl p-8"
          >
            <Carousel3D
              cards={featuredTools}
              cardWidth={300}
              cardHeight={380}
              radius={380}
              autoRotate={true}
              autoRotateInterval={4000}
              pauseOnHover={true}
              enableGlitchEffect={false}
              enableGlowEffect={true}
              showControls={false}
              showThemeToggle={false}
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Interactive 3D Experience Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                🎠 3D Circular Layout
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Tools arranged in a perfect circle with smooth 3D rotations and perspective
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                🔄 Flippable Cards
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Click any tool card to reveal detailed features and capabilities
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                🖱️ Multiple Navigation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Drag, touch, keyboard arrows, and control buttons for easy navigation
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                ⚡ Auto-rotation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Optional automatic rotation with hover pause for hands-free browsing
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                🎨 Theme Integration
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Seamlessly integrated with your site's dark/light theme system
              </p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                📱 Responsive Design
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Adapts perfectly to different screen sizes and touch devices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools3DCarousel;

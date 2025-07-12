
"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Edit3, MessageSquare, Image, Mic, FileCheck, QrCode, Palette, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { toolsList } from "@/data/toolsList";

const ToolsCarousel = () => {
  const getToolIcon = (slug: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      "paraphraser": <Edit3 className="h-8 w-8" />,
      "summarizer": <FileText className="h-8 w-8" />,
      "caption-generator": <MessageSquare className="h-8 w-8" />,
      "text-to-image": <Image className="h-8 w-8" />,
      "voice-generator": <Mic className="h-8 w-8" />,
      "pdf-summarizer": <FileCheck className="h-8 w-8" />,
      "qr-generator": <QrCode className="h-8 w-8" />,
      "color-palette": <Palette className="h-8 w-8" />,
      "password-generator": <Shield className="h-8 w-8" />
    };
    return iconMap[slug] || <FileText className="h-8 w-8" />;
  };

  const getToolImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      "paraphraser": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070&auto=format&fit=crop",
      "summarizer": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      "caption-generator": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop",
      "text-to-image": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop",
      "voice-generator": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop",
      "pdf-summarizer": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
      "qr-generator": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop",
      "color-palette": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
      "password-generator": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
    };
    return imageMap[slug] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop";
  };

  const getPlanBadge = (plan: string, isFree: boolean) => {
    if (isFree) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          Free
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
        Pro
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful <span className="gradient-text">AI Tools</span> at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered tools designed to enhance your English content creation, 
            from paraphrasing and summarizing to generating creative content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-4">
              {toolsList.map((tool, index) => (
                <CarouselItem key={tool.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={getToolImage(tool.slug)}
                          alt={tool.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 right-4">
                          {getPlanBadge(tool.plan, tool.isFree)}
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          {getToolIcon(tool.slug)}
                        </div>
                      </div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {tool.name}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Key Features:</p>
                          <div className="flex flex-wrap gap-1">
                            {tool.features.slice(0, 2).map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Link
                          to={tool.openInModal ? "/tools" : `/tools/${tool.slug}`}
                          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors group-hover:bg-primary/80"
                        >
                          Try {tool.name}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/tools"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-105"
          >
            Explore All Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsCarousel;

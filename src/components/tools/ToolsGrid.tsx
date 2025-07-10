
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Star, CreditCard, Lock } from 'lucide-react';

interface Tool {
  name: string;
  slug: string;
  icon: string;
  description: string;
  authRequired: boolean;
  isFree: boolean;
  requiresCredits: boolean;
  plan: string;
  openInModal: boolean;
  category: string;
  features: string[];
}

interface ToolsGridProps {
  tools: Tool[];
  onToolClick: (tool: Tool) => void;
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ tools, onToolClick }) => {
  const getBadgeVariant = (tool: Tool) => {
    if (!tool.isFree) return 'destructive';
    if (tool.authRequired) return 'secondary';
    return 'default';
  };

  const getBadgeText = (tool: Tool) => {
    if (!tool.isFree && tool.plan === 'pro') return 'Pro Only';
    if (tool.authRequired) return 'Login Required';
    return 'Free';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto"
    >
      {tools.map((tool, index) => (
        <ToolCard
          key={tool.slug}
          tool={tool}
          index={index}
          totalTools={tools.length}
          onToolClick={onToolClick}
          getBadgeVariant={getBadgeVariant}
          getBadgeText={getBadgeText}
          cardVariants={cardVariants}
        />
      ))}
    </motion.div>
  );
};

const ToolCard = ({
  tool,
  index,
  totalTools,
  onToolClick,
  getBadgeVariant,
  getBadgeText,
  cardVariants
}: {
  tool: Tool;
  index: number;
  totalTools: number;
  onToolClick: (tool: Tool) => void;
  getBadgeVariant: (tool: Tool) => string;
  getBadgeText: (tool: Tool) => string;
  cardVariants: any;
}) => {
  const isLastRow = index >= totalTools - (totalTools % 3 === 0 ? 3 : totalTools % 3);
  const isFirstColumn = index % 3 === 0;
  const isLastColumn = index % 3 === 2;

  return (
    <motion.div
      variants={cardVariants}
      transition={{ 
        duration: 0.5,
        ease: "easeOut" 
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex flex-col lg:border-r py-8 relative group/feature cursor-pointer bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300",
        isFirstColumn && "lg:border-l",
        !isLastRow && "lg:border-b",
        "border-gray-200 hover:shadow-lg"
      )}
      onClick={() => onToolClick(tool)}
    >
      {/* Hover background effect */}
      {!isLastRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none" />
      )}
      {isLastRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      )}

      {/* Tool Icon */}
      <div className="mb-4 relative z-10 px-8 text-gray-600 flex justify-center">
        <div className="text-4xl group-hover/feature:scale-110 transition-transform duration-200">
          {tool.icon}
        </div>
      </div>

      {/* Tool Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 text-center block">
          {tool.name}
        </span>
      </div>

      {/* Tool Description */}
      <p className="text-sm text-gray-600 mb-4 relative z-10 px-8 text-center flex-grow">
        {tool.description}
      </p>

      {/* Category and Status */}
      <div className="mb-4 relative z-10 px-8 flex justify-center space-x-2">
        <Badge variant="outline" className="text-xs">
          {tool.category}
        </Badge>
        <Badge variant={getBadgeVariant(tool) as any} className="text-xs">
          {getBadgeText(tool)}
        </Badge>
      </div>

      {/* Tool Features */}
      <div className="mb-4 relative z-10 px-8 flex justify-center items-center space-x-3 text-sm text-gray-500">
        {tool.requiresCredits && (
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1" />
            <span>Credits</span>
          </div>
        )}
        {!tool.isFree && (
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            <span>Pro</span>
          </div>
        )}
        {tool.authRequired && (
          <div className="flex items-center">
            <Lock className="h-4 w-4 mr-1" />
            <span>Auth</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="relative z-10 px-8">
        <Button 
          variant="default" 
          size="sm"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 group-hover/feature:shadow-lg transition-shadow duration-200"
        >
          {tool.openInModal ? 'Try Now' : 'Open Tool'}
        </Button>
      </div>
    </motion.div>
  );
};

export default ToolsGrid;

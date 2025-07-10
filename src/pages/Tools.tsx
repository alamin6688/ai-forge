
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X, Star, Lock, Zap, CreditCard } from 'lucide-react';
import { toolsList } from '../data/toolsList';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Tools = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This should come from your auth context
  const [userPlan, setUserPlan] = useState('free'); // This should come from your auth context
  const [userCredits, setUserCredits] = useState(10); // This should come from your auth context
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  // Mock auth check - replace with your actual auth logic
  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
    
    // Mock user data - replace with actual API calls
    if (token) {
      setUserPlan('free'); // or 'pro'
      setUserCredits(10);
    }
  }, []);

  const handleToolClick = (tool) => {
    // Check authentication requirement
    if (tool.authRequired && !isAuthenticated) {
      navigate('/auth/login');
      return;
    }

    // Check plan requirement
    if (tool.plan === 'pro' && userPlan === 'free') {
      setSelectedTool(tool);
      setShowUpgradeModal(true);
      return;
    }

    // Check credits requirement
    if (tool.requiresCredits && userCredits === 0) {
      setSelectedTool(tool);
      setShowCreditsModal(true);
      return;
    }

    // Open tool
    if (tool.openInModal) {
      // Handle modal opening logic here
      console.log('Opening tool in modal:', tool.name);
    } else {
      navigate(`/tools/${tool.slug}`);
    }
  };

  const getBadgeVariant = (tool) => {
    if (!tool.isFree) return 'destructive';
    if (tool.authRequired) return 'secondary';
    return 'default';
  };

  const getBadgeText = (tool) => {
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
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI Tools Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover powerful AI tools to enhance your productivity and creativity
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {toolsList.map((tool, index) => (
            <motion.div
              key={tool.slug}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => handleToolClick(tool)}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {tool.name}
                    </CardTitle>
                    <Badge variant={getBadgeVariant(tool)} className="ml-2">
                      {getBadgeText(tool)}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      {tool.requiresCredits && (
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 mr-1" />
                          <span>Uses credits</span>
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    >
                      {tool.openInModal ? 'Try Now' : 'Open Tool'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Upgrade Modal */}
        <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Upgrade Required
              </DialogTitle>
              <DialogDescription>
                {selectedTool && (
                  <>
                    <strong>{selectedTool.name}</strong> is a Pro feature. Upgrade your plan to access this tool and unlock all premium features.
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
                Cancel
              </Button>
              <Button 
                onClick={() => navigate('/pricing')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                Upgrade Plan
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Credits Modal */}
        <Dialog open={showCreditsModal} onOpenChange={setShowCreditsModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-blue-500" />
                No Credits Available
              </DialogTitle>
              <DialogDescription>
                You need credits to use <strong>{selectedTool?.name}</strong>. Buy more credits or upgrade your plan for unlimited usage.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setShowCreditsModal(false)}>
                Cancel
              </Button>
              <Button 
                onClick={() => navigate('/pricing')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                Buy Credits
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Tools;

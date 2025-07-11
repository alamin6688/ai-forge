
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, CreditCard } from 'lucide-react';
import { toolsList } from '../data/toolsList';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ToolModal from '../components/tools/ToolModal';
import ToolsGrid from '../components/tools/ToolsGrid';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { PageLoader } from '@/components/ui/page-loader';
import { CardLoader } from '@/components/ui/card-loader';

const Tools = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPlan, setUserPlan] = useState('free');
  const [userCredits, setUserCredits] = useState(10);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedToolForModal, setSelectedToolForModal] = useState(null);
  const [isToolModalOpen, setIsToolModalOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isToolsLoading, setIsToolsLoading] = useState(false);

  // Mock auth check - replace with your actual auth logic
  useEffect(() => {
    const initializeApp = async () => {
      // Simulate initial app loading
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check authentication status
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      
      // Mock user data - replace with actual API calls
      if (token) {
        setUserPlan('free'); // or 'pro'
        setUserCredits(10);
      }
      
      setIsInitialLoading(false);
    };

    initializeApp();
  }, []);

  const handleToolClick = async (tool) => {
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

    // Simulate loading when opening tool
    if (tool.openInModal) {
      setIsToolsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setSelectedToolForModal(tool);
      setIsToolModalOpen(true);
      setIsToolsLoading(false);
    } else {
      // Show loading overlay during navigation
      setIsToolsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      navigate(`/tools/${tool.slug}`);
    }
  };

  if (isInitialLoading) {
    return <PageLoader message="Loading AI Tools..." />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
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

          {/* Tools Grid with Loading */}
          {isToolsLoading ? (
            <CardLoader count={6} />
          ) : (
            <ToolsGrid tools={toolsList} onToolClick={handleToolClick} />
          )}

          {/* Tool Modal */}
          <ToolModal
            tool={selectedToolForModal}
            isOpen={isToolModalOpen}
            onClose={() => {
              setIsToolModalOpen(false);
              setSelectedToolForModal(null);
            }}
          />

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
      
      <Footer />
    </div>
  );
};

export default Tools;

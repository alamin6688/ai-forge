
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CaptionGeneratorModal from './CaptionGeneratorModal';
import QRGeneratorModal from './QRGeneratorModal';
import PasswordGeneratorModal from './PasswordGeneratorModal';
import ColorPaletteModal from './ColorPaletteModal';

interface ToolModalProps {
  tool: any;
  isOpen: boolean;
  onClose: () => void;
}

const ToolModal: React.FC<ToolModalProps> = ({ tool, isOpen, onClose }) => {
  const renderToolContent = () => {
    switch (tool?.slug) {
      case 'caption-generator':
        return <CaptionGeneratorModal onClose={onClose} />;
      case 'qr-generator':
        return <QRGeneratorModal onClose={onClose} />;
      case 'password-generator':
        return <PasswordGeneratorModal onClose={onClose} />;
      case 'color-palette':
        return <ColorPaletteModal onClose={onClose} />;
      default:
        return <div>Tool not found</div>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span className="text-2xl mr-2">{tool?.icon}</span>
            {tool?.name}
          </DialogTitle>
        </DialogHeader>
        {renderToolContent()}
      </DialogContent>
    </Dialog>
  );
};

export default ToolModal;

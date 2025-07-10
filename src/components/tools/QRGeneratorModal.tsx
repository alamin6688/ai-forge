
import React, { useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface QRGeneratorModalProps {
  onClose: () => void;
}

const QRGeneratorModal: React.FC<QRGeneratorModalProps> = ({ onClose }) => {
  const [inputText, setInputText] = useState('');
  const [qrGenerated, setQrGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateQR = () => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter text or URL to generate QR code.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Mock QR generation
    setTimeout(() => {
      setQrGenerated(true);
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "QR code generated successfully."
      });
    }, 1000);
  };

  const downloadQR = () => {
    toast({
      title: "Downloaded!",
      description: "QR code saved to your downloads folder."
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Text or URL</label>
          <Textarea
            placeholder="Enter text, URL, or any content for your QR code..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <Button
          onClick={generateQR}
          disabled={isLoading || !inputText.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate QR Code'
          )}
        </Button>
      </div>

      {qrGenerated && (
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold">Generated QR Code</h3>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-4xl">📱</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Preview of your QR code</p>
          <Button onClick={downloadQR} className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Download QR Code
          </Button>
        </div>
      )}
    </div>
  );
};

export default QRGeneratorModal;

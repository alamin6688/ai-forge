
import React, { useState } from 'react';
import { Wand2, Copy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface CaptionGeneratorModalProps {
  onClose: () => void;
}

const CaptionGeneratorModal: React.FC<CaptionGeneratorModalProps> = ({ onClose }) => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [tone, setTone] = useState('casual');
  const [captions, setCaptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateCaptions = () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic for your caption.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Mock caption generation
    setTimeout(() => {
      const mockCaptions = [
        `🌟 ${topic} vibes are everything! ✨ #${topic.toLowerCase().replace(/\s+/g, '')} #mood #inspiration`,
        `Just discovered the magic of ${topic} 💫 Who else is obsessed? 🙋‍♀️ #${topic.toLowerCase().replace(/\s+/g, '')} #discovery`,
        `${topic} hits different today 🔥 What's your take? 💭 #${topic.toLowerCase().replace(/\s+/g, '')} #thoughts`
      ];
      setCaptions(mockCaptions);
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "Captions generated successfully."
      });
    }, 1500);
  };

  const copyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption);
    toast({
      title: "Copied!",
      description: "Caption copied to clipboard."
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Topic or Theme</label>
          <Textarea
            placeholder="Enter your topic, product, or theme..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="min-h-[80px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Platform</label>
            <select 
              value={platform} 
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tone</label>
            <select 
              value={tone} 
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="casual">Casual</option>
              <option value="professional">Professional</option>
              <option value="funny">Funny</option>
              <option value="inspirational">Inspirational</option>
            </select>
          </div>
        </div>

        <Button
          onClick={generateCaptions}
          disabled={isLoading || !topic.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4 mr-2" />
              Generate Captions
            </>
          )}
        </Button>
      </div>

      {captions.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Generated Captions</h3>
          {captions.map((caption, index) => (
            <div key={index} className="p-4 border border-border rounded-lg bg-muted/50">
              <p className="text-sm mb-3">{caption}</p>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{caption.length} characters</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCaption(caption)}
                >
                  <Copy className="h-3 w-3 mr-1" />
                  Copy
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaptionGeneratorModal;

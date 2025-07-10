
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, RefreshCw, FileText, Download } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryType, setSummaryType] = useState('bullets');
  const [length, setLength] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter text to summarize.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Mock summarization
    setTimeout(() => {
      const mockSummary = summaryType === 'bullets' 
        ? `• Key point from your text analysis\n• Important insight extracted from content\n• Main conclusion drawn from the input\n• Critical information highlighted\n• Summary of core concepts`
        : `This is a comprehensive summary of your input text. The main themes include several important concepts that have been analyzed and condensed into this readable format. Key insights have been extracted and presented in a coherent manner.`;
      
      setSummary(mockSummary);
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "Text successfully summarized."
      });
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    toast({
      title: "Copied!",
      description: "Summary copied to clipboard."
    });
  };

  const downloadSummary = () => {
    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'summary.txt';
    a.click();
    toast({
      title: "Downloaded!",
      description: "Summary saved to your downloads."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Smart Summarizer
          </h1>
          <p className="text-xl text-muted-foreground">
            Get quick, intelligent summaries of long articles and documents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-foreground">Input Text</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-muted-foreground">Type:</label>
                  <select 
                    value={summaryType} 
                    onChange={(e) => setSummaryType(e.target.value)}
                    className="px-2 py-1 border border-input rounded text-sm bg-background"
                  >
                    <option value="bullets">Bullet Points</option>
                    <option value="paragraph">Paragraph</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-muted-foreground">Length:</label>
                  <select 
                    value={length} 
                    onChange={(e) => setLength(e.target.value)}
                    className="px-2 py-1 border border-input rounded text-sm bg-background"
                  >
                    <option value="short">Short</option>
                    <option value="medium">Medium</option>
                    <option value="long">Long</option>
                  </select>
                </div>
              </div>
            </div>
            
            <Textarea
              placeholder="Paste your article, document, or long text here to summarize..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[350px] resize-none"
            />
            
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{inputText.length} characters</span>
              <span>Max: 10,000 characters</span>
            </div>
            
            <Button
              onClick={handleSummarize}
              disabled={isLoading || !inputText.trim()}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin mr-2" />
                  Summarizing...
                </>
              ) : (
                <>
                  <FileText className="h-5 w-5 mr-2" />
                  Summarize Text
                </>
              )}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-foreground">Summary</h3>
              {summary && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadSummary}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              )}
            </div>
            
            <div className="min-h-[350px] p-4 border border-input rounded-lg bg-muted/50">
              {summary ? (
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {summary}
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  Your summarized text will appear here...
                </p>
              )}
            </div>
            
            {summary && (
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <Badge variant="secondary">
                  {summaryType === 'bullets' ? 'Bullet Points' : 'Paragraph'} • {length} length
                </Badge>
                <span className="text-green-600">✓ Ready to use</span>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-blue-50 rounded-xl p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Need More Credits?
          </h3>
          <p className="text-muted-foreground mb-4">
            Upgrade to Pro plan for unlimited summarization and advanced features.
          </p>
          <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Upgrade Now
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Summarizer;

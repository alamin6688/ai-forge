"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, RefreshCw, Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { LoadingButton } from "@/components/ui/loading-button";
import { LoadingOverlay } from "@/components/ui/loading-overlay";
import { useLoading } from "@/hooks/useLoading";

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [tone, setTone] = useState("formal");
  const { isLoading, withLoading } = useLoading();

  const handleParaphrase = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter your text to paraphrase.",
        variant: "destructive"
      });
      return;
    }

    await withLoading(async () => {
      // Simulate API call with English-focused processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockOutput = generateMockParaphrase(inputText, tone);
      setOutputText(mockOutput);
      
      toast({
        title: "Success!",
        description: "Text successfully paraphrased."
      });
    });
  };

  const generateMockParaphrase = (text: string, selectedTone: string) => {
    // Mock paraphrasing logic for demonstration
    const sentences = text.split('. ');
    const paraphrased = sentences.map(sentence => {
      if (selectedTone === "formal") {
        return sentence.replace(/we're/gi, "we are")
          .replace(/can't/gi, "cannot")
          .replace(/don't/gi, "do not")
          .replace(/won't/gi, "will not");
      } else if (selectedTone === "casual") {
        return sentence.replace(/therefore/gi, "so")
          .replace(/furthermore/gi, "also")
          .replace(/however/gi, "but");
      }
      return sentence;
    });
    
    return `${paraphrased.join('. ')}. [Paraphrased in ${selectedTone} tone]`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    toast({
      title: "Copied!",
      description: "Output copied to clipboard."
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
            English Paraphraser
          </h1>
          <p className="text-xl text-muted-foreground">
            Rewrite your English content in different tones and styles
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
              <div className="flex items-center space-x-2">
                <label className="text-sm text-muted-foreground">Tone:</label>
                <select 
                  value={tone} 
                  onChange={(e) => setTone(e.target.value)}
                  className="px-3 py-1 border border-input rounded-md text-sm bg-background"
                  disabled={isLoading}
                >
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="professional">Professional</option>
                  <option value="creative">Creative</option>
                </select>
              </div>
            </div>
            
            <LoadingOverlay isLoading={isLoading} message="Processing text...">
              <Textarea
                placeholder="Enter your English text here to paraphrase..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[300px] resize-none"
                disabled={isLoading}
              />
            </LoadingOverlay>
            
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{inputText.length} characters</span>
              <span>Max: 5000 characters</span>
            </div>
            
            <LoadingButton
              onClick={handleParaphrase}
              loading={isLoading}
              loadingText="Processing..."
              disabled={!inputText.trim()}
              className="w-full py-3 px-6 font-semibold"
            >
              <Wand2 className="h-5 w-5 mr-2" />
              Paraphrase Text
            </LoadingButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-foreground">Paraphrased Text</h3>
              {outputText && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  disabled={isLoading}
                >
                  <Copy className="h-4 w-4" />
                  <span className="text-sm">Copy</span>
                </button>
              )}
            </div>
            
            <LoadingOverlay isLoading={isLoading} message="Generating paraphrase...">
              <div className="min-h-[300px] p-4 border border-input rounded-lg bg-muted/50">
                {outputText ? (
                  <p className="text-foreground leading-relaxed">{outputText}</p>
                ) : (
                  <p className="text-muted-foreground italic">
                    Paraphrased text will appear here...
                  </p>
                )}
              </div>
            </LoadingOverlay>
            
            {outputText && (
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{outputText.length} characters</span>
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
            Upgrade to Pro plan for unlimited paraphrasing and advanced features.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Upgrade Now
          </button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Paraphraser;

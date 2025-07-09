
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Eye, Copy, ExternalLink, Zap, Shield, Globe, ArrowRight } from "lucide-react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Developer = () => {
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const widgets = [
    {
      id: "summarizer",
      title: "Text Summarizer",
      description: "AI-powered text summarization for any content",
      features: ["Smart key point extraction", "Adjustable summary length", "Multiple output formats"],
      embedCode: `<script src="https://aitools-bd.com/widgets/summarizer.js" data-api-key="YOUR_API_KEY"></script>
<div id="ai-summarizer"></div>`,
      apiExample: `curl -X POST https://aitools-bd.com/api/summarize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your long text here...",
    "length": "medium"
  }'`
    },
    {
      id: "paraphraser",
      title: "Text Paraphraser",
      description: "Rewrite content while maintaining original meaning",
      features: ["Multiple tone options", "Plagiarism-free rewrites", "Professional quality"],
      embedCode: `<script src="https://aitools-bd.com/widgets/paraphraser.js" data-api-key="YOUR_API_KEY"></script>
<div id="ai-paraphraser"></div>`,
      apiExample: `curl -X POST https://aitools-bd.com/api/paraphrase \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to paraphrase...",
    "tone": "formal"
  }'`
    },
    {
      id: "caption-generator",
      title: "Caption Generator",
      description: "Generate engaging social media captions",
      features: ["Platform-specific optimization", "Emoji integration", "Hashtag suggestions"],
      embedCode: `<script src="https://aitools-bd.com/widgets/caption-generator.js" data-api-key="YOUR_API_KEY"></script>
<div id="ai-caption-generator"></div>`,
      apiExample: `curl -X POST https://aitools-bd.com/api/generate-caption \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "description": "A beautiful sunset...",
    "platform": "instagram",
    "tone": "inspirational"
  }'`
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <Code className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Developer Toolkit</span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold gradient-text mb-6">
              Plug AI into Your Website
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Embed powerful AI widgets or integrate via REST API. Perfect for developers, 
              agencies, and businesses wanting to add AI functionality to their platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
                <span>Get API Key</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="border border-input text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors">
                View Documentation
              </button>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 rounded-full bg-blue-50 mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-muted-foreground">
                Add AI tools to your site with just a few lines of code. 
                No complex setup required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 rounded-full bg-green-50 mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with 99.9% uptime guarantee. 
                Your data is safe with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 rounded-full bg-purple-50 mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
              <p className="text-muted-foreground">
                Lightning-fast response times worldwide. 
                Built to handle millions of requests.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Widgets Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Available AI Widgets
            </h2>
            <p className="text-muted-foreground">
              Ready-to-use widgets that you can embed anywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {widgets.map((widget, index) => (
              <motion.div
                key={widget.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{widget.title}</h3>
                <p className="text-muted-foreground mb-4">{widget.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {widget.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedWidget(widget.id)}
                    className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(widget.embedCode, `embed-${widget.id}`)}
                    className="flex-1 border border-input px-4 py-2 rounded-lg hover:bg-accent transition-colors flex items-center justify-center space-x-2"
                  >
                    <Copy className="h-4 w-4" />
                    <span>{copiedCode === `embed-${widget.id}` ? 'Copied!' : 'Embed'}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* API Documentation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              REST API Access
            </h2>
            <p className="text-muted-foreground">
              Integrate AI tools directly into your applications
            </p>
          </motion.div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-2">1. Get your API key</p>
                    <p className="text-muted-foreground text-sm">Sign up and get your free API key from the dashboard</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-2">2. Make API calls</p>
                    <p className="text-muted-foreground text-sm">Use our REST endpoints to access AI tools</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-2">3. Handle responses</p>
                    <p className="text-muted-foreground text-sm">Process JSON responses in your application</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Example Request</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`fetch('https://aitools-bd.com/api/summarize', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Your long text here...',
    length: 'medium'
  })
})`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing for Developers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Developer Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold mb-2">Free Tier</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">100 calls/month</p>
                <p className="text-muted-foreground text-sm">Perfect for testing and small projects</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold mb-2">Pro API</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">$0.01/call</p>
                <p className="text-muted-foreground text-sm">Pay as you scale with volume discounts</p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">Custom</p>
                <p className="text-muted-foreground text-sm">Dedicated support and SLA</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Widget Preview Modal */}
      {selectedWidget && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedWidget(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Widget Preview</h3>
              <button
                onClick={() => setSelectedWidget(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                Interactive widget preview would be displayed here.
                <br />
                <span className="text-sm">This is a demo of the {selectedWidget} widget.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Developer;

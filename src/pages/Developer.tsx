
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Lock, Copy, Check, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Header from '@/components/Layout/Header';
import { Link } from 'react-router-dom';

const Developer = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const widgets = [
    {
      id: 'summarizer',
      title: 'Text Summarizer Widget',
      description: 'AI-powered text summarization for articles, documents, and content',
      icon: '📝',
      status: 'available',
      embedCode: `<script src="https://aitools-bd.com/widgets/summarizer.js"></script>
<div id="ai-summarizer" data-api-key="YOUR_API_KEY"></div>`,
      apiEndpoint: '/api/summarize',
      credits: 2
    },
    {
      id: 'paraphraser',
      title: 'Paraphraser Widget',
      description: 'Rewrite and rephrase text while maintaining original meaning',
      icon: '🔄',
      status: 'available',
      embedCode: `<script src="https://aitools-bd.com/widgets/paraphraser.js"></script>
<div id="ai-paraphraser" data-api-key="YOUR_API_KEY"></div>`,
      apiEndpoint: '/api/paraphrase',
      credits: 1
    },
    {
      id: 'caption-generator',
      title: 'Caption Generator Widget',
      description: 'Generate engaging captions for social media posts and images',
      icon: '📸',
      status: 'available',
      embedCode: `<script src="https://aitools-bd.com/widgets/caption-generator.js"></script>
<div id="ai-caption-generator" data-api-key="YOUR_API_KEY"></div>`,
      apiEndpoint: '/api/generate-caption',
      credits: 1
    },
    {
      id: 'image-generator',
      title: 'AI Image Generator Widget',
      description: 'Create stunning images from text descriptions',
      icon: '🎨',
      status: 'coming-soon',
      embedCode: `<script src="https://aitools-bd.com/widgets/image-generator.js"></script>
<div id="ai-image-generator" data-api-key="YOUR_API_KEY"></div>`,
      apiEndpoint: '/api/generate-image',
      credits: 5
    }
  ];

  const apiExamples = [
    {
      title: 'cURL',
      code: `curl -X POST https://aitools-bd.com/api/summarize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your long text to summarize...",
    "maxLength": 150
  }'`
    },
    {
      title: 'JavaScript (Axios)',
      code: `const response = await axios.post('https://aitools-bd.com/api/summarize', {
  text: 'Your long text to summarize...',
  maxLength: 150
}, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

console.log(response.data.summary);`
    },
    {
      title: 'Python (Requests)',
      code: `import requests

response = requests.post('https://aitools-bd.com/api/summarize', 
  headers={'Authorization': 'Bearer YOUR_API_KEY'},
  json={
    'text': 'Your long text to summarize...',
    'maxLength': 150
  }
)

print(response.json()['summary'])`
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Developer Toolkit</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plug & Play{' '}
              <span className="gradient-text">AI Widgets</span>
              <br />for Your Website
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Embed powerful AI tools directly into your website with just a few lines of code. 
              No complex setup, no server management required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/signup">
                <Button size="lg" className="gradient-bg text-white">
                  <Zap className="h-5 w-5 mr-2" />
                  Get API Key
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Globe className="h-5 w-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'API Calls/Month', value: '1M+' },
              { label: 'Active Developers', value: '500+' },
              { label: 'Available Widgets', value: '4+' },
              { label: 'Uptime SLA', value: '99.9%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Widgets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available AI Widgets</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of pre-built AI widgets, ready to embed in your website
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {widgets.map((widget, index) => (
              <motion.div
                key={widget.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{widget.icon}</div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {widget.title}
                            {widget.status === 'coming-soon' && (
                              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                                Coming Soon
                              </span>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {widget.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Credits</div>
                        <div className="font-bold text-primary">{widget.credits}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              disabled={widget.status === 'coming-soon'}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Preview Widget
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{widget.title} Preview</DialogTitle>
                              <DialogDescription>
                                Interactive preview of the {widget.title.toLowerCase()}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="bg-muted/30 p-6 rounded-lg border">
                              <div className="text-center text-muted-foreground">
                                Widget preview would appear here
                                <br />
                                <small>Live demo coming soon</small>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="flex-1"
                              disabled={widget.status === 'coming-soon'}
                            >
                              <Code className="h-4 w-4 mr-2" />
                              Get Embed Code
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Embed {widget.title}</DialogTitle>
                              <DialogDescription>
                                Copy the code below to embed this widget on your website
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <label className="text-sm font-medium">HTML Embed Code</label>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyToClipboard(widget.embedCode, `embed-${widget.id}`)}
                                  >
                                    {copiedCode === `embed-${widget.id}` ? (
                                      <Check className="h-4 w-4" />
                                    ) : (
                                      <Copy className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>
                                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                                  <code>{widget.embedCode}</code>
                                </pre>
                              </div>
                              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <div className="flex items-start space-x-2">
                                  <Lock className="h-5 w-5 text-yellow-600 mt-0.5" />
                                  <div>
                                    <div className="font-medium text-yellow-800">API Key Required</div>
                                    <div className="text-sm text-yellow-700 mt-1">
                                      Replace YOUR_API_KEY with your actual API key from the dashboard.
                                      <Link to="/auth/login" className="text-yellow-800 hover:underline ml-1">
                                        Get your API key →
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>API Endpoint:</span>
                          <code className="bg-muted px-2 py-1 rounded text-xs">
                            {widget.apiEndpoint}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">REST API Access</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Direct API access for custom integrations and server-side implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {apiExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {example.title}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(example.code, `api-${example.title}`)}
                      >
                        {copiedCode === `api-${example.title}` ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Power Your Website with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers already using our AI widgets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/signup">
                <Button size="lg" className="gradient-bg text-white">
                  <Zap className="h-5 w-5 mr-2" />
                  Start Building Today
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Developer;


"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-muted border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">AI Tools BD</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Bangladeshi creators এর জন্য AI-powered tools। Content creation, 
              paraphrasing, summarizing এবং আরও অনেক কিছু।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools/paraphraser" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bangla Paraphraser
                </Link>
              </li>
              <li>
                <Link to="/tools/summarizer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Summarizer
                </Link>
              </li>
              <li>
                <Link to="/tools/caption-generator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Caption Generator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AI Tools BD. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

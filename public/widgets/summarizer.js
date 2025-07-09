
(function() {
  'use strict';
  
  // Widget configuration
  const WIDGET_CONFIG = {
    apiEndpoint: 'https://aitools-bd.com/api/summarize',
    widgetId: 'ai-summarizer',
    version: '1.0.0'
  };

  // Create widget HTML
  function createWidgetHTML() {
    return `
      <div class="ai-summarizer-widget" style="
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      ">
        <div style="margin-bottom: 16px;">
          <h3 style="
            margin: 0 0 8px 0;
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            display: flex;
            align-items: center;
            gap: 8px;
          ">
            📝 AI Text Summarizer
            <span style="
              font-size: 12px;
              background: #3b82f6;
              color: white;
              padding: 2px 8px;
              border-radius: 12px;
              font-weight: 500;
            ">AI Powered</span>
          </h3>
          <p style="
            margin: 0;
            color: #6b7280;
            font-size: 14px;
          ">
            Paste your text below and get an intelligent summary in seconds
          </p>
        </div>
        
        <div style="margin-bottom: 16px;">
          <textarea
            id="summarizer-input"
            placeholder="Paste your text here to summarize..."
            style="
              width: 100%;
              min-height: 120px;
              padding: 12px;
              border: 1px solid #d1d5db;
              border-radius: 8px;
              font-size: 14px;
              resize: vertical;
              box-sizing: border-box;
              font-family: inherit;
            "
          ></textarea>
        </div>
        
        <div style="
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 16px;
        ">
          <button
            id="summarizer-submit"
            style="
              background: linear-gradient(135deg, #3b82f6, #6366f1);
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
            "
            onmouseover="this.style.opacity='0.9'"
            onmouseout="this.style.opacity='1'"
          >
            Summarize Text
          </button>
          
          <select
            id="summarizer-length"
            style="
              padding: 8px 12px;
              border: 1px solid #d1d5db;
              border-radius: 6px;
              font-size: 14px;
              background: white;
            "
          >
            <option value="short">Short (50 words)</option>
            <option value="medium" selected>Medium (100 words)</option>
            <option value="long">Long (200 words)</option>
          </select>
        </div>
        
        <div id="summarizer-result" style="display: none;">
          <div style="
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin-top: 16px;
          ">
            <div style="
              display: flex;
              justify-content: between;
              align-items: center;
              margin-bottom: 12px;
            ">
              <h4 style="
                margin: 0;
                font-size: 16px;
                font-weight: 600;
                color: #1f2937;
              ">Summary</h4>
              <button
                id="copy-summary"
                style="
                  background: #f3f4f6;
                  border: 1px solid #d1d5db;
                  padding: 4px 8px;
                  border-radius: 4px;
                  font-size: 12px;
                  cursor: pointer;
                "
              >
                Copy
              </button>
            </div>
            <div id="summary-text" style="
              color: #374151;
              line-height: 1.6;
              font-size: 14px;
            "></div>
          </div>
        </div>
        
        <div id="summarizer-loading" style="
          display: none;
          text-align: center;
          padding: 20px;
          color: #6b7280;
        ">
          <div style="
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid #e5e7eb;
            border-top: 2px solid #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Analyzing and summarizing your text...
          </p>
        </div>
        
        <div style="
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          font-size: 12px;
          color: #9ca3af;
        ">
          Powered by <a href="https://aitools-bd.com" target="_blank" style="color: #3b82f6; text-decoration: none;">AI Tools BD</a>
        </div>
      </div>
      
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  // Initialize widget functionality
  function initializeWidget(container, apiKey) {
    const submitBtn = container.querySelector('#summarizer-submit');
    const input = container.querySelector('#summarizer-input');
    const lengthSelect = container.querySelector('#summarizer-length');
    const loading = container.querySelector('#summarizer-loading');
    const result = container.querySelector('#summarizer-result');
    const summaryText = container.querySelector('#summary-text');
    const copyBtn = container.querySelector('#copy-summary');

    submitBtn.addEventListener('click', async function() {
      const text = input.value.trim();
      if (!text) {
        alert('Please enter some text to summarize');
        return;
      }

      const lengthValue = lengthSelect.value;
      const maxLength = {
        'short': 50,
        'medium': 100,
        'long': 200
      }[lengthValue] || 100;

      // Show loading
      loading.style.display = 'block';
      result.style.display = 'none';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';

      try {
        // Simulate API call (replace with actual API integration)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock summary response
        const mockSummary = text.length > maxLength 
          ? text.substring(0, maxLength) + '...' 
          : text;
        
        summaryText.textContent = mockSummary;
        result.style.display = 'block';
      } catch (error) {
        alert('Error summarizing text. Please try again.');
        console.error('Summarizer widget error:', error);
      } finally {
        loading.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Summarize Text';
      }
    });

    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(summaryText.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 2000);
    });
  }

  // Initialize widgets when DOM is ready
  function initWidgets() {
    const containers = document.querySelectorAll('[id="' + WIDGET_CONFIG.widgetId + '"]');
    
    containers.forEach(function(container) {
      const apiKey = container.getAttribute('data-api-key');
      
      if (!apiKey || apiKey === 'YOUR_API_KEY') {
        container.innerHTML = `
          <div style="
            padding: 20px;
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 8px;
            color: #dc2626;
            text-align: center;
          ">
            <strong>API Key Required</strong><br>
            Please set your API key in the data-api-key attribute
          </div>
        `;
        return;
      }
      
      container.innerHTML = createWidgetHTML();
      initializeWidget(container, apiKey);
    });
  }

  // Auto-initialize when script loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidgets);
  } else {
    initWidgets();
  }
})();

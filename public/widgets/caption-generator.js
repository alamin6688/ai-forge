
(function() {
  'use strict';
  
  const WIDGET_CONFIG = {
    apiEndpoint: 'https://aitools-bd.com/api/generate-caption',
    widgetId: 'ai-caption-generator',
    version: '1.0.0'
  };

  function createWidgetHTML() {
    return `
      <div class="ai-caption-generator-widget" style="
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
            📸 AI Caption Generator
            <span style="
              font-size: 12px;
              background: #f59e0b;
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
            Generate engaging captions for your social media posts
          </p>
        </div>
        
        <div style="margin-bottom: 16px;">
          <textarea
            id="caption-input"
            placeholder="Describe your image or topic for caption generation..."
            style="
              width: 100%;
              min-height: 100px;
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
          flex-wrap: wrap;
        ">
          <button
            id="caption-submit"
            style="
              background: linear-gradient(135deg, #f59e0b, #d97706);
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
            "
          >
            Generate Caption
          </button>
          
          <select
            id="caption-platform"
            style="
              padding: 8px 12px;
              border: 1px solid #d1d5db;
              border-radius: 6px;
              font-size: 14px;
              background: white;
            "
          >
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
          </select>
          
          <select
            id="caption-tone"
            style="
              padding: 8px 12px;
              border: 1px solid #d1d5db;
              border-radius: 6px;
              font-size: 14px;
              background: white;
            "
          >
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
            <option value="funny">Funny</option>
            <option value="inspirational">Inspirational</option>
          </select>
        </div>
        
        <div id="caption-result" style="display: none;">
          <div style="
            background: #fffbeb;
            border: 1px solid #fde68a;
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
              ">Generated Caption</h4>
              <button
                id="copy-caption"
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
            <div id="caption-text" style="
              color: #374151;
              line-height: 1.6;
              font-size: 14px;
              white-space: pre-line;
            "></div>
            <div id="hashtags" style="
              margin-top: 12px;
              padding-top: 12px;
              border-top: 1px solid #fde68a;
              color: #f59e0b;
              font-size: 14px;
            "></div>
          </div>
        </div>
        
        <div id="caption-loading" style="
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
            border-top: 2px solid #f59e0b;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Creating the perfect caption...
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
          Powered by <a href="https://aitools-bd.com" target="_blank" style="color: #f59e0b; text-decoration: none;">AI Tools BD</a>
        </div>
      </div>
    `;
  }

  function initializeWidget(container, apiKey) {
    const submitBtn = container.querySelector('#caption-submit');
    const input = container.querySelector('#caption-input');
    const platformSelect = container.querySelector('#caption-platform');
    const toneSelect = container.querySelector('#caption-tone');
    const loading = container.querySelector('#caption-loading');
    const result = container.querySelector('#caption-result');
    const captionText = container.querySelector('#caption-text');
    const hashtags = container.querySelector('#hashtags');
    const copyBtn = container.querySelector('#copy-caption');

    submitBtn.addEventListener('click', async function() {
      const text = input.value.trim();
      if (!text) {
        alert('Please describe your image or topic');
        return;
      }

      const platform = platformSelect.value;
      const tone = toneSelect.value;

      loading.style.display = 'block';
      result.style.display = 'none';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Generating...';

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock caption generation
        const mockCaption = `Here's your ${tone} ${platform} caption based on: "${text}"

✨ This is an AI-generated caption that captures the essence of your content with the perfect ${tone} tone for ${platform}.

Ready to engage your audience! 🚀`;

        const mockHashtags = '#AI #SocialMedia #Content #Engagement #Creative';
        
        captionText.textContent = mockCaption;
        hashtags.textContent = mockHashtags;
        result.style.display = 'block';
      } catch (error) {
        alert('Error generating caption. Please try again.');
      } finally {
        loading.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Generate Caption';
      }
    });

    copyBtn.addEventListener('click', function() {
      const fullCaption = captionText.textContent + '\n\n' + hashtags.textContent;
      navigator.clipboard.writeText(fullCaption);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 2000);
    });
  }

  function initWidgets() {
    const containers = document.querySelectorAll('[id="ai-caption-generator"]');
    
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidgets);
  } else {
    initWidgets();
  }
})();

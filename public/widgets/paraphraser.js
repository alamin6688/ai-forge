
(function() {
  'use strict';
  
  const WIDGET_CONFIG = {
    apiEndpoint: 'https://aitools-bd.com/api/paraphrase',
    widgetId: 'ai-paraphraser',
    version: '1.0.0'
  };

  function createWidgetHTML() {
    return `
      <div class="ai-paraphraser-widget" style="
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
            🔄 AI Paraphraser
            <span style="
              font-size: 12px;
              background: #10b981;
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
            Rewrite your text while maintaining the original meaning
          </p>
        </div>
        
        <div style="margin-bottom: 16px;">
          <textarea
            id="paraphraser-input"
            placeholder="Enter text to paraphrase..."
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
            id="paraphraser-submit"
            style="
              background: linear-gradient(135deg, #10b981, #059669);
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
            Paraphrase Text
          </button>
          
          <select
            id="paraphraser-mode"
            style="
              padding: 8px 12px;
              border: 1px solid #d1d5db;
              border-radius: 6px;
              font-size: 14px;
              background: white;
            "
          >
            <option value="standard">Standard</option>
            <option value="fluency">Fluency</option>
            <option value="formal">Formal</option>
            <option value="simple">Simple</option>
          </select>
        </div>
        
        <div id="paraphraser-result" style="display: none;">
          <div style="
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
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
              ">Paraphrased Text</h4>
              <button
                id="copy-paraphrase"
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
            <div id="paraphrase-text" style="
              color: #374151;
              line-height: 1.6;
              font-size: 14px;
            "></div>
          </div>
        </div>
        
        <div id="paraphraser-loading" style="
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
            border-top: 2px solid #10b981;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Rewriting your text...
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
          Powered by <a href="https://aitools-bd.com" target="_blank" style="color: #10b981; text-decoration: none;">AI Tools BD</a>
        </div>
      </div>
    `;
  }

  function initializeWidget(container, apiKey) {
    const submitBtn = container.querySelector('#paraphraser-submit');
    const input = container.querySelector('#paraphraser-input');
    const modeSelect = container.querySelector('#paraphraser-mode');
    const loading = container.querySelector('#paraphraser-loading');
    const result = container.querySelector('#paraphraser-result');
    const paraphraseText = container.querySelector('#paraphrase-text');
    const copyBtn = container.querySelector('#copy-paraphrase');

    submitBtn.addEventListener('click', async function() {
      const text = input.value.trim();
      if (!text) {
        alert('Please enter some text to paraphrase');
        return;
      }

      loading.style.display = 'block';
      result.style.display = 'none';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';

      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock paraphrase (replace with actual API)
        const mockParaphrase = "This is a paraphrased version of your text. " + text.split(' ').reverse().join(' ');
        
        paraphraseText.textContent = mockParaphrase;
        result.style.display = 'block';
      } catch (error) {
        alert('Error paraphrasing text. Please try again.');
      } finally {
        loading.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Paraphrase Text';
      }
    });

    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(paraphraseText.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 2000);
    });
  }

  function initWidgets() {
    const containers = document.querySelectorAll('[id="ai-paraphraser"]');
    
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

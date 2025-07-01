import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Define the callback before loading the script
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn,ta,te,ml,kn,gu,pa,mr,or,as,ur,ne,si',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Add Google Translate script to the page
    const addScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; // use https
      script.async = true;
      document.body.appendChild(script);
    };

    // Load script if not already present
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    // Poll for widget readiness
    const interval = setInterval(() => {
      const el = document.getElementById('google_translate_element');
      if (
        window.google &&
        window.google.translate &&
        el &&
        el.innerHTML.includes('goog-te-gadget')
      ) {
        setIsLoaded(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleTranslateClick = () => {
    const translateElement = document.getElementById('google_translate_element');
    if (!translateElement) return;

    // Try to find the select dropdown
    const selectElement = translateElement.querySelector('select');
    if (selectElement) {
      selectElement.focus();
      selectElement.click();
      // Optionally, open the dropdown with a keyboard event
      const event = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      selectElement.dispatchEvent(event);
      return;
    }

    // Try to find the Google Translate menu button
    const translateButton = translateElement.querySelector('.goog-te-menu-value');
    if (translateButton) {
      (translateButton as HTMLElement).click();
    }
  };

  return (
    <>
      {/* Hidden but interactive Google Translate Element */}
      <div
  id="google_translate_element"
  style={{
    position: 'fixed',
    bottom: '80px',
    right: '24px',
    zIndex: 9999,
    background: 'white',
    padding: '8px',
    borderRadius: '8px',
    opacity: 1, // <--- make visible for debugging
  }}
></div>

      {/* Floating Translate Button */}
      <Button
       aria-label="Translate"
        onClick={handleTranslateClick}
        disabled={!isLoaded}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700"
        size="icon"
        title="Translate this page" 
      >
        <Languages className="h-6 w-6" />
      </Button>

      {/* Custom styles to hide Google Translate branding */}
      <style>{`
        .goog-te-banner-frame {
          display: none !important;
          height: 0 !important;
          visibility: hidden !important;
        }
        body {
          top: 0 !important;
        }
        #goog-gt-tt, .goog-te-balloon-frame {
          display: none !important;
        }
        .goog-text-highlight {
          background: none !important; box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default GoogleTranslate;
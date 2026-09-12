import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    ['en', 'English'],
    ['hi', 'Hindi'],
    ['bn', 'Bengali'],
    ['ta', 'Tamil'],
    ['te', 'Telugu'],
    ['ml', 'Malayalam'],
    ['kn', 'Kannada'],
    ['gu', 'Gujarati'],
    ['pa', 'Punjabi'],
    ['mr', 'Marathi'],
    ['or', 'Odia'],
    ['as', 'Assamese'],
    ['ur', 'Urdu'],
    ['ne', 'Nepali'],
    ['fr', 'French'],
    ['es', 'Spanish'],
    ['de', 'German'],
    ['ar', 'Arabic'],
    ['zh-CN', 'Chinese'],
    ['ja', 'Japanese'],
    ['ko', 'Korean'],
  ];

  useEffect(() => {
    const initializeTranslate = () => {
      const element = document.getElementById('google_translate_element');

      if (!window.google?.translate || !element || element.dataset.initialized) {
        return;
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn,ta,te,ml,kn,gu,pa,mr,or,as,ur,ne,si,fr,zh-CN,es,ar,de,ru,pt,ja,it,ko',
          autoDisplay: false,
        },
        'google_translate_element'
      );

      element.dataset.initialized = 'true';
    };

    window.googleTranslateElementInit = initializeTranslate;

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; // use https
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      initializeTranslate();
    }

    const interval = setInterval(() => {
      initializeTranslate();
      const el = document.getElementById('google_translate_element');

      if (el?.querySelector('select')) {
        setIsLoaded(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleLanguageChange = (language: string) => {
    const translateElement = document.getElementById('google_translate_element');
    if (!translateElement) return;

    const selectElement = translateElement.querySelector('select') as HTMLSelectElement | null;
    if (!selectElement) return;

    selectElement.value = language;
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hidden but interactive Google Translate Element */}
      <div
        id="google_translate_element"
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '-10000px',
          top: '0',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />

      <div className="fixed bottom-6 right-6 z-50">
        {isMenuOpen && (
          <div
            className="absolute bottom-14 right-0 grid max-h-80 w-48 grid-cols-2 gap-1 overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-xl sm:bottom-16"
            role="menu"
            aria-label="Choose a translation language"
          >
            {languages.map(([code, name]) => (
              <button
                key={code}
                type="button"
                role="menuitem"
                onClick={() => handleLanguageChange(code)}
                className="rounded px-2 py-2 text-left text-xs text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-700"
              >
                {name}
              </button>
            ))}
          </div>
        )}

        <Button
          aria-label="Choose translation language"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-green-600 shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-green-700 hover:shadow-xl sm:h-14 sm:w-14"
          size="icon"
          title="Translate this page"
        >
          <Languages className="h-6 w-6" />
        </Button>
      </div>

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
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type FontScale = 'small' | 'medium' | 'large';

interface FontScaleContextType {
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
}

const FontScaleContext = createContext<FontScaleContextType | undefined>(undefined);

const scaleClasses: Record<FontScale, string> = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

export function FontScaleProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScale] = useState<FontScale>('medium');

  useEffect(() => {
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
    document.documentElement.classList.add(`font-${fontScale}`);
  }, [fontScale]);

  return (
    <FontScaleContext.Provider value={{ fontScale, setFontScale }}>
      <div className={scaleClasses[fontScale]}>{children}</div>
    </FontScaleContext.Provider>
  );
}

export function useFontScale() {
  const context = useContext(FontScaleContext);
  if (!context) {
    throw new Error('useFontScale must be used within FontScaleProvider');
  }
  return context;
}

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DefaultProviderProps } from '@/types/context';

// Define the shape of the context's value
interface GlobalThemeContextProps {
  theme: 'light' | 'dark'; // Current theme state
  setThemeState: (newValues: Partial<GlobalThemeContextProps>) => void; // Function to update theme state
}

// Create a context with an initial undefined state
const GlobalThemeContext = createContext<GlobalThemeContextProps | undefined>(
  undefined
);

// Default theme settings (used as fallback)
const defaultThemeSetting: GlobalThemeContextProps = {
  theme: 'light',
  setThemeState: () => {}, // Placeholder function (will be replaced in state)
};

// GlobalThemeProvider: Manages theme state and persists it in localStorage
export function GlobalThemeProvider({ children }: DefaultProviderProps) {
  /**
   * Loads the theme settings from localStorage, if available.
   * If no settings are found, it returns the default theme.
   */
  const loadTheme = (): GlobalThemeContextProps => {
    try {
      const cachedTheme = localStorage.getItem('themeSettings');
      if (cachedTheme) {
        return JSON.parse(cachedTheme);
      }
    } catch (error) {
      alert(error); // Notify user in case of JSON parsing error
    }
    return defaultThemeSetting;
  };

  // Initialize theme settings state with stored values or defaults
  const [themeSettings, setThemeSettings] = useState<GlobalThemeContextProps>(
    loadTheme()
  );

  /**
   * Updates the theme state by merging new values with the existing theme settings.
   */
  const setThemeState = useCallback(
    (newValues: Partial<GlobalThemeContextProps>) => {
      setThemeSettings((prevTheme) => ({
        ...prevTheme,
        ...newValues,
      }));
    },
    []
  );

  // Apply the selected theme to `<html>` whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeSettings.theme);
  }, [themeSettings.theme]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      ...themeSettings,
      setThemeState,
    }),
    [themeSettings, setThemeState]
  );

  /**
   * Effect: Saves the theme settings to localStorage whenever they change.
   */
  useEffect(() => {
    localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
  }, [themeSettings]);

  return (
    <GlobalThemeContext.Provider value={value}>
      {children}
    </GlobalThemeContext.Provider>
  );
}

/**
 * Custom hook to consume the `GlobalThemeContext`.
 * Ensures that it is only used within a `GlobalThemeProvider`.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalThemeContext = () => {
  const context = useContext(GlobalThemeContext);

  if (context === undefined) {
    throw new Error(
      'useGlobalThemeContext must be used within GlobalThemeProvider'
    );
  }

  return context;
};

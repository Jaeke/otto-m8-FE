import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalThemeProvider } from './context/GlobalTheme/GlobalThemeProvider';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <GlobalThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalThemeProvider>
);

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { GlobalThemeProvider } from './context/GlobalTheme/GlobalThemeProvider';

createRoot(document.getElementById('root')!).render(
  <GlobalThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalThemeProvider>
);

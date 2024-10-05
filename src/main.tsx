import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from './styles';
import { QueryProvider } from './api';

import Pages from './pages/pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <QueryProvider>
        <Pages />
      </QueryProvider>
    </ChakraProvider>
  </StrictMode>,
);

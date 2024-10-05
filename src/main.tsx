import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Pages from './pages/pages';
import { ChakraProvider } from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Pages />
    </ChakraProvider>
  </StrictMode>,
);

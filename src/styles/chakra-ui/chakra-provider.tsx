import { ChakraProvider as Provider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import theme from './theme';

export default function ChakraProvider({ children }: PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}

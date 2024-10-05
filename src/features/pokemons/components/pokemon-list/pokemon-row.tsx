import { HStack, Stack, Text } from '@chakra-ui/react';

type PokemonRowProps = {
  name: string;
  url: string;
};

export default function PokemonRow({ name, url }: PokemonRowProps) {
  return (
    <HStack>
      <Stack>
        <Text>{name}</Text>
        <Text>{url}</Text>
      </Stack>
    </HStack>
  );
}

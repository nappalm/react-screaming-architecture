import { HStack, Stack, Text } from '@chakra-ui/react';
import { Game } from '../../../../api/rawg.io';

export default function GameRow(props: Game) {
  return (
    <HStack>
      <Stack>
        <Text>{props.name}</Text>
      </Stack>
    </HStack>
  );
}

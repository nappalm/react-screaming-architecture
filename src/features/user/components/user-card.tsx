import { Avatar, Card, CardBody, HStack, Stack, Text } from '@chakra-ui/react';

export default function UserCard() {
  return (
    <Card>
      <CardBody>
        <HStack gap={3}>
          <Avatar />
          <Stack spacing={0}>
            <Text fontWeight={500}>John Doe</Text>
            <Text fontSize="sm" color="gray.500">
              john.doe@example.com
            </Text>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  );
}

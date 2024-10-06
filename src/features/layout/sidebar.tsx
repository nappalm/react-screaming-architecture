import { Box } from '@chakra-ui/react';
import { UserCard } from '../user';

export default function Sidebar() {
  return (
    <Box bg="gray.800" color="white" p={4} minH="100vh">
      <UserCard />
      <Box mb={4}>Home</Box>
      <Box mb={4}>About</Box>
      <Box mb={4}>Contact</Box>
    </Box>
  );
}

import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import { SETTINGS } from './layout.settings';

export default function Layout() {
  return (
    <Grid templateColumns={`${SETTINGS.defaultWidth}px 1fr`} minH="100vh">
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem>
        <Box p={4} as="main">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}

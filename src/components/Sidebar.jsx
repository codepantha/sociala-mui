import { Box } from '@mui/material';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      bgcolor="cyan"
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', md: 'block' } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;

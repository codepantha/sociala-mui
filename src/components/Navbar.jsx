import React from 'react'
import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import { ConnectWithoutContact } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: {xs: 'none', sm: 'block' }}}>Sociala</Typography>
        <ConnectWithoutContact sx={{ display: { xs: 'block', sm: 'none' }}} />
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
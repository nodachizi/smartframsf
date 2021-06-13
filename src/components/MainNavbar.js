import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';
import {RiPlantFill } from 'react-icons/ri'

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
      <RiPlantFill size="2em" color="white"/>
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;

import { useState } from 'react';
//import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  AppBar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Dialog,
  Slide,
  makeStyles,
  Toolbar,
  IconButton,
  Autocomplete,
  Grid, 
  MenuItem,
  InputLabel,
  Select,
  Container
  
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import typography from 'src/theme/typography';
import Minerals from 'src/components/dashboard/Minerals';
import { Padding } from '@material-ui/icons';
import theme from 'src/theme';
import CustomerList from 'src/components/Waterpump mode/CustomerListToolbar';


export default function Timeresult () {
  var i=1;
  var j=3;
  const item=[];
  const [unit,setUnit]=useState({
    i: 1,
    j: 2,
    mode: 'ทำงานในโหมด Auto',


  })
  

  for(i;i<j;i++){
    item.push(
      
      <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
        
      }}
    >
      <Container maxWidth={false}>
         
        <Grid
          container
          spacing={3}
        >
         
         <Grid
                  item
                 xs={2}
                >
                
                 
                </Grid>
          
          <Grid
            item
            xs={8}
          >
            <Grid spacing={3}>
           
            </Grid>
            <CustomerList sx={{ height: '100%' }} unit={unit} setUnit={setUnit} />
          </Grid>
          
          
          
        </Grid>
      </Container>
    </Box>
    )
  }

  
  return(
   
    <List >{item}</List>
  )
}




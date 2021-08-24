import axios from 'axios';
import React, { useEffect } from 'react';
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
  const [num,setNum]=React.useState({
      Number: "",
    });
  const [mdata,setMdata]=React.useState({
      data: null,
    });
    const [total,setTotal]=React.useState({
      Number: 0,
    });
    const HandleClick2 = async e => {
        if(num.Number == ""){
          alert("SN ไม่สามารถว่างได้")
        }
        else{
        const {data} = await axios.post('http://sstwork.thddns.net:7771/smartfarm/addsn.php', JSON.stringify({
            user: localStorage.getItem('user'),
            sn: num.Number,
            type: "c",
          }));
        alert({data}.data.error)
        window.location.reload(false);
        }
      }
  var i=0;
  var j=2;
  var k=6;
  const item=[];
  
  

  for(i = 0;i< 2;i++){
    
       item.push(
        <Container maxWidth={false}>
        <p>SN Update ล่าสุดเมื่อ xxx:xxx </p>
       <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
      > 
         <Button 
           size ="medium"
          variant="contained"
          
          color="secondary">
          Delete
        </Button>
      </Grid>
      </Container>
      )

      for(j = 0;j<4;j++){
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
            <CustomerList sx={{ height: '100%' }}  />
          </Grid>
          
          
          
        </Grid>
      </Container>
    </Box>
         )
      }
    item.push(
        <div>
      <br></br>
      <p></p>
      <br></br>
      <p></p>
      <br></br>
      </div>

      )
  }

  
  return(
     <div>
       <div>
              <br></br>
              <br></br>
             </div>
            <Grid container >  
               <Grid item >   </Grid>
             </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}
              >
             
              <TextField id="filled-basic"
               size="small"
               label="Number"
               variant="filled"
               //value= {num.Number}
               margin="dense"
               onChange={e => setNum(
                 {
                   Number: e.target.value
                 }
               )}
                />
                 <Grid item >   </Grid>
                <Button 
                size ="medium"
                variant="contained"
                onClick={HandleClick2}
                color="primary">
                    submit
                </Button>
             
             <Grid item ><p>  </p> </Grid>
               
              </Grid>

              <br></br>
              <br></br>
              <br></br>
        {item}
     </div>
    
  )
}




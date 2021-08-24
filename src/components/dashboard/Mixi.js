import { Link as RouterLink, BrowserRouter as Router ,Route, Navigate, useNavigate} from 'react-router-dom';

import Humudity from 'src/components/dashboard/Humudity';
import React, { useEffect } from 'react';
//import Sales from 'src/components/dashboard//Sales';
import PH from 'src/components/dashboard/PH';
import EC from 'src/components/dashboard/EC';
import Temp from 'src/components/dashboard/Temp';
import Minerals from 'src/components/dashboard/Minerals';
import Sales from 'src/components/dashboard//Sales';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button
  } from '@material-ui/core';
import { setNestedObjectValues } from 'formik';
import axios from 'axios';

  export default function Mixi (){
    const navigate = useNavigate();
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
          }));
        alert({data}.data.error)
        }
      }

    const HandleClick = async e => {
        
      }

    const getdata = async e => {
      const {data} = await axios.post('http://sstwork.thddns.net:7771/smartfarm/selectm.php', JSON.stringify({
            user: localStorage.getItem('user'),
          }));
      setMdata({
        data: {data}.data,
      });
      setTotal({
        Number: {data}.data.lenght,
      });
      console.log({data}.data[0]);
      console.log({data}.data[1]);
    }

    useEffect(() => {
      if(total.Number == 0){
        getdata();
      }
    });

      var i=0;
      

       // j= parseInt(localStorage.getItem('total'));
      const itep=[];

      for(i=0; i<total.Number ; i++) {
         
        
           itep.push(
            <Box
            sx={{
              backgroundColor: 'background.default',
              minHeight: '100%',
              py: 3
            }}
          >
            <Container maxWidth={false}>
                 
                <Typography>
                    {mdata.data[i].SN}   Update ล่าสุดเมื่อ {mdata.data[i].update_time}
                </Typography>
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
                    onClick={HandleClick}
                    color="secondary">
                    Delete
                  </Button>
                </Grid>
                <br></br>
              <Grid
                container
                spacing={3}
              >
               
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                
                  <Humudity data = {mdata.data[i].Humid}/>
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <EC data = {mdata.data[i].EC}/>
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <PH data = {mdata.data[i].PH}/>
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <Temp data = {mdata.data[i].Temp} sx={{ height: '100%' }} />
                </Grid>
                
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
                >
                  <Minerals Ndata = {mdata.data[i].N} Pdata = {mdata.data[i].P} Kdata = {mdata.data[i].K} sx={{ height: '100%' }} />
                </Grid>
                <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
                >
                <Sales />
                </Grid>
                
                
              </Grid>
            </Container>
          </Box>
                    
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
               value= {num.Number}
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
             
             
               
              </Grid>
              
            
              {itep}
          </div>
      )
  }
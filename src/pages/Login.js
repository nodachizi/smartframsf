import { Link as RouterLink, BrowserRouter as Router ,Route, Navigate, useNavigate} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  makeStyles,
  createStyles,
  Typography
} from '@material-ui/core';
import React from 'react';
import FacebookIcon from 'src/icons/Facebook';
import GoogleIcon from 'src/icons/Google';
import axios from 'axios';



    const useStyles = makeStyles(() => createStyles({
      root: {
        color : 'red',
        BorderColor: 'red',
        fontFamily: 'roboto'
      },
    }));
  
   export default function Login() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [value,setValue]=React.useState({
      Username: "" ,
      Password: "",
      CPassword: "",
      Error: null,
    });
    
    if(localStorage.getItem('user') != null){
      //Auto Logout
        localStorage.clear();
    }
    
    

    const HandleSubmit = async e => {

         confirm("Press a button!");
      if(value.Username == '' ){     
          alert("Username ไม่สามารถว่าง")
          window.location.reload();
        
        
      }
      if(value.Password == ''){
        alert("Password ไม่สามารถว่าง")
          window.location.reload();
      }

      
      if(value.Username != '' && value.Password != ''){

        const {data} = await axios.post('http://sstwork.thddns.net:7771/smartfarm/verify.php', JSON.stringify({
            username: value.Username,
            password: value.Password,
          }));
          console.log({data}.data);

          if({data}.data.error =='Wrong Username or Password'){
            alert("Username หรือ Password ไม่ถูกต้อง")
              window.location.reload();
          }

          else {
            alert({data}.data.error)
            localStorage.setItem('user',{data}.data.username)
            navigate('/app/dashboard', { replace: true });
          }
         
         
      }
     

     
    }

    return (

      //-----------------------------------


      //-----------------------------------
    
      
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
          
        }}
        
      >
        <Container maxWidth="sm">
            
                <Typography
                  color="textSecondary"
                  variant="body1"
                  
                >
                  Username  
                </Typography>
                <TextField 
                 //todo ใส่ username
                label="" 
                value={value.Username} 
                fullWidth
                onChange={e => setValue(
                  {
                  Username: e.target.value,
                  Password: value.Password,
                  CPassword: value.COPassword,
                  Error: null,
                  //ด้านล่างลบออกเมื่อไม่ใช้
                  id: null,
                  pass: null,
                  }
                  )}  
               
                />

                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Password
                </Typography>
                <TextField 
                //todo password
                type="password"
                value={value.Password} 
                fullWidth
                onChange={e => setValue(
                  {
                  Username: value.Username ,
                  Password: e.target.value,
                  COPassword: value.COPassword,
                  Error: null,
                  //ด้านล่างลบออกเมื่อไม่ใช้
                  id: null,
                  pass: null,
                  }
                  )}  
               
                />
                
 
                  <Box sx={{ py: 2 }} onClick={HandleSubmit}> //todo ปุ่ม sign up
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                
                <Typography
                  color="textSecondary"
                  variant="body1"
                  
                >
                 ล็อกอินด้วยการใส่โค้ด
                  
                </Typography>
               
                <TextField 
                //todo ใส่ password ซ้ำ
                     value={value.COPassword} 
                     fullWidth
                     onChange={e => setValue(
                  {
                  Username: value.Username ,
                  Password: value.Password,
                  COPassword: e.target.value,
                  
                  //ด้านล่างลบออกเมื่อไม่ใช้
                  id: null,
                  pass: null,
                  }
                  )}  
               
                />
                
                
                
                <Box sx={{ py: 2 }} onClick={HandleSubmit}> //todo ปุ่ม sign up
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    submit
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Do you have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
               
               
        </Container>
      </Box>
    
  )
   }
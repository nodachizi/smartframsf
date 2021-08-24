import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  FormControl,
  makeStyles,
  createStyles
} from '@material-ui/core';
import React from 'react';
import { functions } from 'lodash-es';
import { BorderColor } from '@material-ui/icons';
import axios from 'axios';


function  isUserRequired(val) {
  return val.length > 0 ? '' : 'User cannot be blank'
 
}

function  isPassRequired(val) {
  return val.length > 0 ? '' : 'Password cannot be blank'
  
}

function  isCPassRequired(val) {
  return val.length > 0 ? '' : 'CPassword cannot be blank'
  
}

const useStyles = makeStyles(() => createStyles({
  root: {
    color : 'red',
    BorderColor: 'red',
    fontFamily: 'roboto'
  },
}));

export default function Register() {
    const classes = useStyles();
  
    const [value,setValue]=React.useState({
      Username: "" ,
      Password: "",
      CPassword: "",
      Error: null,
    });
    const [errors,setErrors]=React.useState([]);
    const [perrors,setPErrors]=React.useState([]);
    const [cperrors,setCPErrors]=React.useState([]);

    function validateU(validations){

      setErrors(validations.map(errorsFor => errorsFor(value.Username)) );
          
    }
  
    function validateP(validations){

      setPErrors(validations.map(errorsFor => errorsFor(value.Password)) )  
      
    }

    function validateCP(validations){

      setCPErrors(validations.map(errorsFor => errorsFor(value.CPassword)) )  
      
    }

    const HandleSubmit = async e => {
      var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if(format.test(value.Username) ){
           alert("ห้ามมีตัวอักษรพิเศษหรือช่องว่าง2")
      }
      if(format.test(value.Password) ){
        alert("ห้ามมีตัวอักษรพิเศษหรือช่องว่าง")
      }
        
      setValue({
          Username: value.Username ,
          Password: value.Password,
          CPassword: value.CPassword,
          Error: "กดแล้ว",
        });
      if(value.Username == ''){
        setValue({
          Username: value.Username ,
          Password: value.Password,
          CPassword: value.CPassword,
          Error: "Username ไม่สามารถว่าง",
        });
        alert("Username ไม่สามารถว่าง");
        return;
      }
      if(value.Password == ''){
        setValue({
          Username: value.Username ,
          Password: value.Password,
          CPassword: value.CPassword,
          Error: "Password ไม่สามารถว่าง",
        });
        alert("Password ไม่สามารถว่าง");
        return;
      }
      if(value.CPassword == ''){
        setValue({
          Username: value.Username ,
          Password: value.Password,
          CPassword: value.CPassword,
          Error: "CPassword ไม่สามารถว่าง",
        });
        alert("CPassword ไม่สามารถว่าง");
        return;
      }

      if(value.Password != value.CPassword){
        setValue({
          Username: value.Username ,
          Password: value.Password,
          CPassword: value.CPassword,
          Error: "รหัสผ่านกับยืนยันรหัสผ่านไม่ตรงกัน",
        });
        alert("รหัสผ่านกับยืนยันรหัสผ่านไม่ตรงกัน");
        return;
      }

      //ต่อ DB

      const {data} = await axios.post('http://sstwork.thddns.net:7771/smartfarm/register_save.php', JSON.stringify({
            username: value.Username,
            password: value.Password,
      }));
        setValue({
          Username: value.Username ,
          Password: value.Password,
          CPassword: value.CPassword,
          Error: {data}.data.error,
        });
        alert({data}.data.error);

      //------

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

            <p></p>

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
                onChange={e => setValue(
                  {
                  Username: e.target.value,
                  Password: value.Password,
                  CPassword: value.CPassword,
                  //ด้านล่างลบออกเมื่อไม่ใช้
                  }
                  )}  
                onBlur={() => {
                  validateU([isUserRequired])
                }}
                fullWidth
                margin="normal"
                />
                {errors.length > 0 //todo check การใส่่ค่าลงไปใน textfield
                  ? (<div className={classes.root}>{errors.join(", ")}</div>
                  ) : null
                   
                   }

                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Password
                </Typography>
                <TextField 
                type="password"
                //todo password
                value={value.Password} 
                onChange={e => setValue(
                  {
                  Username: value.Username ,
                  Password: e.target.value,
                  CPassword: value.CPassword,
                  //ด้านล่างลบออกเมื่อไม่ใช้
                  }
                  )}  
                onBlur={() => {
                  validateP([isPassRequired])
                }}
                fullWidth
                margin="normal"
                />
                {errors.length > 0
                  ? (<div className={classes.root}>{perrors.join(",")}</div>
                  ) : null
                   
                   }

                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  ConfirmPassword
                </Typography>
                <TextField 
                type="password"
                //todo ใส่ password ซ้ำ
                value={value.CPassword} 
                onChange={e => setValue(
                  {
                  Username: value.Username ,
                  Password: value.Password,
                  CPassword: e.target.value,
                  //ด้านล่างลบออกเมื่อไม่ใช้
                  }
                  )}  
                onBlur={() => {
                  validateCP([isCPassRequired])
                }}
                fullWidth
                margin="normal"
                />
                {errors.length > 0
                  ? (<div className={classes.root}>{cperrors.join(",")}</div>
                  ) : null
                   
                   }
                
                <Box sx={{ py: 2 }} onClick={HandleSubmit}> 
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                  
               
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                  </Link>
                </Typography>
        </Container>
      </Box>
    
  )
};



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

function  isUserRequired(val) {
  return val.length > 0 ? '' : 'User cannot be blank'
 
}

function  isPassRequired(val) {
  return val.length > 0 ? '' : 'Password cannot be blank'
  
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
      Username: null ,
      Password: null,
    });
    const [errors,setErrors]=React.useState([]);
    const [perrors,setPErrors]=React.useState([]);

    function validateU(validations){
    
      setErrors(validations.map(errorsFor => errorsFor(value)) )
         
          
    }
  
    function validateP(validations){

      setPErrors(validations.map(errorsFor => errorsFor(value)) )  
      
    }
   
  return (
    
      
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
                
                label="" 
                value={value.Username} 
                onChange={e => setValue(e.target.value)}  
                onBlur={() => {
                  validateU([isUserRequired])
                }}
                fullWidth
                margin="normal"
                />
                {errors.length > 0
                  ? (<div className={classes.root}>{errors.join(", ")}</div>
                  ) : null
                   
                   }

                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Paswword
                </Typography>
                <TextField 
                
                value={value.Password} 
                onChange={e => setValue(e.target.value)}  
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



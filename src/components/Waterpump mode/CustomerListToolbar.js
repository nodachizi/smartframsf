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
  CardHeader,
  Switch,
  FormGroup,
  FormControlLabel,
  Slider,

  
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Search as SearchIcon } from 'react-feather';

import React from 'react';
import { Mode } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    margin: theme.spacing(3),
    flex: 1,
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 300,
    flex: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}));




 export default function CustomerListToolbar ({unit,setUnit})  {
  
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked ,
      checkedB: false,
      checkedC: false

    });
    if(session.onoff == "disable"){
      setSession({
       onoff:"enable",
        Auto:"disable"
    
    }
     )
   
    }
    if(session.onoff == "enable"){

      setSession({
       onoff:"disable",
        Auto: "disable"
    })
   
    }
    
   
  };

  const handleChange1 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked ,
      checkedA:false,
      checkedC:false
    });
    if(session.Auto == "disable"){
      setSession({
        Auto:"enable",
        Timer:"enable",
        onoff: "disable",
      })
    }
    if(session.Auto == "enable"){
      setSession({
        Auto:"disable",
        Timer:"enable",
        onoff: "disable",
      })
    }
    
   
  };
  
  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked ,
      checkedA:false,
      checkedB:false
    });
    if(session.Timer == "disable"){
      setSession({
        Timer:"enable",
        Timer:"enable",
        onoff: "disable",
      })
    }
    if(session.Timer == "enable"){
      setSession({
        Timer:"disable",
        onoff: "disable",
        Auto:"disable"
      })
    }
    
   
  };
 
  //todo ตัวเก็บค่าไปทำการแสดง
  const [session,setSession]= React.useState({
   mode: null,
   Time: null,  
   name: null, 
   
  onoff:"disable",
   Auto:"disable",
   Timer:"disable"
   
  });

  function valuetext(value) {
    return `${value}°C`;
  }
  
  
 
  const name =`relaynumber${unit.i}`
 

  
      //todo เลือกโหมดการทำงาน
    if(session.k == "enable"){
      return(
        <Card>
        <CardHeader title= {name}/>
        <Divider/>
        <CardContent>
            <Box
             sx={{
              
              position: 'relative'
            }}
            >
                 <FormGroup >
                 <Typography component="div" >
                      <Grid component="label" container alignItems="center" spacing={1}>
                          <Grid item>Off</Grid>
                          <Grid item>
                          <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                           </Grid>
                        <Grid item>On</Grid>
                    </Grid>
                    </Typography>
                    <Typography component="div" >
                      <Grid  container alignItems="center" spacing={1} >
                          <Grid item>Op</Grid>
                          <Grid item >
                          <Switch checked={state.checkedB} onChange={handleChange1} name="checkedB" />
                           </Grid>
                        <Grid item>Op</Grid>
                        <Slider
                                   defaultValue={30}
                                   getAriaValueText={valuetext}
                                   aria-labelledby="discrete-slider"
                                   valueLabelDisplay="auto"
                                   step={10}
                                   marks
                                   min={10}
                                   max={110}
                                   
                                />
                    </Grid>
                    </Typography>

                              <Slider
                                   defaultValue={30}
                                   getAriaValueText={valuetext}
                                   aria-labelledby="discrete-slider"
                                   valueLabelDisplay="auto"
                                   step={10}
                                   marks
                                   min={10}
                                   max={110}
                                   
                                />
                </FormGroup>
            </Box>
        </CardContent>
      </Card>
      )
    }
    
   if(session.Auto == "enable"){
    return(
      <Card>
      <CardHeader title= {name}/>
      <Divider/>
      <CardContent>
          <Box
           sx={{
            
            position: 'relative'
          }}
          >
               <FormGroup >
               <Typography component="div" >
                    <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>Off</Grid>
                        <Grid item>
                        <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                         </Grid>
                      <Grid item>On</Grid>
                  </Grid>
                  </Typography>
                  <Typography component="div" >
                      <Grid component="label" container alignItems="center" spacing={1}>
                          <Grid item>Op</Grid>
                          <Grid item>
                          <Switch checked={state.checkedB} onChange={handleChange1} name="checkedB" />
                           </Grid>
                        <Grid item>Op</Grid>
                    </Grid>
                    </Typography>
                            <Slider
                                 defaultValue={30}
                                 getAriaValueText={valuetext}
                                 aria-labelledby="discrete-slider"
                                 valueLabelDisplay="auto"
                                 step={10}
                                 marks
                                 min={10}
                                 max={110}
                                 disabled
                              />
                              <Slider
                                 defaultValue={30}
                                 getAriaValueText={valuetext}
                                 aria-labelledby="discrete-slider"
                                 valueLabelDisplay="auto"
                                 step={10}
                                 marks
                                 min={10}
                                 max={110}
                                
                              />
              </FormGroup>
          </Box>
      </CardContent>
    </Card>
    )
   }
   else 
      return(
        <Card>
        <CardHeader title= {name}/>
        <Divider/>
        <CardContent>
            <Box
             sx={{
              
             
            }}
            >
                 <FormGroup >
                 <Typography component="div" >
                      <Grid component="label" container alignItems="center" spacing={1}>
                          <Grid item>Off</Grid>
                          <Grid item>
                          <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                           </Grid>
                        <Grid item>On</Grid>
                       
                            <Grid item>
                            <Switch checked={state.checkedB} onChange={handleChange1} name="checkedB" />
                             </Grid>
                          <Grid item>Auto</Grid>
                          <Grid item>
                            <Switch checked={state.checkedC} onChange={handleChange2} name="checkedC" />
                             </Grid>
                          <Grid item>Timer</Grid>
                           
                    </Grid>
                    </Typography>
                   
                              <Slider
                                   defaultValue={30}
                                   getAriaValueText={valuetext}
                                   aria-labelledby="discrete-slider"
                                   valueLabelDisplay="auto"
                                   step={10}
                                   marks
                                   min={10}
                                   max={110}
                                   disabled
                                />
                                <Slider
                                   defaultValue={30}
                                   getAriaValueText={valuetext}
                                   aria-labelledby="discrete-slider"
                                   valueLabelDisplay="auto"
                                   step={10}
                                   marks
                                   min={10}
                                   max={110}
                                   disabled
                                />

                                <TextField
                                        disabled
                                        id="time"
                                        label="ตั้งเวลาการทำงาน"
                                        type="time"
                                        defaultValue="07:30"
                                        className={classes.textField}
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                        inputProps={{
                                          step: 300, // 5 min
                                        }}
                                      />
                </FormGroup>
                
            </Box>
           
        </CardContent>
      </Card>
   )
      
  
 };



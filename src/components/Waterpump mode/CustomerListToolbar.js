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
  Select
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

}));

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) => `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`,
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


 export default function CustomerListToolbar ()  {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //todo ตัวเก็บค่าไปทำการแสดง
  const [session,setSession]= React.useState({
   mode: null,
   Time: null,  
   name: null, 
   Auto: null,
  });
 
  const [age, setAge] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
      //todo เลือกโหมดการทำงาน
  const handleChange = (event) => { 
    setAge(event.target.value)
    if(age==10){
      setSession({
        mode: "Auto"

    })
    }
    
  
  };
    
    return(
      <Box >
         <Box
           sx={{
           display: 'flex',
           justifyContent: 'flex-end'
           
        }}
    >
      
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
         เลือก Mode
       </Button>
       <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              โหมดปั้มน้ำ
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>  //! ไม่สำคัญ
            <ListItemText primary="sds" secondary="" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="" secondary="" />
          </ListItem>
          <Grid container spacing={3} paddingLeft={5} >
          <Grid item xs={12} className={classes.formControl}>
          <InputLabel id="modee">Mode</InputLabel>
             <Select
                 labelId="โหมดการทำงาน"
                  id="modee"
                  value={age}
                  onChange={handleChange}
                  
              >
                  <MenuItem value={10} >Auto/ทำงานอัตโนมัติ</MenuItem>
                  <MenuItem value={20} >Timer/ตั้งเวลา</MenuItem>
              </Select>
            </Grid>
             
            <Grid item xs={12} paddingLeft={2}>
              <TextField id="name" label="ชื่อ" variant="outlined"/>
            </Grid>
            <Grid item >
            <Autocomplete                //todo ตัวตังเวลา
            id="disabled-options-demo"
              options={timeSlots}
              getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
              style={{ width: 300 }}
              renderInput={(params) => (
            <TextField {...params} label="ตั้งเวลา" variant="outlined" />
               )}
          />
            </Grid>
          
          </Grid>
          
        </List>
      </Dialog>
      </Box>
    
    </Box>
     
  )
  
 };



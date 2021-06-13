import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import {BiAlarmAdd} from 'react-icons/bi'

const Popupmodal = async e =>{}

const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      
      <Button
        color="primary"
        variant="contained"
        onClick={Popupmodal}
      >
        <BiAlarmAdd size="2em"/>
        เพิ่มเวลา
      </Button>
    </Box>
    
  </Box>
);

export default CustomerListToolbar;

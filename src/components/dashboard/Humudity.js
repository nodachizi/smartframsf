import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { blue } from '@material-ui/core/colors';
import OpacityIcon from '@material-ui/icons/Opacity';


const Humudity = (props) => (
  
 
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h4"
          >
            ค่าความชื้น
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            9999
          </Typography>
          
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: blue[600],
              height: 56,
              width: 56
            }}
          >
            <OpacityIcon/>
          </Avatar>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
);

export default Humudity;

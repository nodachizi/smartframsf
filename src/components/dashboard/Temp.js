import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {FaTemperatureHigh} from 'react-icons/fa'

export default function Temp ( {data} ){
  const value = parseInt(data)/10
  return(
    <Card >
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
            อุณหภูมิ
          </Typography>
          <Typography 
           color="textPrimary"
           variant="h3"
          >
            {value} ํ
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <FaTemperatureHigh/>
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        
      </Box>
    </CardContent>
  </Card>
  )
}

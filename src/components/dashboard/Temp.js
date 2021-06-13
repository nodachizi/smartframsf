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

const Temp = (props) => (
  <Card {...props}>
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
            26 ํ
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
    </CardContent>
  </Card>
);

export default Temp;

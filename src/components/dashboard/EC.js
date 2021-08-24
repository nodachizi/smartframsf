import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Hidden,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';


export default function EC ( {data} ){
  const value = parseInt(data)
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
            ค่าความเค็มในดิน
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {value}
          </Typography>
          <Typography>
          (µS/cm)
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      
    </CardContent>
  </Card>
  )
}

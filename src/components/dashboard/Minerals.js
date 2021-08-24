import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';

export default function Minerals ( {Ndata,Pdata,Kdata} ){
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [Ndata, Pdata, Kdata],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Nitrogen', 'Phosphorus', 'Potassium']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'ไนโตรเจน',
      value: Ndata,
      color: colors.indigo[500]
    },
    {
      title: 'ฟอสฟอรัส',
      value: Pdata,
      color: colors.red[600]
    },
    {
      title: 'โพแทสเซียม',
      value: Kdata,
      color: colors.orange[600]
    }
  ];

  return(
    <Card >
      <CardHeader title="แร่ธาตุในดิน"  />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                mg/kg
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
    )
}

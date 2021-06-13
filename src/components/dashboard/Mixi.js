import Humudity from 'src/components/dashboard/Humudity';

//import Sales from 'src/components/dashboard//Sales';
import PH from 'src/components/dashboard/PH';
import EC from 'src/components/dashboard/EC';
import Temp from 'src/components/dashboard/Temp';
import Minerals from 'src/components/dashboard/Minerals';
import Sales from 'src/components/dashboard//Sales';
import {
    Box,
    Container,
    Grid,
    Typography
  } from '@material-ui/core';

  export default function Mixi (){
      var i=0;
      var j=2;
      const itep=[];

      for(i=0; i<j ; i++) {
           itep.push(
            
            <Box
            sx={{
              backgroundColor: 'background.default',
              minHeight: '100%',
              py: 3
            }}
          >
            <Container maxWidth={false}>
                <Typography>
                    mk{i}
                </Typography>
              <Grid
                container
                spacing={3}
              >
               
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                
                  <Humudity/>
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <EC />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <PH />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <Temp sx={{ height: '100%' }} />
                </Grid>
                
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
                >
                  <Minerals sx={{ height: '100%' }} />
                </Grid>
                <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
                >
                <Sales />
                </Grid>
                
                
              </Grid>
            </Container>
          </Box>
                    
           )

        }
      
        return(

            <li>{itep}</li>
      )
  }
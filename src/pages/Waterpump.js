import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Timeresult from 'src/components/Waterpump mode/Timeresult';
import CustomerListToolbar from 'src/components/Waterpump mode/CustomerListToolbar';
//import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
        <Timeresult/>
    </Box>
  </>
);

export default CustomerList;

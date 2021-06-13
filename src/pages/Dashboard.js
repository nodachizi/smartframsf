import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';

import Mixi from 'src/components/dashboard/Mixi';
const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
     <Mixi/>
  </>
);

export default Dashboard;

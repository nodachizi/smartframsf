import { Link as RouterLink, BrowserRouter as Router ,Route, Navigate, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';

import Mixi from 'src/components/dashboard/Mixi';

export default function Dashboard (){

	const navigate = useNavigate();
	if(localStorage.getItem('user') == null){
        localStorage.clear();
        navigate('http://sstwork.thddns.net:7770/login', { replace: true });
    }

	return(
          <div>
            <Helmet>
      			<title>Dashboard | Material Kit</title>
    		</Helmet>
     		<Mixi/>
          </div>
      )

}

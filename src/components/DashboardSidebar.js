import { useEffect ,useState} from 'react';
import { Link as RouterLink, useLocation, Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from 'react-feather';
import {RiPlantFill as Plantfill,} from 'react-icons/ri'
import {BiAlarm as Alarm} from 'react-icons/bi'

import NavItem from './NavItem';

const items = [
  {
    href: '/app/dashboard',
    icon: Plantfill,
    title: 'แสดงค่าตรวจวัด'
  },
  {
    href: '/app/waterpump',
    icon: Alarm ,
    title: 'ตั้งค่าการรดน้ำ'
  },
  /*{
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },*/
  {
    href: '/login',
    icon: LockIcon,
    title: 'Logout'
  },
  /*{
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }*/
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const [user,setUser] = useState({
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'ทดสอบระบบ',
  name: localStorage.getItem('user')
});

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    if(user.name == null){
      setUser({
                  avatar: '/static/images/avatars/avatar_6.png',
                  jobTitle: 'ทดสอบระบบ',
                  name: localStorage.getItem('user')
                  })}
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;

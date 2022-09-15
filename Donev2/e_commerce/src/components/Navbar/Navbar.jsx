import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/commerce.jpg';
import logo2 from '../../assets/spiserlogo.png';
import useStyles from './styles';
//used sticky instead of fixed

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    

  return (
    <div>
        
      <AppBar position = "fixed" className = {classes.AppBar} color = "inherit">
          <toolbar>
              <Typography component = {Link} to = "/" variant = "h6" className = {classes.title} color ="inherit">
                  < img src = {logo2} alt = "Commerce.js" height="50px" className = {classes.image}/>
                  Commerce.js
              </Typography>
              <div className={classes.grow} />
              {location.pathname === '/' && (
              <div className={classes.button}>
                  <IconButton component = {Link} to = "/cart" aria-label = "Show cart items" color = "inherit">
                      <Badge badgeContent = {totalItems} color = "secondary">
                          <ShoppingCart/>
                      </Badge>
                  </IconButton>
              </div>)}
          </toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

import {
  AppBar,
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import { useStore } from '../context/storeCtx'
import Flex from './structure/Flex'

export const NavBar = () => {
  const useStyles = makeStyles((theme) => ({}))
  const classes = useStyles()
  const { cart } = useStore()
  const history = useHistory()

  const handleOnClick = useCallback((text) => history.push(text), [history])

  return (
    <AppBar position="fixed" className={classes.navbar} color="inherit">
      <Toolbar>
        <Flex justify="space-between" align="center" style={{ width: '100%' }}>
          <Link to="/">
            <Flex align="center">
              <img
                src={logo}
                alt="logo"
                className={classes.logo}
                style={{ height: '4rem' }}
              />
              <Typography variant="h6" className={classes.title}>
                Name
              </Typography>
            </Flex>
          </Link>
          <Flex align="center" justify="space-between" style={{ width: '15%' }}>
            <Link to="/store">
              <Typography variant="h6"> Store</Typography>
            </Link>
            <Link to="/about">
              <Typography variant="h6"> About</Typography>
            </Link>
            <Link to="/contact">
              <Typography variant="h6"> Contact</Typography>
            </Link>
          </Flex>
          <div className={classes.button}>
            <IconButton
              aria-label="Show cart items"
              onClick={() => handleOnClick('/cart')}
            >
              <Badge badgeContent={cart?.total_items} color="secondary">
                <ShoppingCart style={{ marginRight: '.5rem' }} />
              </Badge>
            </IconButton>
          </div>
        </Flex>
      </Toolbar>
    </AppBar>
  )
}

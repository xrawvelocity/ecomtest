import { ShoppingCart } from '@mui/icons-material'
import { Badge, IconButton, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useStore } from '../../context/storeCtx'
import Flex from '../structure/Flex'
import { NavLink } from './NavLink'

export const NavBar = () => {
  const { cart } = useStore()
  const history = useHistory()

  const handleOnClick = useCallback((text) => history.push(text), [history])

  return (
    <Flex
      component="nav"
      sx={{ bgcolor: 'background.black' }}
      justify="space-between"
      align="center"
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: '100',
        padding: '2rem 10%',
      }}
    >
      <Link to="/">
        <Flex align="center">
          <Typography sx={{ color: 'text.white' }} variant="h6">
            Logo
          </Typography>
        </Flex>
      </Link>
      <Flex align="center" justify="flex-end" style={{ width: '40rem' }}>
        <Flex
          align="center"
          justify="space-between"
          spacing={3}
          style={{ width: '50%' }}
        >
          <NavLink to="/store" text="Store" />
          <NavLink to="/about" text="About" />
          <NavLink to="/contact" text="Contact" />
        </Flex>
        <IconButton
          aria-label="Show cart items"
          onClick={() => handleOnClick('/cart')}
          style={{ marginLeft: '5rem' }}
        >
          <Badge
            sx={{
              '& span': {
                minWidth: { xs: '1.75rem', sm: '2rem' },
                width: { xs: '1.75rem', sm: '2rem' },
                height: { xs: '1.75rem', sm: '2rem' },
              },
            }}
            badgeContent={cart?.total_items}
            color="secondary"
          >
            <ShoppingCart
              sx={{
                color: 'background.paper',
                ':hover': {
                  color: 'primary.main',
                },
              }}
              style={{ marginRight: '.5rem' }}
            />
          </Badge>
        </IconButton>
      </Flex>
    </Flex>
  )
}

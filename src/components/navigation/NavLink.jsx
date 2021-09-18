import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = ({ to, text }) => {
  return (
    <Link to={to}>
      <Typography
        sx={{
          color: 'text.white',
          ':hover': {
            color: 'primary.main',
          },
        }}
        variant="h6"
      >
        {' '}
        {text}
      </Typography>
    </Link>
  )
}

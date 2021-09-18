import { InputAdornment, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import React from 'react'

export const Search = ({ ...props }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment style={{ marginRight: '1rem' }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}

import { InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

export const Search = ({ ...props }) => {
  return (
    <TextField
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}

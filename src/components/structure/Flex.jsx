import { Box } from '@mui/system'
import React from 'react'

export default function Flex({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  spacing = 0,
  wrap,
  style,
  ...rest
}) {
  return (
    <Box
      {...rest}
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        ...style,

        '& > *': {
          margin: `${spacing * 8} !important`,
        },
      }}
    >
      {children}
    </Box>
  )
}

import React from 'react'
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'

export const CartItem = ({ product }) => {
  const { updateQty, removeFromCart } = useStore()

  return (
    <Card>
      <CardMedia
        image={product.media.source}
        alt={product.name}
        style={{ height: '15rem' }}
      />
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h5">
          {product.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'space-between', width: '100%' }}>
        <Flex align="center">
          <Button
            size="small"
            style={{ width: '5rem' }}
            onClick={() => updateQty(product.id, product.quantity - 1)}
          >
            -
          </Button>
          <Typography style={{ margin: '0 .5rem' }}>
            {product.quantity}
          </Typography>
          <Button
            size="small"
            style={{ width: '5rem' }}
            onClick={() => updateQty(product.id, product.quantity + 1)}
          >
            +
          </Button>
        </Flex>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}

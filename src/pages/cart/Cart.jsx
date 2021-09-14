import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/storeCtx'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { CartItem } from './CartItem'
import Flex from '../../components/structure/Flex'

export const Cart = () => {
  const { cart, emptyCart } = useStore()
  console.log(cart)

  const EmptyCart = () => {
    return (
      <Typography align="center">You have no items in your cart yet</Typography>
    )
  }

  const FilledCart = () => {
    return (
      <Flex direction="column" align="center" style={{ width: '100%' }}>
        <Typography
          variant="h3"
          align="center"
          style={{ marginBottom: '2rem' }}
        >
          Your Shopping Cart
        </Typography>
        <Grid container spacing={3} justify="center">
          {cart.line_items.map((each) => {
            return (
              <Grid item xs={12} sm={4}>
                <CartItem product={each} />
              </Grid>
            )
          })}
        </Grid>
        <Flex
          justify="space-between"
          style={{ width: '100%', marginTop: '4rem' }}
        >
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <Flex>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => emptyCart()}
            >
              Empty Cart
            </Button>
            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              style={{
                backgroundColor: '#1b99e8',
                color: '#fff',
                marginLeft: '2rem',
              }}
            >
              Checkout
            </Button>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <Container style={{ marginTop: '4rem' }}>
      {cart.total_items ? <FilledCart /> : <EmptyCart />}
    </Container>
  )
}

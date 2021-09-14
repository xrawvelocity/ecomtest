import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { history } from './history'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import theme from './styles/theme'

export default function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <NavBar />
        <Switch>
          <Route exact path={['', '/']}>
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

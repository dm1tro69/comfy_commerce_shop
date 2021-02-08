import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from "styled-components";
import {Home,
    SingleProduct,
    Checkout,
    Error,
    Cart,
    About,
    Products,
    Private} from './pages'

function App() {
  return(
      <Router>
          <Navbar/>
          <Sidebar/>
          <Switch>
             <Route exact path={'/'} component={Home}/>
             <Route  path={'/about'} component={About}/>
             <Route  path={'/cart'} component={Cart}/>
             <Route  path={'/products'} component={Products}/>
             <Route  path={'/products/:id'} component={SingleProduct}/>
             <Route  path={'/checkout'} component={Checkout}/>
             <Route path={'*'} component={Error}/>
          </Switch>
          <Footer/>
      </Router>
      )

}

export default App

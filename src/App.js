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
    Auth,
    Private} from './pages'
import SingleProductPage from "./pages/SingleProductPage";
import PrivateRoute from "./pages/PrivateRoute";

function App() {

    return (
        <Auth>
            <Router>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/products/:id" children={<SingleProduct />} />

                    <PrivateRoute path={'/checkout'}>
                        <Checkout/>
                    </PrivateRoute>

                    <Route exact path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Auth>

    );

}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-m54p3u5r.eu.auth0.com
// TAeaQPquz0c1VNR49ppQeoEiOoLFLYoW
ReactDOM.render(
    <Auth0Provider
        domain={'dev-m54p3u5r.eu.auth0.com'}
        clientId={'TAeaQPquz0c1VNR49ppQeoEiOoLFLYoW'}
        redirectUri={window.location.origin}
        cacheLocation={'localstorage'}
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>

    </Auth0Provider>

    , document.getElementById('root'))

import React from 'react'
import logo from './cart.png';
import './CartWidget.css'

const EstilosLogo = {
    width: 120,
    heith: 120,
    borderRadius: 10,
    marginTop: 20,
    };

function CartWidget() {
    return (
        <div className="EstiloCarrito">
            <img style={EstilosLogo} src={logo} alt="logo carrito"/>
        </div>
    )
}

export default CartWidget

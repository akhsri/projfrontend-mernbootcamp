import React, { useState, useEffect } from 'react'
import "../styles.css"
import { API } from "../backend"
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';
import PaymentB from './PaymentB';

const Cart = () => {
    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = (products) => {
        return (
            <div>
                <span>
                    <h2>Shopping Cart</h2>
                </span>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div className="col-4 mb-4">
                                <Card
                                    key={index}
                                    product={product}
                                    removeFromCart={true}
                                    addToCart={false}
                                    setReload={setReload}
                                    reload={reload}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const loadCheckout = () => {
        return (
            <div>
                <h2>This section is for checkout</h2>
            </div>
        )
    }

    return (
        <Base title="Cart Page" description="Ready to checkout">
            <div className="row  text-center">
                <div className="col-9">{products.length > 0 ? (
                    loadAllProducts(products)
                ) : (
                        <h3>No product in cart</h3>
                    )}</div>
                <div className="col-3"><PaymentB products={products} setReload={setReload} /></div>

            </div>
        </Base>
    )
}

export default Cart
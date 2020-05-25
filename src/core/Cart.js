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

                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div className="col-12 col-md-3 mb-4">
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

            <div className="row border mb-5" style={{ backgroundColor: "lightcoral", borderRadius: "20px" }}>
                <div className="col-12 col-md-4" >
                    <img src="https://assets-ouch.icons8.com/thumb/512/4bb05dde-7b72-4683-b786-9a9b7b41e6b3.png" alt="cart-img" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="col-12 col-md-8 text-center text-white"
                    style={{ padding: "10%", fontFamily: "serif" }}>
                    {products !== undefined && products.length > 0 ?
                        (<h3>Your cart items appear here.</h3>) :
                        (<h3>
                            You haven't added anything yet to the cart.
                             Add items to see them here.

                        </h3>)}
                </div>
            </div>

            <div className="row  text-center">
                <div className=" col-12 col-md-9">{products !== undefined && products.length > 0 ? (
                    <div>


                        <div className="row">
                            {loadAllProducts(products)}
                        </div>
                    </div>
                ) : (
                        <div></div>
                    )}</div>

                {
                    products !== undefined && products.length > 0 ? (
                        <div className="col-12 col-md-3 border p-3"
                            style={{ borderRadius: "20px", backgroundColor: "whitesmoke" }}>

                            <PaymentB products={products} setReload={setReload} />

                        </div>
                    )
                        :
                        (<div></div>)


                }

            </div>
        </Base>
    )
}

export default Cart
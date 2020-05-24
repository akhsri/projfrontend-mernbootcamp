import React, { useState, useEffect, Fragment } from 'react'
import ImageHelper from './helper/ImageHelper';
import { red } from 'color-name';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import { Redirect } from "react-router-dom"

const Card = ({ product,
    addToCart = true,
    removeFromCart = false,
    setReload = f => f,
    // function(f){ return f}
    reload = undefined
}) => {

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)

    const cardTitle = product ? product.name : "A photo from pexels"
    const cardDescription = product ? product.description : "Default description"
    const cardPrice = product ? product.price : "Default price"


    const addtoCart = () => {
        addItemToCart(product, () => setRedirect(true))
    }

    const getARedirect = () => {
        if (redirect) {
            return <Redirect to="/cart" />
        }
    }


    const showAddToCart = (addToCart) => {
        return (
            addToCart &&
            <button
                onClick={addtoCart}
                className="btn btn-block btn-outline-danger mt-2 mb-2 "
            >
                Add to Cart
            </button>
        )
    }

    const showRemoveFromCart = (removeFromCart) => {
        return (
            removeFromCart &&
            <button
                onClick={() => {
                    removeItemFromCart(product._id);
                    setReload(!reload)
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
                Remove from cart
            </button>
        )
    }

    return (
        <Fragment>
            <div className="card text-dark bg-light border border-gray" id="card">
                <div className="card-header lead">{cardTitle}</div>
                <div className="card-body">
                    {getARedirect(redirect)}
                    <ImageHelper product={product} />

                    <h4 className="lead font-weight-normal text-wrap  py-2">
                        {cardDescription}
                    </h4>
                    <h4 className="btn btn-danger rounded  btn-sm px-4">$ {cardPrice}</h4>
                    <div className="row">
                        <div className="col-12">
                            {showAddToCart(addToCart)}
                        </div>
                        <div className="col-12">
                            {showRemoveFromCart(removeFromCart)}
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};



export default Card

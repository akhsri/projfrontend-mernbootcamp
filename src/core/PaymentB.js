import React, { useState, useEffect } from 'react'
import { loadCart, cartEmpty } from './helper/cartHelper';
import { Link } from "react-router-dom"
import { getmeToken, processPayment } from './helper/paymentBHelper';
import { createOrder } from "./helper/orderHelper"
import { isAuthenticated } from '../auth/helper';
import DropIn from "braintree-web-drop-in-react"

const PaymentB = ({ products, setReload = f => f, reload = undefined }) => {

    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: "",

    });

    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token


    const getToken = (userId, token) => {
        getmeToken(userId, token).then(info => {
            console.log("info: ", info)
            if (info.error) {
                setInfo({ ...info, error: info.error })
            } else {
                const clientToken = info.clientToken
                setInfo({ clientToken: clientToken })
            }
        })
    }

    const showbtdropIn = () => {
        return (
            <div>
                {info.clientToken !== null && products !== undefined && products.length > 0 ? (
                    <div>
                        <DropIn
                            options={{ authorization: info.clientToken }}
                            onInstance={instance => (info.instance = instance)}
                        />
                        <button className="btn btn-block btn-danger" onClick={onPurchase} style={{ backgroundColor: "lightcoral" }}>Buy</button>
                    </div>
                ) : (
                        <h3>Please login or add something to cart</h3>
                    )}
            </div>
        )
    }

    useEffect(() => {
        getToken(userId, token)
    }, [])

    const onPurchase = () => {
        setInfo({ loading: true })
        let nonce;
        let getNonce = info.instance
            .requestPaymentMethod()
            .then(data => {
                nonce = data.nonce
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: getAmount()
                }
                processPayment(userId, token, paymentData)
                    .then(response => {
                        setInfo({ ...info, success: response.success, loading: false })
                        console.log("Payment Success")
                        const orderData = {
                            products: products,
                            transaction_id: response.transaction_id,
                            amount: response.transaction.amount
                        }

                        createOrder(userId, token, orderData)
                        cartEmpty(() => {
                            console.log("Did we got a crash?")
                        })

                        setReload(!reload)
                    })
                    .catch(error => {
                        setInfo({ loading: false, success: false })
                        console.log("Payment Failed")
                    })
            })
    }

    const getAmount = () => {
        let amount = 0
        if (products) {
            products.map(p => {
                amount = amount + p.price
            })
        }
        return amount
    }

    return (
        <div>
            <div className="p-2" style={{ backgroundColor: "lightgray" }}>
                <h4>Your bill is {getAmount()} $ </h4>
            </div>
            {showbtdropIn()}
        </div>
    )
}

export default PaymentB

import { API } from "../../backend";

export const getmeToken = (userId, token) => {
    console.log("USERID: ", userId)
    console.log("TOKEN: ", token)
    return fetch(`${API}/payment/gettoken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log("error: ", err))
}

export const processPayment = (userId, token, paymentInfo) => {
    return fetch(`${API}/payment/braintree/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentInfo)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log("error: ", err))
}
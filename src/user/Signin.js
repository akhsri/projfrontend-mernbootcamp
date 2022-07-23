import React, { useState } from "react"
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth/helper"





const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const onSubmit = (event, key) => {
        console.log("key: ", key)
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })

        let obj;
        if(key===0){
            obj = {
                email: 'guest@domain.com',
                password: 'qwerty'
            }
        } else if(key===1){
            obj = {
                email: 'guestadmin@domain.com',
                password: 'qwerty'
            }
        } else {
            obj = {email, password}
        }
        signin(obj)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(console.log("Signin request failed"))
    }

    const performRedirect = () => {


        if (didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/" />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alertalert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (

            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success " style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    const signInForm = () => {
        return (
            <div className="row  m-5" id="signin">

                <div className="col-md-6 offset-sm-3 text-left border p-5">
                    <div >
                        <div className="text-center">
                            <h2>Signin</h2>

                        </div>
                        <form>

                            <div className="form-group">
                                <label className="text-secondary">Email</label>
                                <input onChange={handleChange("email")} value={email} className="form-control" type="email" />
                            </div>
                            <div className="form-group">
                                <label className="text-secondary">Password</label>
                                <input onChange={handleChange("password")} value={password} className="form-control" type="password" />
                            </div>
                            <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                            <button onClick={(e)=> {onSubmit(e, 0)}} className="btn btn-success btn-block">Guest Signin</button>
                            <button onClick={(e) => {onSubmit(e,1)}} className="btn btn-success btn-block">Guest Admin Signin</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Base title="Signin page" description="A page for user to sign in!">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}

        </Base>
    )
}

export default Signin
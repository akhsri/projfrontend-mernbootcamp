
import React, { Fragment } from 'react'
import { Link, withRouter } from "react-router-dom"
import { signout, isAuthenticated } from '../auth/helper';


const { user } = isAuthenticated();

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ad494c" }
    } else {
        return { color: "#dc4348" }
    }
}

const Menu = ({ history }) => {

    console.log("isAuth: ", isAuthenticated())
    return (
        <div className="navbar navbar-fixed-top container-fluid navbar-expand-sm navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03" >
                <ul className="navbar-nav mr-auto  ">
                    <li className="nav-item">
                        <Link style={currentTab(history, "/landingpage")} className="nav-link" to="/landingpage">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/")} className="nav-link" to="/">
                            Shop
                        </Link>
                    </li>


                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
                                U.  Dashboard
                            </Link>
                        </li>
                    )}
                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                                Dashboard
                            </Link>
                        </li>
                    )}
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">
                                    Signin
                                </Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span className="nav-link"
                                style={currentTab(history, "/signout")}
                                onClick={() => {
                                    signout(() => {
                                        history.push("/")
                                    })
                                }}

                            > Signout</span>
                        </li>
                    )}

                </ul>
                <ul style={{ marginBottom: "0px" }}>
                    <form class="form-inline my-2 my-lg-0 pr-5">
                        <input
                            className="form-control mr-sm-2"
                            type="search" placeholder="What are you looking for?"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </ul>
                <ul className="navbar-nav navbar-right pr-5 pt-2">
                    {isAuthenticated() && isAuthenticated().user && (
                        <li className="nav-item">
                            <h6 style={{ color: "#dc4348" }}>Hello, {isAuthenticated().user.name}</h6>
                        </li>
                    )}
                </ul>
                <ul className="navbar-nav navbar-right pr-5 pt-2">
                    <li className="nav-item">
                        <Link style={currentTab(history, "/cart")} className="nav-link  " to="/cart">
                            <span className="material-icons" >
                                shopping_cart
                            </span>

                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Menu)
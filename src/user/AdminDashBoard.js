import React, { Fragment } from 'react'
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from "react-router-dom"
import Menu from '../core/Menu';
import Footer from '../core/Footer';


const AdminDashBoard = () => {
    const { user: { name, email, role } } = isAuthenticated();

    const adminLeftSide = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-light text-dark">
                    Admin Navigation
                </h4>
                <div>
                    <ul className="list-group">
                        <Link to="/admin/create/category" className="nav-link text-danger">Create Categories</Link>
                    </ul>
                    <ul className="list-group">
                        <Link to="/admin/categories" className="nav-link text-danger">Manage Categories</Link>
                    </ul>
                    <ul className="list-group">
                        <Link to="/admin/create/product" className="nav-link text-danger">Create Products</Link>
                    </ul>
                    <ul className="list-group">
                        <Link to="/admin/products" className="nav-link text-danger">Manage Products</Link>
                    </ul>
                    <ul className="list-group">
                        <Link to="/admin/orders" className="nav-link text-danger">Manage Orders</Link>
                    </ul>
                </div>
            </div>
        )
    };

    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">

                        <span className="badge badge-success mr-2">Name:</span>{name}
                    </li>
                    <li className="list-group-item">

                        <span className="badge badge-success mr-2">Email:</span>{email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger">Admin Area</span>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Fragment>

            <div >
                <Menu />
                <div className="border m-5"
                    style={{ padding: "5%", backgroundColor: "lightcoral" }}
                >
                    <div className="row">
                        <div className="col-12 col-md-3 p-2">{adminLeftSide()}</div>
                        <div className="col-12 col-md-9 p-2">{adminRightSide()}</div>
                    </div>
                </div>
                <Footer />
            </div>

        </Fragment>
    )
}

export default AdminDashBoard

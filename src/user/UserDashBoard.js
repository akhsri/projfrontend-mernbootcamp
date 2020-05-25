import React from 'react'
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from "react-router-dom"

const UserDashBoard = () => {
    const { user: { name, email, role } } = isAuthenticated();
    return (
        <Base title="UserDashboard Page">

            <div className="row">
                <div className="col-12 col-md-6" style={{ paddingTop: "5%" }}>
                    <div className="card mb-4">
                        <h4 className="card-header">User Dashboard</h4>
                        <ul className="list-group">
                            <li className="list-group-item">

                                <span className="badge badge-success mr-2">Name:</span>{name}
                            </li>
                            <li className="list-group-item">

                                <span className="badge badge-success mr-2">Email:</span>{email}
                            </li>
                            <li className="list-group-item">
                                <span className="badge badge-danger">User Area</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://assets-ouch.icons8.com/thumb/548/d413b756-322f-4e21-b2f4-24755bd349f2.png" style={{ width: "100%", height: "100%" }}></img>
                </div>
            </div>
        </Base>
    )
}

export default UserDashBoard

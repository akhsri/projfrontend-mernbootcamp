import React, { useState, useEffect } from 'react'
import Base from '../core/Base';
import { Link } from "react-router-dom";
import { getCategories, getCategory, updateCategory } from "./helper/adminapicall";
import { isAuthenticated } from '../auth/helper';



const UpdateCategory = ({ match }) => {

    const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        loading: false,
        success: false,
        error: "",
        createdCategory: "",
        getRedirect: false,
        formData: ""
    })

    const {
        name,
        categories,
        loading,
        error,
        createdCategory,
        getRedirect,
        formData } = values

    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
            //console.log("DATA: ", data)

            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                preloadCategory();
                setValues({
                    ...values,
                    name: data.name,
                    formData: new FormData()


                });
                //console.log("categories: ", categories)

            }
        })
    }

    const preloadCategory = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({
                    category: data, formData: new FormData()
                })
            }
        })
    }

    useEffect(() => {
        preload(match.params.categoryId);
    }, [])



    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true })
        console.log("values: ", values)
        console.log("formData: ", formData)
        formData.append("name", "XYZ")
        updateCategory(match.params.categoryId, user._id, token, values)
            .then(data => {
                console.log("DATA", data)

                //console.log("token", token)
                //console.log("user:", user._id)
                //console.log("categoryId:", match.params.categoryId)
                console.log("formData: ", formData)
                if (data.error) {
                    console.log("error:", data.error)
                    setValues({ ...values, error: data.error })
                } else {
                    setValues({
                        ...values,
                        name: "",
                        loading: false,
                        createdCategory: data.name
                    })
                }
            })
            .catch(err => {
                console.log("error: ", err)
            })
    }
    const handleChange = (event) => {
        //setError("");
        //setName(event.target.value)
        setValues({
            ...values,
            name: event.target.value,
            error: ""
        })
    }

    const successMessage = () => {
        return (
            <div className="alert alert-success mt-3"
                style={{ display: createdCategory ? "" : "none" }}
            >
                <h4>{createdCategory} updated successfully</h4>
            </div>
        )
    }

    const warningMessage = () => {
        return (
            <div className="alert alert-danger mt-3"
                style={{ display: error ? "" : "none" }}
            >
                <h4> Unable to update category </h4>
            </div>
        )
    }

    //TODO: Warning Message and Loading redirect


    const myCategoryForm = () => {
        return (
            <form>
                <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input
                        type="text"
                        className="form-control my-3"
                        onChange={handleChange}
                        value={name}
                        autoFocus

                        placeholder="For Ex. Summer"
                    />
                    <button type="submit" onClick={onSubmit} className="btn btn-outline-info">Update Category</button>
                </div>
            </form>
        )
    }

    return (
        <Base
            title="Add a product here"
            description="Welcome to product creation section"
            className="container bg-info p-4"
        >
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
                Admin Home
            </Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryForm()}
                </div>
            </div>
        </Base>
    )
}

export default UpdateCategory

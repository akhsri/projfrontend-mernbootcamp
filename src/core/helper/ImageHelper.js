import React from 'react'
import { API } from '../../backend';


const ImageHelper = ({ product }) => {
    const imageurl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
    return (
        <div className="rounded border border-gray p-2">
            <img
                src={imageurl}
                alt="photo"
                style={{ height: "300px", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    )
}

export default ImageHelper

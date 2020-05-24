import React, { useState, useEffect, Fragment } from 'react'
import "../styles.css"
import { API } from "../backend"
import Base from './Base';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';


export default function Home() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProduct = () => {
        getProducts().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProducts(data)
            }
        })
    }

    useEffect(() => {
        loadAllProduct()
    }, [])

    return (
        <Fragment>
            <Base >
                <div className="row text-center">

                    <div className="row">
                        {products.map((product, index) => {
                            return (
                                <div key={index} className="col-4 mb-4">
                                    <Card product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Base>
            <style>{`
                    #head{
                        margin: 0px;
                        height: 120px;
                        width: 100%;
                    }
            `}</style>

        </Fragment>
    )
}

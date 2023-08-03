import React, { useState } from 'react'
import "./Shop.css"
import Product from '../Product/Product'
import productsData from '../../allData'

export default function Shop() {

    const [productsInfo, setProductsInfo] = useState(productsData)

    return (
        <div className='shop'>
            <div className="container-fluid row d-flex justify-content-around" >
                {productsInfo.map(product => (
                    <Product {...product} />
                ))}
            </div>
        </div>
    )
}

import React from 'react'
import "./Product.css"
import { MdOutlineWatchLater } from "react-icons/md"
import { BiStar } from "react-icons/bi"

export default function Product({ title, img, disc, price }) {
    return (
        <div className="product-box col-lg-5 col-md-6 col-11">
            <div className="product-img-container">
                <img src={img} alt="Product" />
            </div>
            <div className="product-text-container">
                <div className="icons-box my-1">
                    <span><MdOutlineWatchLater className="watch" /></span>
                    <span><BiStar className="star" /></span>
                </div>
                <h4 className="title">{title}</h4>
                <p className="description">{disc}</p>
                <div className="product-footer">
                    <p className="price">{price}$</p>
                    <div className="btn-container">
                        <button className="btn mx-2 btn-outline-primary">Open Map</button>
                        <button className="btn btn-primary">Virtual Tour</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

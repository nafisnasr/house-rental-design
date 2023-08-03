import React from 'react'
import { GoLocation } from "react-icons/go"
import { BiTimeFive, BiDollarCircle } from "react-icons/bi"
import "./header.css"

export default function Header() {

    return (
        <header className='header'>

            <div className="title-box container">
                <h1 className='title'>Discover the Best Rental Properties</h1>
                <h1 className='title'>with our Home Rent Service</h1>
            </div>

            <div className="search-container">

                <div className="search-box row">

                    <div className="search-input col-lg-2 col-md-6 col-11">
                        <div className="search-label">
                            <GoLocation className='search-icon' />
                            <span>Location</span>
                        </div>
                        <input type="text" placeholder='City' />
                    </div>

                    <div className="search-input col-lg-2 col-md-6 col-11">
                        <div className="search-label">
                            <BiTimeFive className='search-icon' />
                            <span>when</span>
                        </div>
                        <input type="month" />
                    </div>

                    <div className="search-input col-lg-2 col-md-6 col-11">
                        <div className="search-label">
                            <BiDollarCircle className='search-icon' />
                            <span>type</span>
                        </div>
                        <select className="form-select " aria-label="Default select example">
                            <option value="1">house</option>
                            <option value="2" selected >apartment</option>
                            <option value="3">flat</option>
                            <option value="4">pent house</option>
                        </select>                   
                    </div>
                    
                    <div className="search-input col-lg-2 col-md-6 col-11">
                        <div className="search-label">
                            <BiDollarCircle className='search-icon' />
                            <span>price range</span>
                        </div>
                        <input type="number" placeholder='12000' />
                    </div>

                    <button className="btn btn-primary search-btn col-lg-2 col-md-6">Search now</button>

                </div>
            </div>
        </header>
    )
}

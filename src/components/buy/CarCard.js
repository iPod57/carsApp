import React from 'react'
import { Link } from 'react-router-dom'

const heroImages = require.context('./assets',true)

export const CarCard = ({
        id,
        car, 
        fabricant, 
        color,
        price,
    }) => {

    return (
        <div className="card-deck col mb-3 ml-1">
            <div className="card bg-dark">
                <img className="card-img" src={heroImages(`./${id}.jpg`)} alt="Card image cap"/>
                <div className="card-body text-white">
                    <h5 className="card-title">{car}</h5>
                    <p className="card-text">{fabricant}</p>
                    <p className="card-text">{color}</p>
                    <p className="card-text">{price}</p>
                </div>
                <Link to={`/car/${id}`}>
                    Mas...
                </Link>
            </div>
            
        </div>
    )
    }

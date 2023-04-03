import React from 'react'
import "./Card.css"

export default function Card(props: any) {
    return (
        <div id={props.id} className="card">
            <div className="header">
                <img className="avatar" src={props.image} alt="" />
                <div className="card-title">
                    <span className='name-tag'>{props.name}</span>
                    <span className="verified">Verified Buyer</span>
                </div>
            </div>
            <span className='card-text'>{props.children}</span>
        </div>
    )
}

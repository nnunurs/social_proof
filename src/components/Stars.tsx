import React from 'react';
import star from "../img/icon-star.svg";
import "./Stars.css";

export default function Stars(props: any) {
    const star_count = Array.apply(null, Array(props.stars)).map(function () { })
    const stars = star_count.map((i: any) =>
        <img className="star" src={star} key={i}></img>
    )

    return (
        <div className='review-sum' style={{marginRight: props.m}}>
            <div className="stars-icons">{stars}</div>
            <span id="title">Rated 5 Start in {props.name}</span>
        </div>
    )
}

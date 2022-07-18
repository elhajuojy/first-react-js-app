import React from "react";


function Card(props) {
    return (
        <div className="card col-md-4 col-sm-6 ">
            <img src={props.img} alt='kanye west' />
            <div className="card-body">
                <h5 className="card-title">
                    {props.title}
                </h5>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    )
}
export default Card
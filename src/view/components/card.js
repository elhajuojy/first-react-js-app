import React from "react";


function Card() {
    return (
        <div className="card ">
            <img src="https://picsum.photos/seed/picsum/100/50" alt='kanye west' />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
export default Card
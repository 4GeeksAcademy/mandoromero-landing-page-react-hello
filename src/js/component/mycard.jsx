import React from "react";

    const MyCard = props => {
        const cardImage = props.cardImage
        const cardTitle = props.cardTitle
        return(
            <div className="col-sm-3">
                <img src={cardImage} className="card-img-top" alt="Outer-Space" width="300" height="150"/>
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel.</p>
                        <br></br>
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
            </div>
    )
};

export default MyCard;
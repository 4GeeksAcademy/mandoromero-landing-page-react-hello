import React from "react";

    const MyCard = () => {
        return(
            <div className="col-sm-3">
                <img src="https://th.bing.com/th/id/OIP.p7wteZi4gGKn8xf2J7kgrQHaEo?rs=1&pid=ImgDetMain" className="card-img-top" alt="Outer-Space"/>
                    <div className="card-body">
                        <h5 className="card-title">Outer Space</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel.</p>
                        <br></br>
                        <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
            </div>
    )
};

export default MyCard;
import React from "react";
import MyCard from "./mycard";

const Cards = () => {
    return(
            
              <div class="row justify-content-center">
                    <MyCard
                        cardImage = "./src/img/OuterSpace.jpg"
                        cardTitle = "Outer Space"
                    />
                    <MyCard 
                        cardImage = "../OuterSpace"
                        cardTitle = "The Milky Way"
                    />
                    <MyCard 
                        cardImage = "https://st2.depositphotos.com/4164031/7705/i/450/depositphotos_77053509-stock-photo-planet-earth-in-outer-space.jpg"
                        cardTitle = "Earth"/>
                    <MyCard cardTitle = "The Moon"/>
              </div>              
              
    )
};

export default Cards;
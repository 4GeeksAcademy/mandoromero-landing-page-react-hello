import React from "react";
import MyCard from "./mycard";

const Cards = () => {
    return(
            
              <div class="row justify-content-center row-cols-sm-1 row-cols-xl-4">
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
              </div>              
              
    )
};

export default Cards;
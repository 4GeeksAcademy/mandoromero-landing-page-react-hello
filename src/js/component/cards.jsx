import React from "react";
import MyCard from "./mycard";

const Cards = () => {
    return(
            
              <div className="row justify-content-center">
                    <MyCard 
                        cardImage = "https://wallup.net/wp-content/uploads/2018/09/26/670141-space-outer-universe-stars-photography-detail-astronomy-nasa-hubble.jpg"
                        cardTitle = "Outer Space"
                    />
                    <MyCard 
                        cardImage = "https://th.bing.com/th/id/R.60336657091d86bf4755f7c888e614ed?rik=TCWKLLCDubfk5g&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fAndromeda-Galaxy-Milky-Way.jpg&ehk=plGXCabGQ7dAx6YArvO0TQgNmO5%2fwPr1PYQ3sXk9KTQ%3d&risl=1&pid=ImgRaw&r=0"
                        cardTitle = "The Milky Way"
                    />
                    <MyCard 
                        cardImage = "https://assets.wired.com/photos/w_2400/wp-content/uploads/2014/12/2014bluemarble_2014089_lrg.jpg"
                        cardTitle = "Earth"
                    />
                    <MyCard
                        cardImage = "https://images.theconversation.com/files/270537/original/file-20190423-175510-ulmp7h.jpg?ixlib=rb-1.1.0&rect=0%2C34%2C1278%2C638&q=45&auto=format&w=1356&h=668&fit=crop"
                        cardTitle = "The Moon"
                    />
              </div>              
              
    )
};

export default Cards;
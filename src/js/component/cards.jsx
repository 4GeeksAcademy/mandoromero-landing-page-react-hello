import React from "react";
import MyCard from "./mycard";

const Cards = () => {
    return(
            
              <div class="row justify-content-center">
                    <MyCard
                        cardImage = "https://th.bing.com/th/id/R.ac4dd85979c534f9488b2b6c07e54bb6?rik=qtoWw1BWSElPyA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2fc%2f1%2f564171.jpg&ehk=wXKBBnrv6i9%2fVJ%2bdINC0%2fW%2fNecHKsOcfxOth4ET9DQU%3d&risl=&pid=ImgRaw&r=0"
                        cardTitle = "Outer Space"
                    />
                    <MyCard 
                        cardImage = "https://th.bing.com/th/id/R.60336657091d86bf4755f7c888e614ed?rik=TCWKLLCDubfk5g&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fAndromeda-Galaxy-Milky-Way.jpg&ehk=plGXCabGQ7dAx6YArvO0TQgNmO5%2fwPr1PYQ3sXk9KTQ%3d&risl=1&pid=ImgRaw&r=0"
                        cardTitle = "The Milky Way"
                    />
                    <MyCard 
                        cardImage = "https://assets.wired.com/photos/w_2400/wp-content/uploads/2014/12/2014bluemarble_2014089_lrg.jpg"
                        cardTitle = "Earth"/>
                    <MyCard
                        cardImage = "https://images.theconversation.com/files/270537/original/file-20190423-175510-ulmp7h.jpg?ixlib=rb-1.1.0&rect=0%2C34%2C1278%2C638&q=45&auto=format&w=1356&h=668&fit=crop"
                        cardTitle = "The Moon"/>
              </div>              
              
    )
};

export default Cards;
import React from "react";
import Navbar from "./mynavbar";
import Jumbotron from "./myjumbotron";
import Card from "./mycard";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid col-lg-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>	
			<Footer />
		</div>
	)
		
};

export default Home;

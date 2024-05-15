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
			<Card />
			<Footer />
		</div>
	)
		
};

export default Home;

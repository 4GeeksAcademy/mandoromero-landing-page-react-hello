import React from "react";
import Navbar from "./mynavbar";
import Jumbotron from "./myjumbotron";
import Cards from "./cards";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="m-3">
				<Cards />
			</div>
			<Footer />
		</div>
	)
		
};

export default Home;

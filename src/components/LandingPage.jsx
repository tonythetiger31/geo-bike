import React from 'react';
import bikePhoto from "../assets/bikePhoto.jpg"
import phonePhoto from "../assets/phonePhoto.jpg"

export default function LandingPage() {
	return (
		<div className='landingPage'>

			<h1 className='landingPageh1'>Make it to class on time, while saving the planet 🌳</h1>

			<h1 style={{ "font-size": "50px" }}>Find the closest bike</h1>
			<div className='landingPageFlex1'>
				<h3 style={{"font-size": "30px"}}> Spot communal bikes nearest to you in seconds. Your next ride is just around the corner!</h3>
				<img src={bikePhoto} width={400} className='bikePhoto'></img>
			</div>

			<h1 style={{ "font-size": "50px" }}>Eco-Impact Insights</h1>
			<div className='landingPageFlex1'>
				<img src={phonePhoto} width={400} className='bikePhoto'></img>
				<h3 style={{"font-size": "30px"}}> Make a difference with every pedal. Track the carbon footprint you offset with each journey. Cycle more, save the planet! </h3>
			</div>
			
		</div>
	);
}

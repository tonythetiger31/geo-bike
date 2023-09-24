import React from 'react';
import logo from '../assets/bikeLogo.png'

export default function () {
	return (
		<>
			<h1 className="header">
				<img src={logo} width={50} length={55} className='logoImg'></img>
				<center className='logoTitle'>Bike Bucks</center>
				
			</h1>
		</>
	);
}

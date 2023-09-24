import React from 'react';
import logo from '../assets/bikeLogo.png'

export default function () {
	return (
		<>
			<h1 className="header">
				<img src={logo} width={50} length={55} className='logoImg'></img>
				<center className='logoTitle'>Eco Cycle</center>
				<button className={"navButton"} onClick={() => { document.location = "/app" }}>app</button>
				<button className={"navButton"} onClick={() => { document.location = "/" }}>home</button>
			</h1>
		</>
	);
}

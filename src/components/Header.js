import React from 'react';
import '../css/Header.css';

const Header = props => {
	const date = new Date();
	return(
		<div className="header">
		<h1>DAILY PROPHET</h1>
		<div className="timeDet">
		<div className="currentDate">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</div>
		<div className="fetchTime">Fetched At:{props.time}</div>
		</div>
		</div>
	);
}

export default Header;

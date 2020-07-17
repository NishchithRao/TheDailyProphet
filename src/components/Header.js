import React,{useState} from 'react';
import '../css/Header.css';

const Header = () => {
	const [date,setDate] = useState(new Date());
	return(
		<div className="header">
		<h1>DAILY PROPHET</h1>
		<div className="timeDet">
		<div className="currentDate">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</div>
		<div className="fetchTime">Fetched At:{localStorage.getItem("date")}</div>
		</div>
		</div>
	);
}

export default Header;

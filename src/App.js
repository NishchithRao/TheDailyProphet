import React,{useState,useEffect,Fragment} from 'react';
import './App.css';
import {AllNews,SearchNews} from './helpers/apicalls';
import Header from './components/Header';
import TopNews from './components/TopNews';
import Loader from './components/Loader';
import {URL} from './helpers/Vars';

function App() {
	const [data,setData] = useState("");
	const [query,setQuery] = useState(["India","entertainment","tech","sport","politics","education","business","crime"]);
	const [active,setActive] = useState(0);
	const [loading,setLoading] = useState(false);
	const [date,setDate] = useState(new Date());
	useEffect(() => {
		HomeData();
	},[]);
	const HomeData = () => {
		setData("");
		AllNews().then(data =>{
			localStorage.setItem("date",`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
                        localStorage.setItem("data",JSON.stringify(data));                                                  setData(data.response.docs)}).catch(err => setData(JSON.parse(localStorage.getItem("data")).response.docs));
	}

	const SearchData = query => {
		setData("");
		SearchNews(query).                                        then(data =>{
			localStorage.setItem("date",`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);                                                  setData(data.response.docs)}).                 catch(err => alert(err));
	}
	const ToggleBg = position => {
		active === position ? setActive(0) : setActive(position);
	}
	const whiteBg = position => {
		return active === position ? "#fff" : "#654321";
	}
	const colorWhite = position => {
		return active===position ? "#654321" : "#fff";
	}
  return (
    <div className="App">
	  <Header />
	  <div className="divider"></div>                   <div className="categories">
                  <button style={{backgroundColor: whiteBg(0),color:colorWhite(0)}} onClick={() => {                          ToggleBg(0);
                          HomeData();                               }                                                 }>Worldwide</button>                              {                                                         query.map((q,index) => (                                  <button style={{backgroundColor: whiteBg(index+1),color:colorWhite(index+1)}} onClick={() => {                                                                SearchData(q);                                                                                      ToggleBg(index+1);                                                                          }                                                 }>{q}</button>                            ))                                }                                                         </div>
	  {!data ? <Loader /> : (
		  <div className="container">
		  { data.map((item,index) => (
		  <div className="newsItem">
			  {index%4==0 ?
		  (
			  <Fragment>
			  <div className="divider"></div>
			  <div className="mainNews">
		  <TopNews classType="topnews" featured={true} topnews ={item}/>
		  </div>
			  </Fragment>
		  ) :
				  <Fragment>
				  <div className="single_divider"></div>
		  <TopNews topnews={item} classType="smallnews" />
				  </Fragment>
			  }
			  
		  </div>
		  ))
		  }
		  </div>
	  )}
	  <div className="divider"></div>

	  <div className="footer">
	  <div className="developer">Designed and Developed by <a target="_blank" href="https://www.instagram.com/dev_monk_4/"><span>Nishchith Rao</span></a></div>
	  </div>
    </div>
  );
}

export default App;

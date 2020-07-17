import React,{useState,useEffect,Fragment} from 'react';
import './App.css';
import {AllNews,SearchNews} from './helpers/apicalls';
import Header from './components/Header';
import TopNews from './components/TopNews';
import Loader from './components/Loader';

function App() {
	const [data,setData] = useState("");
	const [query,setQuery] = useState(["entertainment","tech","sport","politics","education","business","crime"]);
	const [date] = useState(new Date());
	useEffect(() => {
		let triggeredPrompt;
		HomeData();
	},[]);
	const HomeData = () => {
		AllNews().then(data =>{
			localStorage.setItem("date",`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
                        localStorage.setItem("data",JSON.stringify(data));                                                  setData(data.articles)}).catch(err => setData(JSON.parse(localStorage.getItem("data")).articles));
	}

	const SearchData = query => {
		SearchNews(query).                                        then(data =>{
			localStorage.setItem("date",`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);                                                  setData(data.articles)}).                 catch(err => alert(err));
	}
  return (
    <div className="App">
	  {!data ? <Loader /> : (
		  <div className="container">
		  <Header />
		  <div className="divider"></div>
		  <div className="categories">
		  <button onClick={HomeData}>All</button>
		  {
			  query.map(q => (
				  <button onClick={() => SearchData(q)}>{q}</button>
			  ))
	  }
		  </div>
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

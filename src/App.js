import React, { useState, useEffect, Fragment} from "react";
import "./App.css";
import { AllNews, SearchNews } from "./helpers/apicalls";
import Header from "./components/Header";
import TopNews from "./components/TopNews";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  const query = [
    "India",
    "entertainment",
    "tech",
    "sport",
    "politics",
    "education",
    "business",
    "crime",
  ];
  const [active, setActive] = useState(0);
  const date = new Date();
  const HomeData = () => {
    AllNews()
      .then((data) => {
        localStorage.setItem(
          "date",
          `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        );
        localStorage.setItem("data", JSON.stringify(data));
        setData(data.response.docs);
      })
      .catch((err) =>
        setData(JSON.parse(localStorage.getItem("data")).response.docs)
      );
  };
  useEffect(HomeData, []);

  const SearchData = (query) => {
    SearchNews(query)
      .then((data) => {
        localStorage.setItem(
          "date",
          `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        );
        setData(data.response.docs);
      })
      .catch((err) => alert(err));
  };
  const ToggleBg = (position) => {
    active === position ? setActive(0) : setActive(position);
  };
  const whiteBg = (position) => {
    return active === position ? "#fff" : "#654321";
  };
  const colorWhite = (position) => {
    return active === position ? "#654321" : "#fff";
  };
  return (
    <div className="App">
      <Header />
      <div className="divider"></div>
      <div className="categories">
        <button
          style={{ backgroundColor: whiteBg(0), color: colorWhite(0) }}
          onClick={() => {
            ToggleBg(0);
            HomeData();
          }}
        >
          Worldwide
        </button>{" "}
        {query.map((q, index) => (
          <button
		  key={index}
            style={{
              backgroundColor: whiteBg(index + 1),
              color: colorWhite(index + 1),
            }}
            onClick={() => {
              SearchData(q);
              ToggleBg(index + 1);
            }}
          >
            {q}
          </button>
        ))}
      </div>
      <div className="divider"></div>
      {!data.length ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="Items">
            <div className="LargeItems">
              {data.map(
                (item, index) =>
                  index <= data.length / 3 && (
                    <Fragment key={index}>
                      <div className="mainNews">
                        <TopNews
                          classType="topnews"
                          featured={true}
                          index={index}
                          topnews={item}
                        />
                        <div className="divider"></div>
                      </div>
                    </Fragment>
                  )
              )}
            </div>
            <div className="smallItems">
              {data.map(
                (item, index) =>
                  index > data.length / 3 && (
                    <Fragment key={index}>
                      <TopNews topnews={item} classType="smallnews" />
                      <div className="single_divider"></div>
                    </Fragment>
                  )
              )}
            </div>
          </div>
          <div className="footer">
            <div className="developer">
              Designed and Developed by{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dev_monk_4/">
                <span>Nishchith Rao</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

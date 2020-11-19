import React from "react";
import "../css/TopNews.css";
import "../css/SubNews.css";
import {
  coloredWord,
  editTitle,
  coloredLetter,
  editDescription,
} from "../helpers/StringHelper.js";
const TopNews = ({ topnews, classType, featured,index }) => {
	console.log(index);
  return (
    <div className={classType}>
      {featured && (
          <div className="featuredTitle">
            {coloredWord(topnews.headline.main)}
          </div>
      )}
      <div className="title">
        {featured ? editTitle(topnews.headline.main) : topnews.headline.main}
      </div>

      {topnews.multimedia.length !== 0 && (
        <div className="imgCon">
          <img
            alt={topnews.headline.main}
            src={"http://www.nytimes.com/" + topnews.multimedia[0].url}
          />
        </div>
      )}
      <p>
        <span>
          {topnews.lead_paragraph && coloredLetter(topnews.lead_paragraph)}
        </span>
        {topnews.lead_paragraph && editDescription(topnews.lead_paragraph)}{" "}
      </p>
      <button>
        <a href={topnews.web_url}>Read More</a>
      </button>
    </div>
  );
};

export default TopNews;

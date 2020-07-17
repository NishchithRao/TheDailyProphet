import React,{useState,useEffect} from 'react';
import '../css/TopNews.css';
import '../css/SubNews.css';
import ReactFitText from 'react-fittext';
import {coloredWord,editTitle,coloredLetter,editContent,editDescription,restTitle,subTitle} from '../helpers/StringHelper.js';

const TopNews = ({topnews,classType,featured}) => { 
	return(
		<div className={classType}>
		
		{ featured && <ReactFitText minFontSize={38}>
		<div className="featuredTitle">{coloredWord(topnews.headline.main)}</div>
		</ReactFitText>}
		<div className="title">{featured ?editTitle(topnews.headline.main) : topnews.headline.main}</div>
		
		{topnews.multimedia.length!==0 && <div className="imgCon">                        <div className="publisher">{"- "+topnews.source}</div>                                                       <img alt={topnews.headline.main}  src={"http://www.nytimes.com/"+topnews.multimedia[0].url} />
                </div>}
	<p>
                <span>{topnews.lead_paragraph && coloredLetter(topnews.lead_paragraph)}</span>
                {topnews.lead_paragraph && editDescription(topnews.lead_paragraph)}                                                              </p>
		<button><a href={topnews.web_url}>Read More</a></button>
		</div>
		
	);
}

export default TopNews;

import React,{useState,useEffect} from 'react';
import '../css/TopNews.css';
import '../css/SubNews.css';
import ReactFitText from 'react-fittext';
import {coloredWord,editTitle,coloredLetter,editContent,editDescription,restTitle,subTitle} from '../helpers/StringHelper.js';

const TopNews = ({topnews,classType,featured}) => {	
	return(
		<div className={classType}>
		
		{ featured && <ReactFitText minFontSize={38}>
		<div className="featuredTitle">{coloredWord(topnews.title)}</div>
		</ReactFitText>}
		<div className="title">{featured ?editTitle(topnews.title) : subTitle(topnews.title)}</div>
		
		{ topnews.urlToImage && <div className="imgCon">                        <div className="publisher">{"- "+topnews.source.name}</div>                                                       <img alt={topnews.title}  src={topnews.urlToImage} />
                </div>}
	<p>
                <span>{topnews.content ? coloredLetter(topnews.content) : topnews.description && coloredLetter(topnews.description)}</span>
                {topnews.content ? editContent(topnews.content): topnews.description && editDescription(topnews.description)}                                                              </p>
		<button><a href={topnews.url}>Read More</a></button>
		</div>
		
	);
}

export default TopNews;

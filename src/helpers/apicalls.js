import {URL,KEY} from './Vars.js';

export const AllNews =  async () => {
	const response = await fetch(`${URL}=${KEY}`);
	const data = await response.json();
	return data;
}

export const SearchNews = async query => {
	const response = await fetch(`${URL}=${KEY}&q=${query}`);
	const data = await response.json();
	return data ;
}

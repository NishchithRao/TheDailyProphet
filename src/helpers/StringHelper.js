export const restTitle = string => {
	return string.substring(1,string.lastIndexOf("-"));
}

export const coloredWord = string => {
	return string.split(" ")[0];
}

export const coloredLetter = string => {
	string = string.indexOf(")")>0 ? removeSource(string) : string;
	return string.split("")[0];
}

export const editContent = string => {
	return string && string.substring(1,string.lastIndexOf("["));
}

export const editTitle = string => {
	return string.substring(string.indexOf(" "));
}

const removeSource = string => {
	let Rstring = string.substring(string.indexOf("-")+1);
	return Rstring.trim();
}

export const editDescription = string => {
	string = string.indexOf(")")>0 ? removeSource(string) : string;
	return string.substring(1) ;
}

export const subTitle = string => {
	return string.substring(string.lastIndexOf("/"));
}

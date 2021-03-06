export const restTitle = string => {
	return string.substring(1,string.lastIndexOf("-"));
}

export const coloredWord = string => {
	return string.split(" ")[0];
}

export const editContent = string => {
	return string && string.substring(1,string.lastIndexOf("["));
}

export const editTitle = string => {
	return string.substring(string.indexOf(" "));
}

export const subTitle = string => {
	return string.substring(string.lastIndexOf("/"));
}

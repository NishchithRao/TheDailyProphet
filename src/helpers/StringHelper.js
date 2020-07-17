export const restTitle = string => {
	return string.substring(1,string.lastIndexOf("-"));
}

export const coloredWord = string => {
	return string.split(" ")[0];
}

export const coloredLetter = string => {
	return string.split("")[0];
}

export const editContent = string => {
	return string && string.substring(1,string.lastIndexOf("["));
}

export const editTitle = string => {
	return string.substring(string.indexOf(" "),string.lastIndexOf("-"));
}

export const editDescription = string => {
	return string && string.substring(1);
}

export const subTitle = string => {
	return string.substring(0,string.lastIndexOf("-"));
}

const separateString = string => {
	if (string === string.toUpperCase()) {
		return string;
	}

	const lettersArray = string.split('');
	let delimetr;
	lettersArray.map((letter, i) => {
		if (letter === letter.toUpperCase()) {
			delimetr = letter;
		}
		return delimetr;
	});

	if (delimetr) {
		return string.split(delimetr).join(` ${delimetr.toLowerCase()}`);
	}

	return string;
};

export default separateString;

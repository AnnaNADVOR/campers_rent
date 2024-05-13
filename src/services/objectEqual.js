const objectEqual = (firstObject, secondObject) => {

	const firstEntriesArray = Object.entries(firstObject);
    const secondEntriesArray = Object.entries(secondObject);
    
	if (firstEntriesArray.length !== secondEntriesArray.length) {
		return false;
	}

	for (let i = 0; i < firstEntriesArray.length; i += 1) {
		if (firstEntriesArray[i][0] !== secondEntriesArray[i][0]) {
			return false;
		}
		if (firstEntriesArray[i][1] !== secondEntriesArray[i][1]) {
			return false;
		}
	}

	return true;
};

export default objectEqual;

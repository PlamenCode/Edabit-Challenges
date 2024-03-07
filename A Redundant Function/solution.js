//solution 1
function redundant(str) {
	return () => {
		return str;
	}
}

//solution 2
const redundant = str => () => str;
//Solution 1
function matchHouses(step) {
	let  matches = 0;
	if(step == 0){
		matches = 0;
	} else if(step == 1){
		matches = 6;
	} else {
		matches = 6 + ((step -1) * 5);
	}
	return matches;
};

//Solution 2
function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}


Console.log(matchHouses(1)) // result -> 6
Console.log(matchHouses(4)) // result -> 21
Console.log(matchHouses(87)) // result -> 436
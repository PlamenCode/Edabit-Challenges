function sevenBoom(arr) {
    // console.log just for visual output
    // console.log(arr.join().includes('7') ? "Boom!" : "there is no 7 in the array")
	return (arr.join().includes('7') ? "Boom!" : "there is no 7 in the array");
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([8, 6, 33, 100, 77, 345, -7])

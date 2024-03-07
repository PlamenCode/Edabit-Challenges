// solution 1
function countTrue(arr) {
    let result = 0;
	for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
            result++;
        }    
    }
    console.log(result);
};

// solution 2
function countTrue2(arr) {
    return arr.filter(x => x == true).length
};


countTrue2([true, false, false, true, false]);
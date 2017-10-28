//Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).

function noNegativeIndexes(inputArray){
	for(i=0;i<inputArray.length;i++){
		if (inputArray[i] < 0){
			inputArray[i]=0;
		} 
	}
	return inputArray;
}

var x = [1,5, 10, -2];
 noNegativeIndexes(x);
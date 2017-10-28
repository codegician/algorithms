//  Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares each value in the array.  When the program is done x should have values that have been squared (e.g. [1, 25, 100, 4]).


function squareArrayIndexes(inputArray){
	for(i=0;i<inputArray.length;i++){
		inputArray[i] *= inputArray[i];
	}
return inputArray;
}

var x = [2,5,7,9];
squareArrayIndexes(x);
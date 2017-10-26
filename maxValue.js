//Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array.
    var x = [-3,3,5,7,9];
    
function maxValueInArray(inputArray){
	for(i=0; i < inputArray.length; i++){
		var max = inputArray[0];
		if(max < inputArray[i]) {
			max = inputArray[i];
		}
	
	}
		console.log(max);
}

maxValueInArray(x);
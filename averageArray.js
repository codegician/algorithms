//Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.  Again you're not to do this by using of any of the pre-built functions in Javascript.  Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.

function averageArray(inputArray){
	var sum=0;
	for(i=0; i < inputArray.length;i++){
		sum += inputArray[i]
	}
	 console.log(sum/inputArray.length);
}
var x= [21,3,5,7];
averageArray(x);
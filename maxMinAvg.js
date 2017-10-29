//Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array. 

function maxMinAvg(inputArray){
	var max = inputArray[0];
	var min = inputArray[0];
	var sum = 0;
	for(i=0;i<inputArray.length;i++){
		
		if(inputArray[i] > max){
			max = inputArray[i];
		}
		else if(inputArray[i] < min){
			min = inputArray[i];
		}
		sum += inputArray[i];
		
   	}

	console.log('The maximum number is', max);
	console.log( 'The minimum value is',min);
	console.log('The average is', (sum/inputArray.length))
	return;
}

var x = [1,5, 10, -2];
maxMinAvg(x);
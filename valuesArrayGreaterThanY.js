//Write a program that takes an array and returns the number of values in that array whose value is greater than y. For example, if array = [1,3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array whose value is greater than 3).  Again make sure you come up with a simple base case and write instructions to solve that base case first and then test your instructions for other complicated cases. You can use a count function with this assignment.

function valuesArrayGreaterThanY(inputArray){
  var y = 3;
  var count = 0;
	for(i=0;i<=inputArray.length;i++){
		if (inputArray[i] > y) {
			count += 1;
		}
	
	}
		console.log(count);
}

var x = [1,3, 4, 6, 5, 7];
 valuesArrayGreaterThanY(x);
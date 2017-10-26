//Write a program that would print the sum of all the odd numbers from 1 to 5000


function sumOfOdd1To5000(){
   var sum = 0;
   for(i=1; i<=5000; i=i+2){
   	 sum = sum + 1;
   }
   console.log(sum);
}

 sumOfOdd1To5000();
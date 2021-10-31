function smallestPairSum(numbers)
{
  var counter1 = numbers.length;
  var compare = [];
   for(var x = 0;x < counter1; x++){
     
            for(var y = 0;y < counter1; y++){
                   if(y > x){  
                    compare.push(numbers[x] + numbers[y]);
                }
             }
       }
     return Math.max.apply(null, compare); 
}

smallestPairSum([10,14,2,23,19])
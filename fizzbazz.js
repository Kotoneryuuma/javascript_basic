function fizzbuzz(num){
    var newarr = [];
    for( var i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        i = "FizzBuzz";
      }
      else if(i % 3 === 0){
        i = "Fizz";
      }
      else if(i % 5 === 0){
        i = "Buzz";
      }
      newarr.push(i);
    }
    
    return newarr;
  }
  
  console.log(fizzbuzz(15));
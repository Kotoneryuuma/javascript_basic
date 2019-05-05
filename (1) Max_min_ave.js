function maxMinAve(arr){
    var sum = 0;
    var max = 0;
    var min = 0;
    
    for (var i = 0; i < arr.length; i++){
      if(max < arr[i]){
        max = arr[i];
      }
      if (min > arr[i]){
        min = arr[i];
      }
      sum += arr[i];
    }
    var ave = sum / arr.length;
    var newstr = 'The minimun is '+min+', the maximum is '+max+', and the average is ' +ave+'.';
    return  newstr;
  }
  
  maxMinAve([1, -2, 9, 4])
  
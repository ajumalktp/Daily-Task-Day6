function findEvenIndex(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((acc, cur) => acc + cur, 0); 
    
    for (let i = 0; i < arr.length; i++) {
      rightSum -= arr[i]; 
      if (leftSum === rightSum) {
        return i;
      }
      leftSum += arr[i];
    }
    
    return -1; 
  }
  console.log(findEvenIndex([1,2,3,4,3,2,1]));
  console.log(findEvenIndex([1,100,50,-51,1,1])); 
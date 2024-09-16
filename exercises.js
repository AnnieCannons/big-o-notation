
// For each of the functions lised below, indicate the O notation as wll as your reasoning behind the answer.

// 1. Even or odd

function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }
  
//O(1) This is because the function performs a single arithmetic operation (modulus division by 2) and a comparison operation, both of which take constant time regardless of the size of the input. 
  
// 2. Are You Here?
  
  function areYouHere(arr1, arr2) {
      for (let i=0; i<arr1.length; i++) {
          const element1 = arr1[i];
          for (let j=0; j<arr2.length; j++) {
              const element2 = arr2[j];
              if (element1 === element2) return true;
          }
      }
      return false;
  }
  
  //O(n^2) in this case, since we have nested loops where each loop iterates through its respective array, the total number of iterations is proportional to the product of the lengths of both arrays, which is n * m. Or more simplified, O(n^2)
  
// 3. Doubler
  
  function doubleArrayValues(array) {
      for (let i=0; i<array.length; i++) {
          array[i] *= 2;
      }
      return array;
  }
  //O(n), the time complexity scales linearly based on the based on the size of the input.

  
// 4. New Search
  
  function newSearch(array, item) {
      for (let i=0; i<array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }
  //O(n) it involves iterating through each element of the array until it finds the target item. The function's performance scales linearly with the size of the input array, making it O(n) 
  
// 5. Creating Pairs
  
  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }
  //O(n^2), this is another nested loop, so the iteration scales quadratically and grows based on the input

  
// 6. Computing Fibonacci Numbers
  
  function generateFib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        result.push(0);
      }
      else if (i == 2) {
        result.push(1);
      }
      else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  }
  
//O(n), the overall time complexity of the function is O(n) since it iterates n times
  
// 7. Efficient Search
  
  function efficientSearch(array, item) {
      let minIndex = 0;
      let maxIndex = array.length - 1;
      let currentIndex;
      let currentElement;
  
      while (minIndex <= maxIndex) {
          currentIndex = Math.floor((minIndex + maxIndex) / 2);
          currentElement = array[currentIndex];
  
          if (currentElement < item) {
              minIndex = currentIndex + 1;
          }
          else if (currentElement > item) {
              maxIndex = currentIndex - 1;
          }
          else {
              return currentIndex;
          }
      }
      return -1;
  }
  
  // O(log n), because essentially the algorithm reduces the time/search space by half, or reduces it logarithmically. The other algorithms in here are otherwise constant.

// 8. Random element
  
  function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  
  //  the time complexity of the function is O(1), as the operations involved do not depend on the size of the input array. Regardless of the size of the array, the function's execution time remains constant.

// 9. Is It Prime?
  
  function isPrime(n) {
      if (n < 2 || n % 1 != 0) {
          return false;
      }
      for (let i = 2; i < n; ++i) {
          if (n % i == 0) return false;
      }
      return true;
  }
  
  //technically this one is O(sqrt(n)), because it iterates up to the square root of n
  
// 10. Factorial of a number w/ recursion
  
  function factorialOf(n) {
      switch (n) {
          case 0:
          case 1:
              return 1;
          default: return n * factorialOf(n - 1);
      }
  }
  
  //this one is still O(n) because the operations scale linearly with the input size of n.
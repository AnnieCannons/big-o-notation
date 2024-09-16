
// For each of the functions lised below, indicate the O notation as wll as your reasoning behind the answer.

// 1. Even or odd

function isEven(value){
    if (value % 2 == 0){
      return true;
    }
    else
      return false;
  }
  //O(1) reason Constant time complexity. 
  //Regardless of the size of the input, the function performs a single operation to check if the value is even or odd.
  

  
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
  //O(n^2), Quadratic time complexity. 
  //It has nested loops, and for each element in arr1,  and it iterates through all elements in arr2
  
  
// 3. Doubler
  
  function doubleArrayValues(array) {
      for (let i=0; i<array.length; i++) {
          array[i] *= 2;
      }
      return array;
  }
  //O(n), its the Linear time complexity. 
  //It iterates through each element in the array once, performing a constant-time operation for each element.
  

  
// 4. New Search
  
  function newSearch(array, item) {
      for (let i=0; i<array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }

 // O(n),Linear time complexity. 
 //It iterates through the array once, and the time it takes is directly proportional to the size of the array.
  
  
// 5. Creating Pairs
  
  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i+1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }
  //O(n^2)  Quadratic time complexity. 
  //It has nested loops, and for each element in the array, it iterates through all subsequent elements.
  

  
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
  //O(n) - Linear time complexity.
  // It iterates num times, calculating each Fibonacci number once.
  

  
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
  //O(log n), Logarithmic time complexity.
  //It uses binary search, halving the search space at each step.
  

// 8. Random element
  
  function findRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  //O(1) - Constant time complexity. 
  //It performs a constant number of operations regardless of the size of the array.
  
  
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
  //O(n), Linear time complexity in the worst case.
  //It iterates up to n to check for divisibility.
  
  
  
// 10. Factorial of a number w/ recursion
  
  function factorialOf(n) {
      switch (n) {
          case 0:
          case 1:
              return 1;
          default: return n * factorialOf(n - 1);
      }
  }
  //O(n) - Linear time complexity.
  //It calls itself recursively n times, decrementing n by 1 each time until it reaches the base case. So, the number of recursive calls is proportional to n.
  
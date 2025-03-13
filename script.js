// Problem 1
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(10, 20));
console.log(calculateSum(7, 8));
console.log(calculateSum(103, 240));



// Problem 2
let isEven = (number) => {
    if (number % 2 === 0)
    {
        return true;
    }

    else
    {
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(7));



// Problem 3
let numbers = [10, 20, 30, 40, 50, 99, 100];


function findMax(numbers)
{
    let maxNum = 0;

    for (let number of numbers) 
    {
        if(number > maxNum)
        {
            maxNum = number;
        }
    }

    return maxNum;

}

console.log(findMax(numbers));




// Problem 4
let numArr = [4, 2, 5, 6, 1, 9, 15, 24, 23, 17];


let filterOddNumbers = (numberArray) => {
    let oddNumArr = [];

    for(num of numberArray)
    {
        if(num % 2 !== 0)
        {
            oddNumArr.push(num);
        }
    }

    return oddNumArr;
}

console.log(filterOddNumbers(numArr));




// Problem 5
function countWords(str) 
{
    let count = 0;

    let charArray = Array.from(str);

    for(let i=1; i<=charArray.length; i++)
    {
        count++;
    }

    return count;
}

console.log(countWords("Hello")); 
console.log(countWords("Bangladesh")); 
console.log(countWords("JavaScript")); 




// Problem 6
let Arr = [2, 5, 4, 2, 8, 12, 5, 8, 18, 12, 22, 56]

function removeDuplicates(Arr) 
{
    let arrWithoutDuplicates = [];

    for(item of Arr)
    {
        if(!arrWithoutDuplicates.includes(item))
        {
            arrWithoutDuplicates.push(item);
        }
    }

    return arrWithoutDuplicates;
}

console.log(removeDuplicates(Arr));
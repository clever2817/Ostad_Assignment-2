// Problem 1
// function calculateSum(num1, num2) {
//   return num1 + num2;
// }

// console.log(calculateSum(10, 20));
// console.log(calculateSum(7, 8));
// console.log(calculateSum(103, 240));


// Problem 2
// let isEven = (number) => {
//     if (number % 2 === 0)
//     {
//         return true;
//     }

//     else
//     {
//         return false;
//     }
// }

// console.log(isEven(10));
// console.log(isEven(7));


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

//1
let arrOfInteger = [1, 2, 3];
console.log(arrOfInteger);
console.log(arrOfInteger.length);

//2
let arrOfStrings = ["one", "two"];
console.log(arrOfStrings);``
arrOfStrings.push("three");
console.log(arrOfStrings);

//3
let arrOfString = ["one", "two", "three"];
console.log(arrOfString);
arrOfString.push("four");
console.log(arrOfString);
//4
let emptyArray: number[] = [];
console.log(emptyArray);
emptyArray.push(1);
console.log(emptyArray);
emptyArray.push(2);
console.log(emptyArray);
// loops
//1
let arrayOfFive = [1, 2, 3, 4, 5];
for( let i = 0; i < arrayOfFive.length; i++) {
    console.log(arrayOfFive[i]);
}

//2
let arrayForSum = [ 2,4,5,6,7]
let sum  = 0;
for(let i = 0; i < arrayForSum.length; i++){
    console.log(arrayForSum[i]);
    sum += arrayForSum[i]
}
console.log("the sum of array element is", sum)

//3
let arrayForDouble = [ 12,32,323,232,23121]
let doubledArray = []
for(let i = 0; i < arrayForDouble.length; i++){
    doubledArray.push(arrayForDouble[i] * 2)
}
console.log(doubledArray)

//4
let reverseArray = [43,312,431]
for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log(reverseArray[i]);
}

//typical interview task
// 1) Find minimum number in array
let arr = [12, -3, 45, 0, 8, -22, 7];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Minimum:", min);

// 2) Find maximum number in array
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Maximum:", max);

// 3) Count the number of even numbers in array
let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Even numbers count:", evenCount);

// 4) Create new array from positive numbers
let positiveArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveArr.push(arr[i]);
    }
}
console.log("Positive numbers array:", positiveArr);
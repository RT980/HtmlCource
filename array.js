QUESTION NUMBER 1;

let arr = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
}

QUESTION NUMBER 2;

let arr = [1,2,3,4,5,6,7,8,9];
for(let i=0; i < arr.length; i++){
    if(arr[i]%2 !===0){
        console.log(arr[i]);
    }
}

QUESTION NUMBER 3;

let arr = [5,10,15];
let sum = 0;
for(let i= 0; i<arr.length; i++){
    sum = sum + arr[i];
    
}
console.log(sum);


QUESTION NUMBER 4;

let arr = [3,5,7,2,8];
let max = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);

QUESTION NUMBER 5;

let arr = [12,4,6,9,1];
let min = arr[0];
for(let i=1; i< arr.length; i++){
    if(arr[i]<min){
        min = arr[i]
    }
}

console.log(min)

QUESTION NUMBER 6;

let arr = [8,3,7,5]
 
let count = 0;

for(let i=0; i<arr.length; i++){
    count++;
}
console.log(count);

QUESTION NUBER 7;

let arr = [2,3,4];
let multiple = 1;
for(let i=0; i<arr.length; i++){
    multiple = multiple*arr[i];
}
console.log(multiple);

QUESTION NUMBER 8;

let arr = [5,6,7,8];
let number = 7;
let target = false;

for( let i=0; i<arr.length; i++){
    if(arr[i]===number){
        target=true;
        break;
    }
}
if(target){
    console.log("found");

}else{
    console.log("not found");

}

QUESTION NUMBER 9;


    const arr = [1,2,2,3,4,4,5];
 const newArr =[]

 for(let i=0; i<arr.length; i++){
    let isval=false;
    for( j=0; j<newArr.length; j++){
        if(arr[i]===newArr[j]){
            isval=true;
            break;
        }
    }
    if(!isval){
        newArr.push(arr[i])
    }

 }
 console.log(newArr)
QUESTION NUMBER 10;

let arr = [1,2,3];
let squares = [];
 
for(let i= 0; i < arr.length; i++){
squares.push(arr[i]*arr[i])
}
    console.log(squares);


QUESTION NUMBER 11;

let arr = [5,12,7,14,3];
let num = [];
for(let i=0; i< arr.length; i++){
    if(arr[i]>10){
        num.push(arr[i]);
    }
}

console.log(num);

QUESTION NUMBER 12;

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let NewArr = arr1.concat(arr2);
console.log(NewArr);


QUESTION NUMBER 13;

let arr = [9,7,5,3,1];
let Newarr = arr.length;
console.log(Newarr);

QUESTION NUMBER 14;

let arr = [10,20,30];
 let sum =0;
  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  let average = sum / arr.length;

  console.log(average);


QUESTION NUMBER 15;
 let arr = [1,2,3,4,5];
 for(let i=arr.length-1; i=0; i--){
    console.log(arr[i])
 }

QUESTION NUMBER 16;

let arr1 = [1,2,3];
let arr2 = [2,3,4];

let commonNumber = [];
 for(let i=0; i<arr1.length; i++){
    if(arr2.includes(arr1[i])){
commonNumber.push(arr1[i]);
    }
 }
console.log(commonNumber);

QUESTION NUMBER 17;

const arr = [1,2,3,4,5]

const MiddleIndex = Math.ceil(arr.length/2);

const firsthalf = arr.slice(0, MiddleIndex);
const secondhalf = arr.slice(MiddleIndex);

console.log(firsthalf);
console.log(secondhalf);

QUESTION NUMBER 18;

const arr = [10,20,5,30]

const Index = arr.indexOf(5);

console.log(Index);


QUESTION NUMBER 19;

let arr = [2,4,6,8];

if(arr.includes(4)){
    console.log("yes")
}else{
    console.log("no")
}

QUESTION NUMBER 20;

let arr = ["apple", "banana", "cherry"];
let NewStringarr = [];
for(let i=0; i<arr.length; i++){
    NewStringarr.push(arr[i].length);
}

console.log(NewStringarr);


const add = (a,b)=>{
    return a+b
}

const subtarct = (a,b)=>{
    return a-b
}


module.exports={subtarct,add};

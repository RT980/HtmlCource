QUESTION NUMBER 1;

function number(){
    for(i=1; i<=10; i++){
        console.log(i)
    }
}
number()


QUESTION NUMBER 2;

function SumOfNumber(n){
    let sum=0;
    for(i=1; i<=n; i++){
        sum = sum +i
    }

    return sum;

}

let n = 5;
console.log( n, SumOfNumber(n) )


QUESTION NUMBER 3;

function EvenNumber(){
    for(i=1; i<=20; i++){
        if(i%2===0){
            console.log(i)
        }
    }
}

EvenNumber()


QUESTION NUMBER 4;

function OddNumber(){
    for(i=1; i<=20; i++){
        if(i%2 !==0){
            console.log(i)
        }
    }
}

OddNumber()

QUESTION NUMBER 5;

function factorial(n){
    let result = 1;
    for(i=1; i<=n; i++){
        result = result * i;
    }

    return result;
}

let n=9;
console.log('facteriol of given number', n, 'is', factorial(n))

QUESTION NUMBER 6;

function MultipleOfFive(){
    for(i=1; i<=10; i++){
        console.log(`5*${i} = ${5*i}`)
    }
}

MultipleOfFive()


QUESTION NUMBER 7;

function ReverseOrder(){
    for(i=10; i>=1; i--){
        console.log(i)
    }
}
ReverseOrder()

QUESTION NUMBER 8;
function MultipleOfThree(){
    for(i=1; i<=30; i++){
        if(i%3===0){
            console.log(i)
        }
    }
}
MultipleOfThree()

QUESTION NUMBER 9;

function SumOfEvenNumber(){
    let sum = 0;
    for(i=2; i<=50; i ++){
        if(i%2===0){
            sum += i;
            
        }
     
    }
    return sum;
}
console.log('sum of even numbe between 1 to 50',',', SumOfEvenNumber())

QUESTION NUMBER 10;

function SumOfOddNumber(){
    let sum =0;
    for(i=1; i<=50; i++){
        if(i%2 !==0){
            sum = sum + i;
        }
    }
    return sum;

}

console.log('sum of odd number between 1 to 50', ',', SumOfOddNumber())

QUESTION NUMBER 11;

function MultipleOfFive(){
    for(i=1; i<=100; i++){
        if(i%5==0){
            console.log(i)
        }
    }
}

MultipleOfFive()

QUESTION NUMBER 12;

function Fibonacci() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
        let count = 0;
    for (i = 3; i <=10; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
        count++
        if(count === 10){
            
        }
        
    }
}

Fibonacci();

QUESTION NUMBER 14;

function SquareNumber(){
    for(i=1; i<=10; i++){
        console.log(`${i}=${i*i}`)
    }

}

SquareNumber()

QUESTION NUMBER 15;

function SumOfSquareNumber(n){
    let num=1;
    for(i=2;i<=num;i ++){
        console.log(`${i}=${i*i}`)
            num = num + i;

    

    return num;
}
}
let n=2;

console.log( SumOfSquareNumber(n))

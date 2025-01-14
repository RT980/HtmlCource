Question number 1

for(i=1; i<=20; i++){
    console.log(i)
}

QUESTION NUMBER 2

let sum=0;
for(i=1; i<=10; i++){
        sum +=  i
    }

console.log( sum)


QUESTION NUMBER 3

for(i=1; i<=10; i++){
    console.log(`5*${i}=${5*i}`)
}

QUESTION NUMBER 4

for(i=1; i<=100; i++){
    console.log(i)
}

QUESTION NUMBER 5

let sum=0;
for(i=1; i<=10; i++){
    if(i%2 !==0){
        sum = sum + i

    }
}
console.log(sum)

QUESTION NUMBER 6
for(i=20; i>=1; i--){
    console.log(i)

}

QUESTION NUMBER 7
for(i=10; i>=1; i--){
    console.log(`3*${i}= ${3*i}`)
}

QUESTION NUMBER 8

for(i=1; i<=10; i++){
    console.log(`${i}= ${i*i}`)
}

QUESTION NUMBER 9
let sum=0;
for(i=1; i<=100; i++){
    if(i%2==0){
        sum = sum + i
    }
}
console.log(sum)

QUESTION NUMBER 10

for(i=1; i<=5; i++){
    console.log(`${i}=${i*i*i}`)
}

QUESTION NUMBER 11

for(i=50; i>=1; i--){
    console.log(i)
}

QUESTION NUMBER 12

let sum=0;
for(i=1; i<=19; i++){
    if(i%2 !==0){
        sum = sum + i;
    }
}
console.log(sum)

QUESTION NUMBER 13

let sum = 0;
for(i=1; i<=9; i+=2){
    sum += i
}
console.log(sum)

QUESTION NUMBER 14

for(i=1; i<=10; i++){
    console.log(i)
}

QUESTION NUMBER 15
 for(i=1; i<=10; i++){
    console.log(`2^${i}=${2**i}`)
 }

QUESTION NUMBER 16

let sum=0;
for(i=1; i<=20; i++){
    if(i%2==0){
        sum = sum +i
    }
}
console.log(sum)

QUESTION NUMBER 17

for(i=10; i>=1; i--){
    console.log(`4*${i}=${4*i}`)
}

QUESTION NUMBER 19
for(i=30; i>=10; i-=2){
    console.log(i)


}


QUESTION NUMBER 18 

let count= 1 ;
for(count<=12;count++;){
    let isPrime=true;

    for(let i=2; i< Math.sqrt(count); i++){
        if(count%i==0){
            isPrime=false;
            count++
            break;

        }
    }
    if(isPrime){
        console.log(count)
    }

}
let num = 11;
let isPrime=true;

for(let i=2; i<num; i++){
    if(num %i==0){
        isPrime=false;
        break;

    }

}

if(isPrime){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not prime number`);
}
 

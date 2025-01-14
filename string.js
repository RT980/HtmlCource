QUESTION NUMBER 1;

let str = "Hello EveryOne";
let letter = 'e';
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === letter) {
    count++;
  }
}

console.log(` ${count} `);

QUESTION NUMBER 2;

let str = "Hello EveryOne";

if(str.startsWith('H') && str.endsWith('e')){
    console.log( "strat with 'H' and end with 'e'")
}else{
    console.log( "does not start with 'H' and end with 'e'")
}

QUESTION NUMBER 3;

let str = "Hello EveryOne"
console.log(str.toUpperCase());

QUESTION NUMBER 4;

let str = "Hello EveryOne";
let Newstr =str.replace("Hello","Hi");
console.log(Newstr);

QUESTION NUMBER 5;

let str = "Hello EveryOne";
let vowels = "aeiou";
let count = 0;
for(i=0; i < str.length; i++){
    if(vowels.includes(str[i].toLocaleLowerCase())){
        count++;
    }
}

console.log(`${count}`);

QUESTION NUMBER 6;

let str = "Hello EveryOne";
let words = str.split(" ");
let result = "";
for(i=0; i<words.length; i++){
    result = result + words [i] [0];
}

console.log(`${result}`);

QUESTION NUMBER 7;
 
let str = "madam";
let normal = str.toLowerCase();
let reversed = normal.split("").reverse().join("");
 if(normal === reversed){
    console.log("it is palindorme")
 }else{
    console.log("it is not palindorme")
 }

QUESTION NUMBER 8;

let str = "Hello EveryOne";
let Newstr = str.trim(" ");
console.log(Newstr)
console.log(Newstr.length)


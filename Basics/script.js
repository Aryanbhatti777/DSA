// print from 1 to n

for (let i = 1; i <= 10; i++){
    console.log(i);
}

// print from n to 1
for (let i = 10; i>0; i--){
    console.log(i);
}

// sum of first n natural numbers
let sum1 = 0;
for (let i = 1; i<=7; i++){
    sum1 += i;
}
console.log(sum1);

// sum of first n odd numbers
let sum2 = 0;
for(let i = 1; i<= 10; i++){
    if(i%2 !== 0){
        sum2 += i;
    }
}
console.log(sum2)


// count the numbers
let count = 0;
for(let i = 1; i<= 100; i++){
    count += 1;
}
console.log(count);

// count even numbers 

let ecount = 0;
for(let i = 1; i<= 100; i++){
    if(i%2 === 0){
        ecount += 1;
    }
}
console.log(ecount);

// count odd numbers 

let ocount = 0;
for(let i = 1; i<=100; i++){
    if(i%2 !== 0){
        ocount += 1;
    }
}
console.log(ocount);

// count numbers divisible by 3

let dcount = 0;
for(let i=1; i<=100; i++){
    if(i%3 ===0){
        dcount += 1;
    }
}
console.log(dcount);

// count numbers divisible by both 2 and 3

let d2count = 0;
for(let i = 1; i<=100; i++){
    if(i%6 == 0){
        d2count += 1;
    }
}
console.log(d2count);

let no2dcount = 0;
for(let i = 1; i<= 100; i++){
    if(i%2 !== 0){
        no2dcount += 1;
    }
}
console.log(no2dcount);


// sum of digits of a number 

let sum3 = 0;
let n = 12345;
while(n > 0){
    let digit = n % 10;
    sum3 += digit;
    n = Math.floor(n/10);
}
console.log(sum3)

// count digits of a number 

let cdigits = 0;
let num = 123400058;

while(num > 0){
    let digit = num % 10;
    cdigits++
    num = Math.floor(num/10)
}
console.log(cdigits)

// product of digits of a number

let product = 1;
let number = 12345;

while(number > 0){
    let digit = number%10
    product = product*digit;
    number = Math.floor(number/10)
}
console.log(product)

// Count even digits in a number

let evenNumbers = 0;
let ntocounteven = 2468;
while (ntocounteven > 0) {
    let digit = ntocounteven % 10
    if (digit % 2 === 0) evenNumbers++;
    ntocounteven = Math.floor(ntocounteven / 10)
}
console.log(evenNumbers);

// sum of square of digits of a number
let squareN = 0;
let nforsquare = 1234;
while (nforsquare > 0) {
    let digit = nforsquare % 10;
    squareN = squareN + digit * digit;
    nforsquare = Math.floor(nforsquare / 10)
}
console.log(squareN)


// // check armstrong number
let result = 0;
let armstrong = 1634;
let temp = armstrong;

let digits = 0;


while(temp>0){
    digits++;
    temp = Math.floor(temp/10)
}
temp = armstrong;


while(temp>0){
    let digit = temp%10;
    result = result + digit**digits;
    temp = Math.floor(temp/10)
}
console.log(armstrong === result, armstrong, result)

// check if the number is prime or not

let cPrime = 54;
let isPrime = true

for(let i = 2; i<= Math.sqrt(cPrime); i++){
    if(cPrime%i===0){
        isPrime = false;
        break;
    }
}
console.log(isPrime);


// print prime numbers from 1 to n

for(let i = 2; i<= 20; i++){
    let isPrime = true
    for(let j = 2; j<= Math.sqrt(i); j++){
        if(i%j===0){
            isPrime = false 
            break
        }
        
    }
    if(isPrime){
        console.log(i);
        
    }
}

// count prime numbers from 1 to n
 let count1 = 0;
for(let i = 2; i<= 100; i++){
    let isPrime = true
   
    for(let j = 2; j<= Math.sqrt(i); j++){
        if(i%j===0){
            isPrime = false 
            break
        }
        
    }
    if(isPrime){
        count1 += 1
    }

    
}
 console.log(count1);

// remove the duplicate numbers from array

let arr1 = [1,2,2,3,4,4];
let result1 = [];

for(let i = 0; i< arr1.length; i++){
    let isDuplicate = false
    for(let j = 0; j< result1.length; j++){
        if(arr1[i]===result1[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        result1.push(arr1[i])
    }
    
}
console.log(result1)



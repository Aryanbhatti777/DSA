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
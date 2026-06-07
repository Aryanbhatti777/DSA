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

// find the largest number form array

let arr2 = [-3,-7,-2,-9,-5]
let largest = arr2[0];

for(let i = 0; i < arr2.length; i++){
    if(arr2[i]>largest){
        largest = arr2[i]
    }
}
console.log(largest)


// count vowels from a string 

let string = "hello"
let vowels = ["a", "e", "i", "o", "u"]
let vowelsCount = 0;
string = string.toLowerCase();

for(let i = 0; i<string.length; i++){
    let isVowel = false
    for(let j = 0; j<vowels.length; j++){
        if(string[i]===vowels[j]){
            isVowel = true
            break;
        }
    }
    if(isVowel){
        vowelsCount++
    }
}
console.log(vowelsCount)

// reverse a string
let name = "Aryan"
let reverseName = name.split('').reverse().join("")
console.log(reverseName)

// check if a string is palindrome

let name2 = "madam"
let realName = "madam"
let reversedName = name2.split('').reverse().join("")
console.log(realName === reversedName)

// sum of two digits of a string equal to target

let str = [8,7,3,15];
let target = 11;

for(let i = 0; i<str.length; i++){
    for(let j = i+1; j<str.length; j++){
        if(str[i]+str[j]===target){
            return console.log([str[i],str[j]]);
            
        }
    }
}

// sum of 1 to n without loop
let n1 = 100;
let sum = (n1**2+n1)/2
console.log(sum)

// sum of 1 to n even numbers without loop

let n2 = 100;
let sum4 = (n2/2)*((n2/2)+1)
console.log(sum4) 

// printing stars
for(let i = 1; i<= 5; i++){
    let row = "";
    for(let j = 1; j<=i; j++){
        row += "*"
    }
    console.log(row)
}


// printing reverse stars

for(let i = 1; i<=5; i++){
    let row = "";
    for(let j = 1; j <= 5-i+1; j++){
        row += "*"
    }
    console.log(row)
}
let num = 5;
for(let i = 1; i<=num; i++){

    for(let j = 1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

for(let i = 1; i<=num; i++){
    for(let j = 1; j<= num-i+1; j++){
        process.stdout.write("* ")
    }
    console.log();
    
}

for(let i = 1; i<= num; i++){
    for(let j = 1; j<= num-i; j++){
        process.stdout.write(" ")
    }
    for(let k = 1; k<= 2*i-1;k++ ){
        process.stdout.write("*")
    }
    console.log();
    
}

for(let i = 1; i<= num; i++){
    for(let j = 1; j<= num-i; j++){
        process.stdout.write(" ")
    }
    for(let k = 1; k<= 2*i-1;k++ ){
        process.stdout.write("*")
    }
   
    console.log();
    
}

for(let i = 1; i<= num-1; i++){
    for(let j = 1; j<= i; j++){
        process.stdout.write(" ")
    }
    for(let k = 1; k<= (num-i)*2-1; k++){
        process.stdout.write("*")
    }
    console.log()
}

let digit = 1;

for(let i = 1; i<= num; i++){
    for(let j = 1; j<=i; j++){
        process.stdout.write(digit.toString()+" ")
        digit++;
    }
    console.log()
}

for(let i = 1; i<= num; i++){
    for(let j = 1; j<= num; j++){
        process.stdout.write("* ")
    }
    console.log();
    
}

for(let i = 1; i<= num; i++){
    for(let j = 1; j<= i; j++){
        process.stdout.write(digit.toString())
    }
    console.log();
    digit++
}

for(let i = 1; i<= num; i++){
    for(let j = 1; j<=i; j++){
        process.stdout.write(j.toString()+" ")
        
    }
    console.log()
}

for(let i = 1; i<= num; i++){
    for(let j = 1 ; j<=num-i+1; j++){
        process.stdout.write(j.toString()+" ")
    }
    console.log();
    
}

for(let i = 1; i<= num; i++){
    
    for(let j = 1; j<= num;j++){
       
            if(j == 1 || j == 5 || i == 1 || i == 5){
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
            
        
    }
    
    
console.log();

}
let alphabet =  65; 

for(let i = 1; i<= num; i++){
    
    for(let j = 1; j<=i ; j++){
        process.stdout.write(String.fromCharCode(alphabet)+ " ")
        
    }
    alphabet++
    console.log()
}

for(let i = 1; i<= num; i++){
    let alphabet =  65; 
    for(let j = 1; j<=i ; j++){
        process.stdout.write(String.fromCharCode(alphabet)+ " ")
         alphabet++
    }
   
    console.log()
}  

let arr = [5, 8, 2, 10, 7];
let target = 10;
for(let i = 0; i < arr.length; i++ ){
    if(arr[i] === target){
        console.log("Target found at index: ", i)
    }
}

let arr = [1, 2, 3, 2, 4, 2, 5];
let target = 2;
let count= 0
for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
        count++
    }
}
console.log(count)

let arr = [10, 20, 30, 40, 25];
let target = 25;
let found = arr.includes(target)
if(found){
    console.log("Found")
}else{
    console.log("Not found");
    
}

let arr = [1, 2, 3, 4, 5];

let i = 0, j = arr.length-1;
 
while(i !== j){
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);

let arr = [1,2,3,4];
let arrCopy = [];
for(let i = 0; i<arr.length; i++ ){
    arrCopy.push(arr[i])
}
console.log(arrCopy)


let arr = [10, 20, 5, 30, 25, 70];

let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for(let i = 2; i<arr.length; i++){
    if(arr[i] > max ){
        smax = max; 
        max = arr[i]
    }else if(arr[i] > smax && arr[i] < max){
        smax = arr[i]
    }
}

console.log(max, smax)

let arr = [5, 10, 3, 20];
let max = Math.max(arr[0],arr[1]) , min = Math.min(arr[0],arr[1]);

for(let i = 2; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }else if(arr[i] < min){
        min = arr[i]
    }
}

console.log("Difference between max and min number is : ",max-min)

let arr = [0,1,0,2]

let i = arr.length-1; j = arr.length-1;

while(i !== 0){
    let temp;
    if(arr[i] == 0){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    i--
}

console.log(arr)

let arr = [1, 2, 3, 2, 4, 1];
let digits = [];

for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            digits.push(arr[i])
        }
    }
}
digits.forEach(item => console.log(item))

let arr = [1, 2, 3, 4, 5];

let i = 0; j = 1;
 let okay = false;
while(i<arr.length-1){
   
    if(arr[j] > arr[i]){
        okay = true;
        i++
        j++
    }else{
        console.log('array not sorted')
        return;
    }
}
if(okay == true){
    console.log("Sorted")
}
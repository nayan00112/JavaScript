// function and methods



// default function
function myFunction(){
    console.log("Mitesh Vaghela");
}
myFunction(); 


// with parameter
function myFunction(msg){ // msg as parameter
    console.log(msg);
}
myFunction("Mitesh"); // mitesh pass as argument


// with parameter and return
function sum(a,b){
    s= a+b;
    return s;
}
let val = sum(8,5);
console.log(val);


// arrow
let arroSum = (a,b) => {
    console.log(a+b);
};
(arroSum(1,2));

// task
function vowels(str) {
    let c = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            // return str[index];
            c++;
        }
    }
    console.log(c);
}
vowels("Mitesh");

//above in arrow
let countVowels = (str1)=>{
    let c1 = 0;
    for (const char of str1) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            // return str[index];
            c1++;
        }
    }
    console.log(c1);
};
countVowels("IT")

//ForEach loop
let arr = new Array(1, 2, 3, 4, 5, 6);
arr.forEach((val) => {
    console.log(val * val);
});


//methods

// map method --> create a new array with the results of some operations
//syntex --> arr.map(callBack(value,index,arr))
let arr1 = [1,2,3,4,5,6];
let newArr1 = arr1.map((num)=>{
    return num**2;  // square of number
});
console.log(newArr1);


// Filter method -->create a new array that give true for a condition/filter
let arr2;
arr2 = ["IT","CE","ME","AE","EC","EE"];
let newArr2 = arr2.filter((val)=>{
    return (!val.endsWith("E"));
});
console.log(newArr2);


//reduce method ---> for sum,avg calculate
let arr3 = [1,2,3,4];
const op = arr3.reduce((res,val)=>{
    return res+val;
});
console.log(op);



//task2
// 1. return mark whose 90+
let mark =[88,99,98,89,90,91,97];
let newmark = mark.filter((val)=>{
    return val>90;
})
console.log(newmark);

//2.take n number frm user an dreturn 1 to n array
let n = prompt("Enter integer number:");
let arr4 = [];
for (let i = 1; i <= n ;  i++) {
    arr4[i-1] = i ;
}
console.log(arr4);

// 3.calcilate above arr sum 
let sumArr = arr4.reduce((sum,val)=>{
    return sum+val;
});
console.log("Sum is " + sumArr);

// 4.calcilate above arr multiplication 
let mulArr = arr4.reduce((sum,val)=>{
    return sum*val;
});
console.log("multiply/factorial is " + mulArr);
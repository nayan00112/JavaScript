////callback
function sum(a,b){
   console.log("Sum is :" , a+b);
}
function calculate(a,b, sumcallback){
    sumcallback(a,b);
}
calculate(1,2,sum); //sum with perenthesis it mean directly call
// another way
calculate(1,2,(a,b)=>{
    console.log(a+b);
});

///////////callback hell (nestedcallbacks/ pyramid of doom)
function getData(data,nextdata){
    setTimeout(()=>{
        console.log("data :" ,data);
        if (nextdata) {
            nextdata();
        }
    },2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});

// promice
// three state of promices resolve,pending, reject

// how promice wored
function getData(data,nextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("data :" ,data);
            // resolve("success");
            reject("Error"); // reject
            if (nextdata) {
                nextdata();
            }
        },5000);
    })
}
let promice = getData(1);

// method --> in programming to method are used .then() and .catch()
const getInfo = () => {
    return new Promise((resolve, reject) => {
        console.log("Give promice .");
        resolve("Success");
        reject("Network error!");
    })
}
let pro = getInfo();
// resolve
pro.then((res) => {
    console.log("Info is : ", res);
});
//reject
pro.catch((error) => {
    console.log("error : ", error);
});

/////////////// promice chain
function async(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data" , data);
            resolve("success");
        }, 2000);
    })
}

// // two ways 
// //1.
async(1).then((res)=>{
    async(2).then((res)=>{
    });
});

////////////// Async-Await
function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data: " , data);
            resolve("success");
        },2000);
    });
};

async function getDataAll(){
    console.log("data 1 Wait...... ");
    await getData(1);
    console.log("data 2 Wait...... ");
    await getData(2);
    console.log("data 3 Wait...... ");
    await getData(3);
    console.log("data 4 Wait...... ");
    await getData(4);
}
getDataAll();

// in which need to create function and call unnecessary call so, wil use
// IIFE( Immediately Invoked Function Expression )
(async function(){
    console.log("data 1 Wait...... ");
    await getData(1);
    console.log("data 2 Wait...... ");
    await getData(2);
    console.log("data 3 Wait...... ");
    await getData(3);
    console.log("data 4 Wait...... ");
// getDataAll();
    await getData(4);4
})();  //IIFE
//Also in which three method to use may be async,function or arrow_function
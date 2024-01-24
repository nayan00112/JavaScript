let btn1 = document.querySelector("button");

let a=0;
btn1.onclick = (evt) =>{  //evt --> event object
    a++;
    console.log("btn clicked ");

    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY);
}

//event listeners

// Node.addEventListener(event,function)
let div1 = document.querySelector("div");
div1.addEventListener("click",()=>{
    console.log("div click in listener -- 1");
});

const divvar = ()=>{
    console.log("div click in listener -- 2");
}

div1.addEventListener("click",divvar);

div1.addEventListener("click",()=>{
    console.log("div click in listener -- 3");
});
div1.addEventListener("click",()=>{
    console.log("div click in listener -- 4");
});


// Node.removeEventListener(event,function)
div1.removeEventListener("click",divvar);


// task -->Chenge Mode
let btnMode = document.querySelector("#mode");
let mode = "light";
let body = document.querySelector("body");

btnMode.addEventListener("click",()=>{
    if (mode === "light") {
        mode = "dark";
        // body.style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        mode = "light";
        // body.style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);
})

// task-2 mouseover
let div2 =  document.querySelector("div");

let wdiv = 100;
div2.addEventListener("mouseover",()=>{
    console.log("inside div")
    if (wdiv === 100) {
        div2.classList.add("hoverDiv1");
        div2.classList.remove("hoverDiv2");
        wdiv = 200;
        console.log("width is : 500")
    } else {
        div2.classList.add("hoverDiv2");
        div2.classList.remove("hoverDiv1");
        wdiv = 100;
        console.log("width is : 100")
    }
})
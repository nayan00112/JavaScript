
// window -->
// window object represents a open window n browser, it is browser's object(!=js) & is automatic created by browser
// console.log(window);
// window.console.log("Hello Word!")

//// DOM -->
// console.log(window.document.childNodes[1]);

////DOM Manipulation  --> dynamic changes

// by id
// let idEx = document.getElementById("h1").innerText="Vaghela Mitesh Rameshbhai";
// console.dir(idEx);

// by class name -->return html collection
// console.dir(document.getElementsByClassName("para"));

// by tag-name
// console.log(document.getElementsByTagName("h4"));

// by query selector
// console.log(document.querySelector("p")); //return 1st element
// console.log(document.querySelectorAll("h1")); //return all element (nodelist)

//// properties
//tag name
// console.log("tag name:" + document.body.tagName);
// innertext, innerhtml
// console.dir(document.body.firstChild);
// console.dir(document.querySelector("div").innerText);
// console.dir(document.querySelector("div").innerHTML);
// console.dir(document.querySelector("div").innerHTML = "<b>hello js</b>");
// textcontent -->most used for hidden element
// console.log(document.getElementById("hid").innerText);
// console.log(document.getElementById("hid").textContent);

// task
// 1. append/concate
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from Apna college students";

// 2. create 3 div with common class and add unique text into each other
// let box = document.getElementsByClassName("box");
// console.log(box);
// let num = 1;
// for (const div of box) {
    // div.innerText = `This is box number ${num}`;
    // num++;
// }


// Attributes --> getAtr & setAtr
// console.dir(document.querySelector(".para").getAttribute("class"));// return value of attribute which is define in tag
// let id = document.querySelector("h6");
// console.log(id.setAttribute("id","mitesh"));


// style --> .style
// let header = document.querySelector("h6");
// console.log(header.style);
// header.style.borderRadius="50%";
// header.style.paddingTop="100px";
// header.innerText ="header";

// Insert Element -->createElement(el)
let newele = document.createElement("div");
newele.innerText ="i am newly created";;
newele.style.width="100px";
newele.style.height = "100px";
newele.style.border="2px solid black";

let h4 = document.querySelector(".box");
// console.log(h4);
// h4.append(newele);  //add end access element
// h4.prepend(newele);  // add start access element
// h4.before(newele); //add before access element
// h4.after(newele); //add after access element
// h4.remove();   // remove element

// tasks
// 1. add new button at the starting of body
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color ="white";
let body1 = document.body;
body1.prepend(newBtn);

// 2. add new class and append it with old class using classlist
let parac = document.querySelector("p");
console.log(parac.getAttribute("class"));

parac.classList.add("newclass"); //classlist used for appends class in this method are used add & remove
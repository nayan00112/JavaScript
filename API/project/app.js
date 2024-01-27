const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let from_url = document.querySelector(".from select");
let to_url = document.querySelector(".to select");
let display = document.querySelector(".msg");


for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
        newOption.style.height = "10vh";
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag= (element) =>{
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal= 1;
        amount.value ="1";
    }
    const url = `${Base_URL}/${from_url.value.toLowerCase()}/${to_url.value.toLowerCase()}.json`;
    // console.log(url);
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    console.log(data.inr*amtVal); // conver here
    display.innerText =`${amtVal} ${from_url.value}  =  ${data.inr*amtVal} ${to_url.value}`
});
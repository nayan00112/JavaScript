// ----info----
// an interface for fetching resources(Request/response onjects)



const URL = "https://cat-fact.herokuapp.com/facts";
let fetchData = document.querySelector("#Fetch");
let button = document.querySelector("#btn");


//////-----Async-Await
const getData = async () => {
    console.log("Fetching data....");
    let response = await fetch(URL); // by default GET request
    console.log(response);
    let data = await response.json();
    // console.log(data[0].text);
    fetchData.innerText = data[4].text;
};


/////-----Promise chain
function getData(){
    fetch(URL).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        fetchData.innerText = data[0].text;
    });
}



button.addEventListener("click",getData);
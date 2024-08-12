console.log("fetch api");
// const btn = document.querySelector("#btn");
const factPara = document.querySelector("#factpara")
const btn =  document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    getfacts();
})


const URL = "https://dogapi.dog/api/v2/facts?limit=2";

const getfacts = async ()=>{
    console.log("getting data");
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data);

    // Ensure there are facts available before trying to access them
    if (data.data && data.data.length > 1) {
        factPara.innerText = data.data[1].attributes.body;
    } else {
        factPara.innerText = "No facts available";
    }
}

getfacts();

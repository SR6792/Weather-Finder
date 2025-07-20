const apiKey="0267664ed658e5f239229a9fb6031be7";
const input1=document.querySelector(".inp");
const btn=document.querySelector(".btn");
const locname=document.querySelector(".name");
locname.style.cssText="display:flex;align-items:center;";
function hover(){
    btn.style.backgroundColor="grey";
    btn.style.transform="scale(1.3)";
}
function unhover(){
    btn.style.backgroundColor="white";
    btn.style.transform="scale(1)";
}
async function fetchData() {
    try{
        const loc=input1.value.toLowerCase();
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apiKey}`);
        if(!response.ok){
            throw new Error("Place entered was incorrect");
        }
        const data=await response.json();//await to finish the promise
        console.log(data);
        const locationN=data.city.name.charAt(0).toUpperCase()+data.city.name.slice(1).toLowerCase();//only first letter caps
        locname.innerHTML=`<h1>Location:${locationN}</h1>`;
    }
    catch(error){
        console.error(error);
    }
}  
btn.addEventListener("click",fetchData);
btn.addEventListener("mouseenter",hover);
btn.addEventListener("mouseleave",unhover);


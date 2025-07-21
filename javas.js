const apiKey="0267664ed658e5f239229a9fb6031be7";
const input1=document.querySelector(".inp");
const btn=document.querySelector(".btn");
const temp=document.querySelector(".temp");
const humid=document.querySelector(".humidity");
const windspeed=document.querySelector(".wind_speed");
const locname=document.querySelector(".name");
locname.style.cssText="display:flex;align-items:center;";
const img=document.querySelector(".weather");
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
        const temperature=data.list[0].main.temp;
        const celc=temperature-273.15;
        const roc=Math.round(celc);
        temp.innerHTML=`<h1>Temp:${roc} C</h1>`;
        if(data.list[0].weather[0].main.toLowerCase().includes("Clear")){
            img.src="sun.jpg";
        }
        else if(data.list[0].weather[0].main.toLowerCase().includes("Rain")){
            img.src="rainy.png";
        }
        else{
            img.src="cloudy.jpg";
        }
        const humis=data.list[0].main.humidity;
        humid.innerHTML=`<h1>Humidity:${humis}<h1>`;
        const winds=data.list[0].wind.speed;
        windspeed.innerHTML=`<h1>Wind Speed:${winds}<h1>`;
    }
    catch(error){
        console.error(error);
    }
}  
btn.addEventListener("click",fetchData);
btn.addEventListener("mouseenter",hover);
btn.addEventListener("mouseleave",unhover);


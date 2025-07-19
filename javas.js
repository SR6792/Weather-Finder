const apiKey="9fc5b411e57749f8655fd3f782423157";
const url=`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
const input1=document.querySelector(".inp");
async function fetchData() {
    try{
        const loc=input1.value.toLowerCase();
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("Place entered was incorrect");
        }
        const data=response.json();
        
    }
    catch(event){
        return event;
    }
}  
btn=document.querySelector(".btn");
btn.addEventListener("click",fetchData);

const btn=document.getElementById("bn");
const city=document.getElementById("bm");
const search=document.getElementById("text")
const desc=document.getElementById("h");
const t=document.getElementById("io");
const wind=document.getElementById("y")
const humidity=document.getElementById("hum");
 
const hour=document.getElementById("ho");
const min=document.getElementById("min");
const  second=document.getElementById("sec");
const pm =document.getElementById("pm");
async function weather(data){ 
    const api=`ecaf39143242afabc1db3cf0420af838`
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${api}`
    const f=await fetch(`${url}`).then(r=> r.json())
    console.log(f)
        t.innerHTML=`${Math.round(f.main.temp-273.15) }`
        humidity.innerHTML=`${f.main.humidity}%`
        desc.innerHTML=`${f.weather[0].description}`
        wind.innerHTML=`${f.wind.speed} Km/H`
}
setInterval(()=>{
    let dt=new Date();
    hour.innerHTML=dt.getHours()
    min.innerHTML=dt.getMinutes()
   second.innerHTML=dt.getSeconds()
 },1000)
    
 btn.addEventListener("click",()=>{
    city.innerHTML=search.value
        weather(search.value)
  
 })
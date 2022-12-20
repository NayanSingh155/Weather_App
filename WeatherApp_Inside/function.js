let btnsrch=document.getElementById("srch");

    
let logo1="./img/drop-silhouette.png";
   let logo2="./img/wind.png";
   let logo3="./img/temperature (1).png";
  let logo4="./img/temperature.png";
  let logo5="./img/rising-sun.png";
  let logo6="./img/sunset.png";

const key="6d0dda5f2a2e8b0e723ab2ad060b1860";
btnsrch.addEventListener("click",function(){
    let input=document.getElementById("city").value;
    getData(input);
   // console.log(input)
})

async function getData(city){
let url=  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

console.log(url)
   try{
      let res=await fetch(url)   
 let data=await res.json();
getLocationBysrch(data)
 console.log(data)
   }
   catch(err){
console.log(err);
   }
}

// let urlDays=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

    //  By Search

async function   getLocationBysrch(data){
  let lat=data.coord.lat;
  let long=data.coord.lon;

let rl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`

let urlDays=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}`;
try{
    let resCord =await fetch(rl);
    let dataCord=await resCord.json();

    let resday=await fetch(urlDays);
    let dataDays=await resday.json();

    // console.log(dataCord.name);
     console.log(dataDays);

    
   let frm=  document.querySelector("#gmap_canvas");
   frm.src=`https://maps.google.com/maps?q=${dataCord.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
   
  
   appendBysrch(dataDays.daily,dataCord.coord.lat,dataCord.coord.lon)

}
catch(err){
    console.log(err);
}


}



function appendBysrch(data,lat,long){

document.querySelector(".days").innerHTML=null;
document.querySelector("#temp").innerHTML=null;
document.querySelector("#detl").innerHTML=null;
document.querySelector(".popltn").innerHTML=null;
document.querySelector(".default").classList.add("defaultV")
    document.querySelector(".frame").classList.add("frameV")

console.log(data);
console.log(lat);
console.log(long);
let icon=(data[0].weather[0].icon)
let sup=document.createElement("sup");
sup.innerText="C"
let h3Temp=document.createElement("h3");
let temp=(data[0].temp.day-(273.15)).toFixed(2)
//console.log(temp)
h3Temp.innerText=`${temp}°`;
h3Temp.append(sup);

let div_temp=document.createElement("div");

let div_img=document.createElement("img");
div_img.src=`https://openweathermap.org/img/w/${icon}.png`;

div_temp.append(div_img);

let h2day=document.createElement("h2");
const dy=new Date(data[0].dt*1000);

const [day, date,month] = [dy.getDay(), dy.getDate(),dy.getMonth()];

let dt=date.toString();
let dayr;
let dtr;
let mnth;
if(dt.length<2){
    dtr=`0${dt}`
}
else{
    dtr=`${dt}`
}
if(day===0){
    dayr="Sunday";
}
else if(day===1){
    dayr="Monday";
}
else if(day===2){
    dayr="Tuesday";
}
else if(day===3){
    dayr="Wednesday";
}
else if(day===4){
    dayr="Thursday";
}
else if(day===5){
    dayr="Friday";
}
else if(day===6){
    dayr="Saturday";
}


if(month===0){
    mnth="Jan";
}
else if(month===1){
    mnth="Feb";
}
else if(month===2){
    mnth="Mar";
}
else if(month===3){
    mnth="Apr";
}
else if(month===4){
    mnth="May";
}
else if(month===5){
    mnth="Jun";
}
else if(month===6){
    mnth="Jul";
}
else if(month===7){
    mnth="Aug";
}
else if(month===8){
    mnth="Sept";
}
else if(month===9){
    mnth="Oct";
}
else if(month===10){
    mnth="Nov";
}
else if(month===11){
    mnth="Dec";
}
h2day.innerText=`${dayr} ${dtr} ${mnth}`;

let hr1=document.createElement("hr");
let div_lat=document.createElement("div");
let lat_p=document.createElement("p");
lat_p.innerText=`Latitude`;
let lat_pv=document.createElement("p");
 lat_pv.innerText=`${lat}`;

 div_lat.append(lat_p,lat_pv);

 let div_lon=document.createElement("div");
 let lon_p=document.createElement("p");
 lon_p.innerText=`Longitude`;
 let lon_pv=document.createElement("p");
 lon_pv.innerText=`${long}`;
 let hr2=document.createElement("hr");

 div_lon.append(lon_p,lon_pv);
 let water_mark=document.createElement("p");
 water_mark.setAttribute("id","mark");
 water_mark.innerText=`Developed by 💕 Rohit`;

 document.querySelector(".popltn").classList.add("visible")

 document.querySelector(".popltn").append(h2day,hr1,div_lat,div_lon,hr2,water_mark)



let h5Sky=document.createElement("h5");
let sky=((data[0].weather[0].main).toUpperCase());
h5Sky.innerText=`${sky}`;

let div_d1=document.createElement("div");
div_d1.setAttribute("class","disdetl");

let d1_img=document.createElement("div");
d1_img.setAttribute("class","img");

let d1_img1=document.createElement("img");
d1_img1.src=`${logo1}`;
 let pH=document.createElement("p");
 pH.innerText=`Humidity`;

 d1_img.append(d1_img1,pH);

 let pHV=document.createElement("p");
 pHV.innerText=`${data[0].humidity}%`;

 div_d1.append(d1_img,pHV);



 let div_d2=document.createElement("div");
div_d2.setAttribute("class","disdetl");

let d2_img=document.createElement("div");
d2_img.setAttribute("class","img");

let d2_img2=document.createElement("img");
d2_img2.src=`${logo2}`;
 let pW=document.createElement("p");
 pW.innerText=`Wind Speed`;

 d2_img.append(d2_img2,pW);

 let pWV=document.createElement("p");
 pWV.innerText=`${data[0].wind_speed}`;

 div_d2.append(d2_img,pWV);


 let div_d3=document.createElement("div");
div_d3.setAttribute("class","disdetl");

let d3_img=document.createElement("div");
d3_img.setAttribute("class","img");

let d3_img3=document.createElement("img");
d3_img3.src=`${logo3}`;
 let pMn=document.createElement("p");
 pMn.innerText=`Min Temp`;

 d3_img.append(d3_img3,pMn);

 let pMnV=document.createElement("p");
 let tmin=(data[0].temp.min-(273.15)).toFixed(2)

 pMnV.innerText=`${tmin}`

 div_d3.append(d3_img,pMnV);


 let div_d4=document.createElement("div");
div_d4.setAttribute("class","disdetl");

let d4_img=document.createElement("div");
d4_img.setAttribute("class","img");

let d4_img4=document.createElement("img");
d4_img4.src=`${logo4}`;
 let pMm=document.createElement("p");
 pMm.innerText=`Max Temp`;

 d4_img.append(d4_img4,pMm);

 let pMmV=document.createElement("p");
 let tmax=(data[0].temp.max-(273.15)).toFixed(2)

 pMmV.innerText=`${tmax}`

 div_d4.append(d4_img,pMmV);



 let div_d5=document.createElement("div");
div_d5.setAttribute("class","disdetl");

let d5_img=document.createElement("div");
d5_img.setAttribute("class","img");

let d5_img5=document.createElement("img");
d5_img5.src=`${logo5}`;
 let pSs=document.createElement("p");
 pSs.innerText=`Sunrise`;

 d5_img.append(d5_img5,pSs);

 let pSsV=document.createElement("p");
 const time=new Date(data[0].sunrise*1000);
const [hour, minutes] = [time.getHours(), time.getMinutes()];


let h=hour.toString();
let m=minutes.toString();
if(m.length<2){
pSsV.innerText=`${h} : 0${m}`;
}
else{ 
pSsV.innerText=`${h} : ${m}`;

}
div_d5.append(d5_img,pSsV);


let div_d6=document.createElement("div");
div_d6.setAttribute("class","disdetl");

let d6_img=document.createElement("div");
d6_img.setAttribute("class","img");

let d6_img6=document.createElement("img");
d6_img6.src=`${logo6}`;
 let pSr=document.createElement("p");
 pSr.innerText=`Sunset`;

 d6_img.append(d6_img6,pSr);

 let pSrV=document.createElement("p");
 const timeS=new Date(data[0].sunset*1000);
const [hourS, minutesS] = [timeS.getHours(), timeS.getMinutes()];


let hS=hourS.toString();
let mS=minutesS.toString();
if(mS.length<2){
pSrV.innerText=`${hS} : 0${mS}`;
}
else{ 
pSrV.innerText=`${hS} : ${mS}`;

}
div_d6.append(d6_img,pSrV);

document.querySelector(".temp-cont").classList.add("visible");

document.querySelector("#temp").append(h3Temp,div_temp);
document.querySelector("#detl").append(h5Sky,div_d1,div_d2,div_d3,div_d4,div_d5,div_d6);


console.log(data)
let h5_cloud=document.createElement("h5");
h5_cloud.innerText=``
for(let i=1;i<data.length;i++){
const cr_dy=new Date(data[i].dt*1000);
const [dayCr] = [cr_dy.getDay()];
let dayCrr;
if(dayCr===0){
    dayCrr="Sunday";
}
else if(dayCr===1){
    dayCrr="Monday";
}
else if(dayCr===2){
    dayCrr="Tuesday";
}
else if(dayCr===3){
    dayCrr="Wednesday";
}
else if(dayCr===4){
    dayCrr="Thursday";
}
else if(dayCr===5){
    dayCrr="Friday";
}
else if(dayCr===6){
    dayCrr="Saturday";
}
// console.log(dayCrr)
let Card_icon=(data[i].weather[0].icon)

let Card_divO=document.createElement("div");
let C_supT=document.createElement("sup");
C_supT.innerText="C"

let C_supM=document.createElement("sup");
C_supM.innerText="C"

let C_supMx=document.createElement("sup");
C_supMx.innerText="C"

let C_day=document.createElement("h4");
C_day.innerText=`${dayCrr}`


let card_div_class=document.createElement("div");
card_div_class.setAttribute("class","first");
let C_temp=(data[i].temp.day-(273.15)).toFixed(2)


   let card_h5=document.createElement("h5");
   card_h5.innerText=`${C_temp}°`;
   card_h5.append(C_supT)

   let divC_img_cont=document.createElement("div");
     let divC_img=document.createElement("img");
divC_img.src=`https://openweathermap.org/img/w/${Card_icon}.png`;

divC_img_cont.append(divC_img);

card_div_class.append(card_h5,divC_img_cont);

let card_temp_div=document.createElement("div");
card_temp_div.setAttribute("class","dy-temp")

let cMint=document.createElement("p");
cMint.innerText=`Min Temp`
let cMintV=document.createElement("p");
let C_tmin=(data[i].temp.min-(273.15)).toFixed(2)
cMintV.innerText=`${C_tmin}°`
cMintV.append(C_supM);

card_temp_div.append(cMint,cMintV);

console.log(data[i].dt)
let card_temp_div2=document.createElement("div");
card_temp_div2.setAttribute("class","dy-temp")

let cMaxt=document.createElement("p");
cMaxt.innerText=`Max Temp`;

let cMaxtV=document.createElement("p");
let C_tmax=(data[i].temp.max-(273.15)).toFixed(2);
cMaxtV.innerText=`${C_tmax}°`;
cMaxtV.append(C_supMx);


card_temp_div2.append(cMaxt,cMaxtV);
Card_divO.append(C_day,card_div_class, card_temp_div, card_temp_div2);


document.querySelector(".days").classList.add("visible")


document.querySelector(".days").append(Card_divO);

}


}



//    Geo location

async function  liveLocationD(lat,long){
let rl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`

let urlDays=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}`;
try{
    let resr=await fetch(rl);
    let datas=await resr.json();
    let res=await fetch(urlDays);
    let data=await res.json();
   // console.log(datas)
   //console.log(data)
    document.querySelector(".default").classList.add("defaultV")
    document.querySelector(".frame").classList.add("frameV")
   let frm=  document.querySelector("#gmap_canvas");
   frm.src=`https://maps.google.com/maps?q=${datas.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
   document.querySelector("#city").value=`${datas.name}`;
   appendAuto(data.daily,datas.coord.lat,datas.coord.lon);
}
catch(err){
    console.log(err)
}

}

function  appendAuto(data,lat,long){
let icon=(data[0].weather[0].icon)
let sup=document.createElement("sup");
sup.innerText="C"
let h3Temp=document.createElement("h3");
let temp=(data[0].temp.day-(273.15)).toFixed(2)
//console.log(temp)
h3Temp.innerText=`${temp}°`;
h3Temp.append(sup);

let div_temp=document.createElement("div");

let div_img=document.createElement("img");
div_img.src=`https://openweathermap.org/img/w/${icon}.png`;

div_temp.append(div_img);

let h2day=document.createElement("h2");
const dy=new Date(data[0].dt*1000);

const [day, date,month] = [dy.getDay(), dy.getDate(),dy.getMonth()];

let dt=date.toString();
let dayr;
let dtr;
let mnth;
if(dt.length<2){
    dtr=`0${dt}`
}
else{
    dtr=`${dt}`
}
if(day===0){
    dayr="Sunday";
}
else if(day===1){
    dayr="Monday";
}
else if(day===2){
    dayr="Tuesday";
}
else if(day===3){
    dayr="Wednesday";
}
else if(day===4){
    dayr="Thursday";
}
else if(day===5){
    dayr="Friday";
}
else if(day===6){
    dayr="Saturday";
}


if(month===0){
    mnth="Jan";
}
else if(month===1){
    mnth="Feb";
}
else if(month===2){
    mnth="Mar";
}
else if(month===3){
    mnth="Apr";
}
else if(month===4){
    mnth="May";
}
else if(month===5){
    mnth="Jun";
}
else if(month===6){
    mnth="Jul";
}
else if(month===7){
    mnth="Aug";
}
else if(month===8){
    mnth="Sept";
}
else if(month===9){
    mnth="Oct";
}
else if(month===10){
    mnth="Nov";
}
else if(month===11){
    mnth="Dec";
}
h2day.innerText=`${dayr} ${dtr} ${mnth}`;
// console.log(h2day.innerText);
// console.log(dy)
// console.log(day);
// console.log(date);
// console.log(month);



let hr1=document.createElement("hr");
let div_lat=document.createElement("div");
let lat_p=document.createElement("p");
lat_p.innerText=`Latitude`;
let lat_pv=document.createElement("p");
 lat_pv.innerText=`${lat}`;

 div_lat.append(lat_p,lat_pv);

 let div_lon=document.createElement("div");
 let lon_p=document.createElement("p");
 lon_p.innerText=`Longitude`;
 let lon_pv=document.createElement("p");
 lon_pv.innerText=`${long}`;
 let hr2=document.createElement("hr");

 div_lon.append(lon_p,lon_pv);
 let water_mark=document.createElement("p");
 water_mark.setAttribute("id","mark");
 water_mark.innerText=`Developed by 💕 Rohit`;

 document.querySelector(".popltn").classList.add("visible")

 document.querySelector(".popltn").append(h2day,hr1,div_lat,div_lon,hr2,water_mark)



let h5Sky=document.createElement("h5");
let sky=((data[0].weather[0].main).toUpperCase());
h5Sky.innerText=`${sky}`;

let div_d1=document.createElement("div");
div_d1.setAttribute("class","disdetl");

let d1_img=document.createElement("div");
d1_img.setAttribute("class","img");

let d1_img1=document.createElement("img");
d1_img1.src=`${logo1}`;
 let pH=document.createElement("p");
 pH.innerText=`Humidity`;

 d1_img.append(d1_img1,pH);

 let pHV=document.createElement("p");
 pHV.innerText=`${data[0].humidity}%`;

 div_d1.append(d1_img,pHV);



 let div_d2=document.createElement("div");
div_d2.setAttribute("class","disdetl");

let d2_img=document.createElement("div");
d2_img.setAttribute("class","img");

let d2_img2=document.createElement("img");
d2_img2.src=`${logo2}`;
 let pW=document.createElement("p");
 pW.innerText=`Wind Speed`;

 d2_img.append(d2_img2,pW);

 let pWV=document.createElement("p");
 pWV.innerText=`${data[0].wind_speed}`;

 div_d2.append(d2_img,pWV);


 let div_d3=document.createElement("div");
div_d3.setAttribute("class","disdetl");

let d3_img=document.createElement("div");
d3_img.setAttribute("class","img");

let d3_img3=document.createElement("img");
d3_img3.src=`${logo3}`;
 let pMn=document.createElement("p");
 pMn.innerText=`Min Temp`;

 d3_img.append(d3_img3,pMn);

 let pMnV=document.createElement("p");
 let tmin=(data[0].temp.min-(273.15)).toFixed(2)

 pMnV.innerText=`${tmin}`

 div_d3.append(d3_img,pMnV);


 let div_d4=document.createElement("div");
div_d4.setAttribute("class","disdetl");

let d4_img=document.createElement("div");
d4_img.setAttribute("class","img");

let d4_img4=document.createElement("img");
d4_img4.src=`${logo4}`;
 let pMm=document.createElement("p");
 pMm.innerText=`Max Temp`;

 d4_img.append(d4_img4,pMm);

 let pMmV=document.createElement("p");
 let tmax=(data[0].temp.max-(273.15)).toFixed(2)

 pMmV.innerText=`${tmax}`

 div_d4.append(d4_img,pMmV);



 let div_d5=document.createElement("div");
div_d5.setAttribute("class","disdetl");

let d5_img=document.createElement("div");
d5_img.setAttribute("class","img");

let d5_img5=document.createElement("img");
d5_img5.src=`${logo5}`;
 let pSs=document.createElement("p");
 pSs.innerText=`Sunrise`;

 d5_img.append(d5_img5,pSs);

 let pSsV=document.createElement("p");
 const time=new Date(data[0].sunrise*1000);
const [hour, minutes] = [time.getHours(), time.getMinutes()];


let h=hour.toString();
let m=minutes.toString();
if(m.length<2){
pSsV.innerText=`${h} : 0${m}`;
}
else{ 
pSsV.innerText=`${h} : ${m}`;

}
div_d5.append(d5_img,pSsV);


let div_d6=document.createElement("div");
div_d6.setAttribute("class","disdetl");

let d6_img=document.createElement("div");
d6_img.setAttribute("class","img");

let d6_img6=document.createElement("img");
d6_img6.src=`${logo6}`;
 let pSr=document.createElement("p");
 pSr.innerText=`Sunset`;

 d6_img.append(d6_img6,pSr);

 let pSrV=document.createElement("p");
 const timeS=new Date(data[0].sunset*1000);
const [hourS, minutesS] = [timeS.getHours(), timeS.getMinutes()];


let hS=hourS.toString();
let mS=minutesS.toString();
if(mS.length<2){
pSrV.innerText=`${hS} : 0${mS}`;
}
else{ 
pSrV.innerText=`${hS} : ${mS}`;

}
div_d6.append(d6_img,pSrV);

document.querySelector(".temp-cont").classList.add("visible");

document.querySelector("#temp").append(h3Temp,div_temp);
document.querySelector("#detl").append(h5Sky,div_d1,div_d2,div_d3,div_d4,div_d5,div_d6);


console.log(data)
let h5_cloud=document.createElement("h5");
h5_cloud.innerText=``
for(let i=1;i<data.length;i++){
const cr_dy=new Date(data[i].dt*1000);
const [dayCr] = [cr_dy.getDay()];
let dayCrr;
if(dayCr===0){
    dayCrr="Sunday";
}
else if(dayCr===1){
    dayCrr="Monday";
}
else if(dayCr===2){
    dayCrr="Tuesday";
}
else if(dayCr===3){
    dayCrr="Wednesday";
}
else if(dayCr===4){
    dayCrr="Thursday";
}
else if(dayCr===5){
    dayCrr="Friday";
}
else if(dayCr===6){
    dayCrr="Saturday";
}
// console.log(dayCrr)
let Card_icon=(data[i].weather[0].icon)

let Card_divO=document.createElement("div");
let C_supT=document.createElement("sup");
C_supT.innerText="C"

let C_supM=document.createElement("sup");
C_supM.innerText="C"

let C_supMx=document.createElement("sup");
C_supMx.innerText="C"

let C_day=document.createElement("h4");
C_day.innerText=`${dayCrr}`


let card_div_class=document.createElement("div");
card_div_class.setAttribute("class","first");
let C_temp=(data[i].temp.day-(273.15)).toFixed(2)


   let card_h5=document.createElement("h5");
   card_h5.innerText=`${C_temp}°`;
   card_h5.append(C_supT)

   let divC_img_cont=document.createElement("div");
     let divC_img=document.createElement("img");
divC_img.src=`https://openweathermap.org/img/w/${Card_icon}.png`;

divC_img_cont.append(divC_img);

card_div_class.append(card_h5,divC_img_cont);

let card_temp_div=document.createElement("div");
card_temp_div.setAttribute("class","dy-temp")

let cMint=document.createElement("p");
cMint.innerText=`Min Temp`
let cMintV=document.createElement("p");
let C_tmin=(data[i].temp.min-(273.15)).toFixed(2)
cMintV.innerText=`${C_tmin}°`
cMintV.append(C_supM);

card_temp_div.append(cMint,cMintV);

console.log(data[i].dt)
let card_temp_div2=document.createElement("div");
card_temp_div2.setAttribute("class","dy-temp")

let cMaxt=document.createElement("p");
cMaxt.innerText=`Max Temp`;

let cMaxtV=document.createElement("p");
let C_tmax=(data[i].temp.max-(273.15)).toFixed(2);
cMaxtV.innerText=`${C_tmax}°`;
cMaxtV.append(C_supMx);


card_temp_div2.append(cMaxt,cMaxtV);
Card_divO.append(C_day,card_div_class, card_temp_div, card_temp_div2);


document.querySelector(".days").classList.add("visible")
document.querySelector(".days").append(Card_divO);

}


}

// const time=new Date(1653888600*1000);
// console.log(time)  <h3>32.23*C</h3>
      //  <div><img src="" alt=""></div>



function getLocationWeather() {
navigator.geolocation.getCurrentPosition(success);
function success(position) {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
liveLocationD(latitude,longitude)

// console.log(latitude);
// console.log(longitude);
}
}

getLocationWeather()

var formate = moment().format("ddd , MMM")
console.log(formate);

function submit() {
   
    let cityname = document.getElementById('cityName').value
    if(!cityname){
        swal("Enter a City or Country", "error!", "warning");
    }else{    
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
    )

        .then((res) => res.json())
        .then((res) => {
            if (res.cod === "404") {
                swal("City Not Found!", "error!", "error");
            } else {

                var bodi = document.querySelector('.middle-cont')
                bodi.innerHTML = `
         <div class="weather"> 
    
        <div id="mid-cont-child1">
    
        <div id="city-first-child" >
        <h2 id="city">${res.name}</h2>
        <h6 id="pk">${res.sys.country}</h6>
        </div>
    
        <div id="city-sec-child">
        <p id="date">${formate}</p>
        </div>
    
        </div>
    
        <div id="mid-cont-child2">
    
        <div id="icon-div">
         <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" id="img"  >
         </div>
        
          <div id="feels-temp">
       <h1 id="temp">${Math.floor(res.main.temp)} </h1>
       <h6 id ="cloud1" >${res.weather[0].description} </h6>
        </div>
    
        </div>
    
        <div id="mid-cont-child3">
    
    <div id="temp-parent">
    
        <div id="temp1">
    <div class="child1" id="feels_temp">Feels Like</div>
    <div class="child1" id="feel_temp">${Math.floor(res.main.feels_like)}</div>
        </div>
    
        <div id="temp2">
    <div class="child2">Humidity</div>
    <div class="child2" id="humidity">${res.main.humidity}</div>
        </div>
    
        <div id="temp3">
    <div class="child3">Winds</div>
    <div class="child3" id="wind">${res.wind.speed}</div>
        </div>
    
    </div>
    
        </div>
    
    </div>
    
    
    `
            }
          
        })


    
    }
}
let getAllweather=()=>{
    let cityname = document.getElementById('cityName').value
    console.log(cityname);
    
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=pakistan&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
    )

        .then((res) => res.json())
        .then((res) => {
            console.log(res)

            var bodi = document.querySelector('.middle-cont')
            bodi.innerHTML = `
     <div class="weather"> 

    <div id="mid-cont-child1">

    <div id="city-first-child" >
    <h2 id="city">${res.name}</h2>
    <h6 id="pk">${res.sys.country}</h6>
    </div>

    <div id="city-sec-child">
    <p id="date">${formate}</p>
    </div>

    </div>

    <div id="mid-cont-child2">

    <div id="icon-div">
     <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" id="img"  >
     </div>
    
      <div id="feels-temp">
   <h1 id="temp">${Math.floor(res.main.temp)} </h1>
   <h6 id ="cloud1" >${res.weather[0].description} </h6>
    </div>

    </div>

    <div id="mid-cont-child3">

<div id="temp-parent">

    <div id="temp1">
<div class="child1" id="feels_temp">Feels Like</div>
<div class="child1" id="feel_temp">${Math.floor(res.main.feels_like)}</div>
    </div>

    <div id="temp2">
<div class="child2">Humidity</div>
<div class="child2" id="humidity">${res.main.humidity}</div>
    </div>

    <div id="temp3">
<div class="child3">Winds</div>
<div class="child3" id="wind">${res.wind.speed}</div>
    </div>

</div>

    </div>

</div>


`

           
        })


}

window.onload=()=>{
    getAllweather();
}

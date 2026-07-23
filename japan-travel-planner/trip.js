const params = new URLSearchParams(window.location.search);

const city = params.get("city");

const info = destinations[city];

// Falls keine Stadt übergeben wurde
if (!info) {

    window.location.href = "index.html";

}

// ---------------- Kosten ----------------

const total =
info.hotel +
info.foodCost +
info.transport +
info.activity;

// ---------------- Hero ----------------



document.getElementById("heroCity").textContent = city;

document.getElementById("heroImage").src =
`images/${city.toLowerCase()}.png`;

document.getElementById("heroInfo").innerHTML = `

<div class="hero-tag">
🌸 ${info.season}
</div>

<div class="hero-tag">
🍣 ${info.food}
</div>

<div class="hero-tag">
💴 ¥${total.toLocaleString()}
</div>

`;

// ---------------- Overview ----------------

document.getElementById("overview").innerHTML = `

<div class="info-card">
<h3>📍 City</h3>
<p>${city}</p>
</div>

<div class="info-card">
<h3>🍣 Food</h3>
<p>${info.food}</p>
</div>

<div class="info-card">
<h3>🌸 Best Season</h3>
<p>${info.season}</p>
</div>

<div class="info-card">
<h3>💴 Estimated Cost</h3>
<p>¥${total.toLocaleString()}</p>
</div>

`;
// ---------------- Costs ----------------

document.getElementById("costCards").innerHTML = `

<div class="info-card">

<h3>🏨 Hotel</h3>

<p>¥${info.hotel.toLocaleString()}</p>

</div>

<div class="info-card">

<h3>🍜 Food</h3>

<p>¥${info.foodCost.toLocaleString()}</p>

</div>

<div class="info-card">

<h3>🚅 Transport</h3>

<p>¥${info.transport.toLocaleString()}</p>

</div>

<div class="info-card">

<h3>🎫 Activities</h3>

<p>¥${info.activity.toLocaleString()}</p>

</div>

`;
//Weather
let latitude;
let longitude;

if(city=="Tokyo"){

    latitude = 35.6762;
    longitude = 139.6503;

}

else if(city=="Kyoto"){

    latitude = 35.0116;
    longitude = 135.7681;

}

else if(city=="Osaka"){

    latitude = 34.6937;
    longitude = 135.5023;

}

else{

    latitude = 35.1815;
    longitude = 136.9066;

}
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`)

.then(response => response.json())

.then(data => {

    let weather = "";

    if(data.current.weather_code == 0){

        weather = "☀️ Sunny";

    }

    else if(data.current.weather_code <= 3){

        weather = "🌤 Partly Cloudy";

    }

    else if(data.current.weather_code <= 48){

        weather = "☁️ Cloudy";

    }

    else{

        weather = "🌧 Rain";

    }

    document.getElementById("weatherCard").innerHTML = `

    <div class="info-card">

        <h3>${weather}</h3>

        <p>

        🌡 ${data.current.temperature_2m}°C

        <br><br>

        💧 Humidity: ${data.current.relative_humidity_2m}%

        </p>

    </div>

    `;

});

// ---------------- Attractions ----------------

const attractionContainer =
document.getElementById("attractions");

attractionContainer.innerHTML = "";

info.attractions.forEach(place=>{

attractionContainer.innerHTML += `

<div class="place">

<img src="${place.image}">

<h3>${place.name}</h3>

<p>${place.description}</p>

</div>

`;

});

// ---------------- Timeline ----------------

const timeline =
document.getElementById("timeline");

timeline.innerHTML = "";

info.itinerary.forEach((day,index)=>{

timeline.innerHTML += `

<div class="timeline-day">

<h3>Day ${index+1}</h3>

<p>${day}</p>

</div>

`;

});
window.addEventListener("load",function(){

    setTimeout(function(){

        document.getElementById("loadingScreen").style.opacity="0";

        setTimeout(function(){

            document.getElementById("loadingScreen").style.display="none";

        },1000);

    },2500);

});
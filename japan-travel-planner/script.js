const button = document.getElementById("planButton");
const favoriteButton = document.getElementById("favoriteButton");
const startButton = document.getElementById("startButton");

let favorites = [];



button.addEventListener("click", createTrip);

function createTrip(){

    const city = document.getElementById("city").value;
   

  window.location.href = "trip.html?city=" + city;

}
favoriteButton.addEventListener("click", addFavorite);
startButton.addEventListener("click", goPlanner);

function addFavorite(){

    const city = document.getElementById("city").value;

    if(!favorites.includes(city)){

        favorites.push(city);

    }




    document.getElementById("favoriteList").innerHTML =

    favorites.join("<br>");

}

function goPlanner(){

    document.getElementById("planner").scrollIntoView({

        behavior:"smooth"

    });

}   
function exploreCity(city){

    document.getElementById("city").value = city;

    createTrip();

    document.getElementById("planner").scrollIntoView({

        behavior:"smooth"

    });

}

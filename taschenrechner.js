// ==============================
// Welcome Screen
// ==============================

setTimeout(function () {

    document.getElementById("welcome").classList.add("hide");

}, 3000);


// ==============================
// Dark / Light Mode
// ==============================

const themeButton = document.getElementById("theme-toggle");

// Beim ersten Besuch automatisch Dark Mode aktivieren
if (!localStorage.getItem("theme")) {

    localStorage.setItem("theme", "dark");

}

// Gespeichertes Theme laden
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeButton.textContent = "☀️";

} else {

    document.body.classList.remove("dark");
    themeButton.textContent = "🌙";

}

// Beim Klick umschalten
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";

    }

});
// DOM.. Document Object Model..
// document.getElementById("para").innerHTML = "Java Script";

setInterval(() => {
    document.getElementById("time").textContent = new Date().toLocaleTimeString();
}, 1000);

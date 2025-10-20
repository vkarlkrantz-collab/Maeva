document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".plantaBild");
    const button = document.getElementById("bytplanta");

    const name = document.getElementById("plantaNamn");
    const type = document.getElementById("plantaTyp");
    const care = document.getElementById("plantaSkötsel");

    const plantaData = [
        { name: "Hortensia", type:"Inomhus & utomhus växt ", care:"Medelsvår" }, 
        { name: "Monstera deliciosa", type:"Inomhus växt", care:"Medelsvår" }, 
        { name: "Rosor", type:"Utomhus växt", care:"Svårskött" }, 
        { name: "Tomater", type:"Utomhus växt", care:"Medelsvår" }, 
        { name: "Elefantöra", type:"Inomhus växt", care:"Medelsvår" }, 
        { name: "Basilika", type:"Inomhus & utomhus växt ", care:"Lättskött" }, 
        { name: "Ljung", type:"Utomhus växt", care:"Medelsvår" }, 
        { name: "Pioner", type:"Utomhus växt", care:"Medelsvår" }
];

let currentIndex = 0;
  
 
images[currentIndex].classList.add("active");
updateText(currentIndex);

button.addEventListener("click", () => {
images[currentIndex].classList.remove("active");
currentIndex = (currentIndex + 1) % images.length;
images[currentIndex].classList.add("active");
updateText(currentIndex);
});

function updateText (index) {
    name.textContent = plantaData [index].name;
    type.textContent = plantaData [index].type;
    care.textContent = plantaData [index].care;
}
  
});
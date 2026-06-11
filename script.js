function showInfo(type){

let info = "";

if(type === "trees"){
info = "🌳 Trees absorb carbon dioxide, provide oxygen, prevent soil erosion and help fight climate change.";
}

if(type === "water"){
info = "💧 Conserving water protects freshwater supplies and ensures clean water for future generations.";
}

if(type === "wildlife"){
info = "🦋 Wildlife protection helps maintain ecological balance and preserves biodiversity.";
}

if(type === "recycle"){
info = "♻️ Recycling reduces landfill waste and conserves natural resources.";
}

document.getElementById("info-box").innerHTML = info;
}

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;

document.getElementById("message").innerHTML =
"🌱 Welcome " + name + "! Thank you for joining our Nature Protection Mission.";

});
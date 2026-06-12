function toggleMenu(){
document.getElementById("navMenu").classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

document.getElementById("message").innerHTML=
"Thank you "+name+"! Your message has been submitted.";

});

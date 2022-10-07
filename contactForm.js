var submitButton = document.getElementById("submitButton");
var modal = document.querySelector(".modal");
var close = document.querySelector(".close");

submitButton.addEventListener("click", function(){
    modal.style.display = "block";
})

close.addEventListener("click", function(){
    modal.style.display = "none";
})
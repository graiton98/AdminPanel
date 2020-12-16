window.onload = inici;

function inici(){
    document.querySelector(".dropdown-button").addEventListener("click", function(){
        //console.log("dropdown");
        var dropdownC = document.querySelector(".dropdown-content");
        console.log(dropdownC.style.display);
        if(dropdownC.style.display === "" || dropdownC.style.display === "none"){
            dropdownC.style.display = "flex";
        }else{
            dropdownC.style.display = "none";
        }
    });
    document.querySelector("header .bars").addEventListener("click", function(){
        var body = document.querySelector("body");
        if(body.classList.contains("active")){
            body.classList.remove("active");
            body.classList.add("no-active");
            changeStyleElements("aside ul li span", "none");
        }else{
            body.classList.add("active");
            body.classList.remove("no-active");
            changeStyleElements("aside ul li span", "inline-block");
        }
    });
}

function changeStyleElements(e, s){
    document.querySelectorAll(e).forEach(e =>{
        e.style.display = s;
    });
}
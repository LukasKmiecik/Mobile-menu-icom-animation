const burgerBtn = document.querySelector(".primary-header__burger-btn");
const line = document.querySelectorAll(".burger-btn__line");


burgerBtn.addEventListener("click", ()=>{
    if(line[1].style.transform === "scaleY(0)")
    {
        line[0].style.transform = "translateY(-8px)";
        line[1].style.transform = "scaleY(1)";
        line[2].style.transform = "translateY(8px)";
    }
    else
    {
        line[0].style.transform = "rotate(-45deg)";
        line[1].style.transform = "scaleY(0)";
        line[2].style.transform = "rotate(45deg)";
    }
});


function openMenu() {
    
}

// let settings = document.querySelector(".settings-btn");
// let setColorBox = document.querySelector(".settings__box-colors");
// let setColorBoxCircle = document.querySelectorAll(".settings__box-colors-circle")
// let home = document.querySelector(".header")
// console.log(home);

// settings.addEventListener("click", () => {
//     settings.classList.toggle("active")
//     setColorBox.classList.toggle("active")
//     ;
// })
// for (let i = 0; i < setColorBoxCircle.length; i++) {
//     setColorBoxCircle[i].addEventListener("click", () =>{
//         home.style = "background-color:gray;"
//     })
    
// }

// ========== Light-Dark Mode ============ //
let modeIcon = document.querySelector(".mode-icon");
modeIcon.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme")
    
    if(document.body.classList.contains("dark-theme")) {
        modeIcon.src = "img/moon.png"
    }
    else{
        modeIcon.src = "img/sun.png"
    }
    
});
// ========== Nav-Bar  ===========//
let aside = document.querySelector(".aside")
let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav__list");
burger.addEventListener("click", () => {
    // console.log(burger);
    navList.classList.toggle("active")
    aside.classList.toggle("active")
} )
// ======= type =======//
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "blogger";
    }, 4000);
    textLoad();
}
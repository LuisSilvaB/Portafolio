import { NodeButtomDark, NodeButtomLight } from "../../constants/Constants.js";

const d = document; 
const w = window;  
const titleNav = d.getElementById("Navbar-Title")
const $IdNavList = d.getElementById("Navbar-list"); 

const NavbarChangeBackground = (idNav) => {
    const NavBard = d.getElementById(idNav)
    w.addEventListener("scroll",(e)=>{
        let scroll = w.scrollY; 
        if (scroll>100) {
            NavBard.classList.add("Navbar-Change-shadow")
        }
        else {
            NavBard.classList.remove("Navbar-Change-shadow")
        }
    })
}

const CreateButtomTheme = (idContainerButtomTheme) => {
    const ContainerButtomTheme =  d.getElementById(idContainerButtomTheme)
    ContainerButtomTheme.appendChild(NodeButtomDark); 
}

// Cambair el boton del tema 
const NavbarChangeThemeNavbar = (idNav,idNavOption) => {
    const Nav = d.getElementById(idNav),
     NavOption = d.querySelectorAll("li#Nav-option"); 
    if (Nav.classList[1] === "Navbar-light") {
            NavbarChangeThemeToDark(Nav,NavOption);
    }else if (Nav.classList[1] === "Navbar-dark") {
            NavbarChangeThemeToLight(Nav,NavOption); 
    }
}
// Cambiar el tema de navbar a dark 
const NavbarChangeThemeToDark = (Nav,NavOption) => {
        Nav.classList.replace("Navbar-light", "Navbar-dark");
        NavOption.forEach((el)=>{
            el.classList.replace("Navbar__option-light", "Navbar__option-dark")
        }) 
        titleNav.classList.toggle("dark-title-h1")
        titleNav.classList.toggle("light-title-h1")
        $IdNavList.classList.toggle("Navbar__list-light")
        $IdNavList.classList.toggle("Navbar__list-dark")
}   
// Cambiar el tema de navbar a light
const NavbarChangeThemeToLight = (Nav,NavOption) => {
        Nav.classList.replace("Navbar-dark", "Navbar-light");
        NavOption.forEach((el)=>{
            el.classList.replace("Navbar__option-dark","Navbar__option-light")
        })
        titleNav.classList.toggle("light-title-h1")
        titleNav.classList.toggle("dark-title-h1")
        $IdNavList.classList.toggle("Navbar__list-dark")
        $IdNavList.classList.toggle("Navbar__list-light")
}

export {NavbarChangeBackground, NavbarChangeThemeNavbar, CreateButtomTheme}
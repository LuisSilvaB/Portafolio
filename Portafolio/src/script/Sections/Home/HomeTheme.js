const d = document; 
const $IdHome = d.getElementById("Home"); 
const $IdHomeh2 = d.getElementById("Home-h2")
const $IdHomefirstP = d.getElementById("Home-first-p"); 
const $IdHomesecondP = d.getElementById("Home-second-p"); 

const ChangeThemeHome = () => {
    $IdHome.classList.contains("Home-light") ? ThemeDark() : ThemeLight();  
}   
const ThemeDark  = () => {
    $IdHome.classList.toggle("Home-light")
    $IdHome.classList.toggle("Home-dark")
    $IdHomeh2.classList.toggle("Home__h2-light")
    $IdHomeh2.classList.toggle("Home__h2-dark")
    $IdHomefirstP.classList.toggle("Home__first_p-light")
    $IdHomefirstP.classList.toggle("Home__first_p-dark")
    $IdHomesecondP.classList.toggle("Home__second_p-light")
    $IdHomesecondP.classList.toggle("Home__second_p-dark")
}
const ThemeLight = () => {
    $IdHome.classList.toggle("Home-dark")
    $IdHome.classList.toggle("Home-light")
    $IdHomeh2.classList.toggle("Home__h2-dark")
    $IdHomeh2.classList.toggle("Home__h2-light")
    $IdHomefirstP.classList.toggle("Home__first_p-light")
    $IdHomefirstP.classList.toggle("Home__first_p-dark")
    $IdHomesecondP.classList.toggle("Home__second_p-light")
    $IdHomesecondP.classList.toggle("Home__second_p-dark")
}

export {ChangeThemeHome} ; 
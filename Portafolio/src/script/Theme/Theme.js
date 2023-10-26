import { NavbarChangeThemeNavbar } from '../Navbar/Navbar.js'; 
import { NodeButtomLight , NodeButtomDark  } from "../../constants/Constants.js";

const d = document; 
const w = window; 
export const ChangeTheme = (idButtomTheme,idNav, idNavOption) => {
  const buttomTheme = d.getElementById(idButtomTheme); 
  d.addEventListener('click', (e)=>{
  if (e.target === buttomTheme || buttomTheme.childNodes[1].lastChild) {
    if (buttomTheme.classList[1] === "light") {
      buttomTheme.replaceChild(NodeButtomLight, NodeButtomDark)
      buttomTheme.classList.replace("light", "dark")
      NavbarChangeThemeNavbar(idNav, idNavOption); 
    }
    else if (buttomTheme.classList[1] === "dark") {
      buttomTheme.replaceChild(NodeButtomDark, NodeButtomLight)
      buttomTheme.classList.replace("dark", "light")
      NavbarChangeThemeNavbar(idNav, idNavOption); 
    }
  }
 })
}

const darkTheme = () => {}
const lightTheme = () => {}
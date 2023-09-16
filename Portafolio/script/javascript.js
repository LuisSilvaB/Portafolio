import Hamburguer from "./Hamburguer/index.js";
import { NavbarChangeBackground } from "./Navbar/Navbar.js";
import Responsive from "./Responsive/index.js";
import { replace_paragraph } from "./Sections/About/About.js";
const d = document; 

d.addEventListener("DOMContentLoaded", (e)=>{
  //Navbar
  Hamburguer("Navbar-button","Navbar-list"); 
  Responsive("Navbar-button","Navbar-list"); 

  //About
  replace_paragraph(); 
  //Navbar
  NavbarChangeBackground("Nav")

})
import { CreateButtomTheme, NavbarChangeBackground } from "./Navbar/Navbar.js";
import { replace_paragraph } from "./Sections/About/About.js";
import { ChangeTheme } from "./Theme/Theme.js";
import Hamburguer from "./Hamburguer/index.js";
import responsiveHamburguer from "./Responsive/ResponsiveHamburguer.js";

const d = document; 
d.addEventListener("DOMContentLoaded", (e)=>{
  //Navbar
  Hamburguer("Navbar-button",".list","Navbar-list"); 
  responsiveHamburguer("Navbar-button","Navbar-list"); 
  //About
  replace_paragraph(); 
  
  //? Navbar
  CreateButtomTheme("button__theme"); 
  NavbarChangeBackground("Nav")
  //Change theme 
  ChangeTheme('button__theme', "Nav", "Nav-option");  


})
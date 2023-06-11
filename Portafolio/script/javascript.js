import Hamburguer from "./Hamburguer/index.js";
import Responsive from "./Responsive/index.js";
const d = document; 

d.addEventListener("DOMContentLoaded", (e)=>{
  Hamburguer("Navbar-button","Navbar-list"); 
  Responsive("Navbar-button","Navbar-list"); 
})
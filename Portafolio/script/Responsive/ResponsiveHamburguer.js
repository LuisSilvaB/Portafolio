const d = document; 
const w = window; 


// ! Resize responsive properties
export default function responsiveHamburguer(HamburguerID,NavarListID){
  const $Hamburguer = d.getElementById(HamburguerID)
  const $Navbar_list = d.getElementById(NavarListID)
  w.addEventListener("resize",(e)=>{   
    if (e.target.innerWidth < 600) {
      $Hamburguer.classList.replace("Navbar__hamburguer_open","Navbar__hamburguer_close")
    }
    else{
      $Navbar_list.classList.replace("Navbar__list-close","Navbar__list"); 
      $Navbar_list.classList.replace("Navbar__list-open","Navbar__list"); 
    }
  })
}
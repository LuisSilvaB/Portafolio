const d = document;
const w = window; 
export default function Hamburguer(idButton,idList) {
  const $button = d.getElementById(idButton);
  const $list = d.getElementById(idList);
  d.addEventListener('click', (e) => {
    if (e.target == $button && $button.classList[0] == "Navbar__hamburguer_close") {
      // * Animation button hamburguer 
      $button.classList.replace("Navbar__hamburguer_close","Navbar__hamburguer_open"); 
      if($list.classList[0] == "Navbar__list" ) $list.classList.replace("Navbar__list","Navbar__list-open"); 
      else $list.classList.replace("Navbar__list-close","Navbar__list-open");
    }
    else{
      $button.classList.replace("Navbar__hamburguer_open","Navbar__hamburguer_close");
      $list.classList.replace("Navbar__list-open","Navbar__list-close"); 
    }
  });
  
}
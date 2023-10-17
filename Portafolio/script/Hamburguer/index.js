const d = document;
const w = window; 
export default function Hamburguer(idNavButton,classNavline,idList) {
  const $navButtom = d.getElementById(idNavButton); 
  const $list = d.getElementById(idList); 
  console.log($navButtom.classList[0]);
  d.addEventListener('click', (e) => {
    if ((e.target == $navButtom || e.target.matches('.line')) && $navButtom.classList[0] === 'Navbar__hamburguer-close') {
      // * Animation navButtom hamburguer 
      $navButtom.classList.replace("Navbar__hamburguer-close","Navbar__hamburguer-open"); 
      if($list.classList[0] == "Navbar__list" ) $list.classList.replace("Navbar__list","Navbar__list-open"); 
      else $list.classList.replace("Navbar__list-close","Navbar__list-open");
      console.log($navButtom.classList[0]);
    }
    else if((e.target == $navButtom || e.target.matches('.line')) && $navButtom.classList[0] === 'Navbar__hamburguer-open'){
      $navButtom.classList.replace("Navbar__hamburguer-open","Navbar__hamburguer-close");
      $list.classList.replace("Navbar__list-open","Navbar__list-close"); 
    }
  });
  
}
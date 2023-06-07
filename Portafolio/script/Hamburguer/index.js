const d = document;

export default function Hamburguer(idButton) {
  const $button = d.getElementById(idButton);
  d.addEventListener('click', (e) => {
    if (e.target == $button && $button.classList[0] == "Navbar__hamburguer_close") {
      $button.classList.replace("Navbar__hamburguer_close","Navbar__hamburguer_open"); 
    }
    else{
      $button.classList.replace("Navbar__hamburguer_open","Navbar__hamburguer_close");
    }
  });
}
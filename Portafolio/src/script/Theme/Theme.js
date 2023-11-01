import { NodeButtomLight, NodeButtomDark } from '../../constants/Constants.js';45
import { NavbarChangeThemeNavbar } from '../Navbar/Navbar.js';
import { ChangeThemeHome } from '../Sections/Home/HomeTheme.js';

export const ChangeTheme = (idButtomTheme, idNav, idNavOption) => {
  const buttomTheme = document.getElementById(idButtomTheme);

  const toggleTheme = () => {
    buttomTheme.classList.toggle('light');
    buttomTheme.classList.toggle('dark');
    buttomTheme.replaceChild(
      buttomTheme.classList.contains('light') ? NodeButtomLight : NodeButtomDark,
      buttomTheme.classList.contains('light') ? NodeButtomDark : NodeButtomLight
    );
    NavbarChangeThemeNavbar(idNav, idNavOption);
  };

  buttomTheme.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.light, .dark, .svgDark, .svgLight, .pathDark, .pathLight')) {
      toggleTheme();
      ChangeThemeHome();
    }
  });
};

const darkTheme = () => {
  
};

const lightTheme = () => {
  // Puedes implementar esta función si es necesario.
};
const d = document; 

export const goToSection = () => {
    const navlinks = d.querySelectorAll('a.Navbar__option')
    const $navButtom = d.getElementById("Navbar-button"); 
    const $list = d.getElementById("Navbar-list");
    d.addEventListener('click', (e)=>{
        if (e.target.matches('#HomeLink')) {
            d.location.href = '#Home'
            if (!$navButtom) return 
            $navButtom.classList.replace("Navbar__hamburguer-open","Navbar__hamburguer-close");
            if(!$list) return
            $list.classList.replace("Navbar__list-open","Navbar__list"); 
        }
        if (e.target.matches('#SkillsEducationLink')) {
            d.location.href = '#Skill-Education'
            if (!$navButtom) return 
            $navButtom.classList.replace("Navbar__hamburguer-open","Navbar__hamburguer-close");
            if(!$list) return
            $list.classList.replace("Navbar__list-open","Navbar__list");
        }
        if (e.target.matches('#ProjectsLink')) {
            d.location.href = '#Projects'
            if (!$navButtom) return 
            $navButtom.classList.replace("Navbar__hamburguer-open","Navbar__hamburguer-close");
            if(!$list) return
            $list.classList.replace("Navbar__list-open","Navbar__list");
        }
        if (e.target.matches('#ContactLink')) {
            d.location.href = '#Contact'
            if (!$navButtom) return 
            $navButtom.classList.replace("Navbar__hamburguer-open","Navbar__hamburguer-close");
            if(!$list) return
            $list.classList.replace("Navbar__list-open","Navbar__list");
        }
    })
}

const w = window, 
 d = document; 
 
export const NavbarChangeBackground = (idNav) => {
    const NavBard = d.getElementById(idNav)
    w.addEventListener("scroll",(e)=>{
        let scroll = w.scrollY; 
        console.log(scroll);
        if (scroll>100) {
            NavBard.classList.add("Navbar-Change-shadow")
        }
        else {
            NavBard.classList.remove("Navbar-Change-shadow")
        }
    }
    )
}
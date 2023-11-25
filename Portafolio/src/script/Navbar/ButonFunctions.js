const d = document; 

export const goToSection = () => {
    const navlinks = d.querySelectorAll('a.Navbar__option')
    d.addEventListener('click', (e)=>{
        if (e.target.matches('#HomeLink')) {
            d.location.href = '#Home'
        }
        if (e.target.matches('#SkillsEducationLink')) {
            d.location.href = '#Skill-Education'
        }
        if (e.target.matches('#ProjectsLink')) {
            d.location.href = '#Projects'
        }
        if (e.target.matches('#ContactLink')) {
            d.location.href = '#Contact'
        }
    })
}

const d = document; 
const w = window; 

export const goToPage = (url) => {
    d.addEventListener('click', (e) => {
        if (e.target.matches('#Button-Github')) {
            w.open('https://github.com/LuisSilvaB','_blank')
        }
        if (e.target.matches('#Button-Linkedin')) {
            w.open('https://www.linkedin.com/in/luis-armando-silva-balladares-75731124b/', '_blank'); 
        }
        if (e.target.matches('#Button-Cv')) {
            w.open('https://drive.google.com/file/d/1kXZPwefkM69KcvSji4TWV1Q5Xi9V_gP8/view?usp=sharing', '_blank')
        }
    });
}
const d = document; 


const $Projects = d.getElementById('Projects');  
const $ProjectsTitleSpan = d.getElementById('Projects-Title-span')
const $ProjectsList = d.getElementById('Project-List'); 
const $ProjectsCard = d.getElementsByClassName('Projects__card'); 
const $ProjectsCardContainerInfo = d.getElementsByClassName('Projects__card_info')
const $ProjectsCardTitles = d.getElementsByClassName('Projects__card_title') 
const el = d.getElementsByClassName('Projects__card_container_technologies')
const $ProjectsPhrases = d.getElementsByClassName('Projects__card_phrase'); 
export const ChangeThemeProjects = () => {
    $Projects.classList.contains('Projects-light')?ThemeLight():ThemeDark(); 
    console.log($ProjectsPhrases);
}

const ThemeDark = () => {
    $Projects.classList.toggle('Projects-light')
    $Projects.classList.toggle('Projects-dark')
    $ProjectsTitleSpan.classList.toggle('Projects__title_span-light')
    $ProjectsTitleSpan.classList.toggle('Projects__title_span-dark')
    $ProjectsList.classList.toggle('Projects__list-light')
    $ProjectsList.classList.toggle('Projects__list-dark')
    for (let index = 0; index < $ProjectsCard.length; index++) {
        $ProjectsCard.item(index).classList.toggle('Projects__card-light')
        $ProjectsCard.item(index).classList.toggle('Projects__card-dark')
        $ProjectsCardContainerInfo.item(index).classList.toggle('Projects__card_info-light')
        $ProjectsCardContainerInfo.item(index).classList.toggle('Projects__card_info-dark')
        $ProjectsCardTitles.item(index).classList.toggle('Projects__card_title-light')
        $ProjectsCardTitles.item(index).classList.toggle('Projects__card_title-dark')
        $ProjectsPhrases.item(index).classList.toggle('Projects__card_phrase-light')
        $ProjectsPhrases.item(index).classList.toggle('Projects__card_phrase-dark')
    }

}
const ThemeLight = () => {
    $Projects.classList.toggle('Projects-dark')
    $Projects.classList.toggle('Projects-light')
    $ProjectsTitleSpan.classList.toggle('Projects__title_span-dark')
    $ProjectsTitleSpan.classList.toggle('Projects__title_span-light')
    $ProjectsList.classList.toggle('Projects__list-light')
    $ProjectsList.classList.toggle('Projects__list-dark')
    for (let index = 0; index < $ProjectsCard.length; index++) {
        $ProjectsCard.item(index).classList.toggle('Projects__card-dark')
        $ProjectsCard.item(index).classList.toggle('Projects__card-light')
        $ProjectsCardContainerInfo.item(index).classList.toggle('Projects__card_info-dark')
        $ProjectsCardContainerInfo.item(index).classList.toggle('Projects__card_info-light')
        $ProjectsCardTitles.item(index).classList.toggle('Projects__card_title-dark')
        $ProjectsCardTitles.item(index).classList.toggle('Projects__card_title-light')
        $ProjectsPhrases.item(index).classList.toggle('Projects__card_phrase-dark')
        $ProjectsPhrases.item(index).classList.toggle('Projects__card_phrase-light')
    }

}
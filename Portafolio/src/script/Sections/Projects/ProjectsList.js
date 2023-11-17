import { PROJECTS } from "../../../utils/data/Projects.js";
import { getIconBytTechnology } from "../../../utils/getIconstByTechnologies.js";

const d = document; 
export const renderProjectsItems = () => {
    const $ListContainer = d.getElementById("Project-List"); 
    PROJECTS.forEach((el) => {
        // Create Elements 
        const $Card = d.createElement('li');  
        const $img = d.createElement('img'); 
        const $section = d.createElement('section'); 
        const $CardTitle = d.createElement('h4'); 
        const $p = d.createElement('p'); 
        const $divContainerTechnologies = d.createElement('div'); 
        const $divContainerButtons = d.createElement('div'); 

        $Card.classList.add("Projects__card");
        $img.classList.add('Projects__card_img'); 
        $img.setAttribute('src', el.photoUrl); 
        $section.classList.add('Projects__card_info-light'); 
        $CardTitle.classList.add('Projects__card_title-light');
        $CardTitle.innerText = el.title; 
        $p.classList.add('Projects__card_phrase-light'); 
        $p.innerText = el.description;  
        $divContainerTechnologies.classList.add('Projects__card_container_technologies')
        el.technologies.forEach((el)=>{
            const technologySvg = getIconBytTechnology(el); 
            $divContainerTechnologies.appendChild(technologySvg); 
        })
        $divContainerButtons.classList.add("Projects__card_container_buttons");  
        $divContainerButtons.innerHTML = `
            <a class="Projects__card_button-github-light" href=${el.repositoryUrl} target = blank ><span>Repository</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg></a>
            <a class="Projects__card_button-web-light" href = ${el.webUrl} target = blank ><span>WebSite</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z"/>
            </svg></a> 
        ` 

        // $Card.innerHTML = `
        //     <img class="Projects__card_img" src="${el.photoUrl}" alt="Portafolio">
        //     <section class="Projects__card_info-light">
        //         <h4 class="Projects__card_title-light">${el.title}</h4>
        //         <p class="Projects__card_phrase-light">${el.description}</p>
        //         <div class="Projects__card_container_technologies">
        //         </div>
        //         <div class="Projects__card_container_buttons">
        //             <a class="Projects__card_button-github-light" href=${el.repositoryUrl} target = blank ><span>Repository</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        //             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        //             </svg></a>
        //             <a class="Projects__card_button-web-light" href = ${el.webUrl} target = blank ><span>WebSite</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
        //             <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z"/>
        //             </svg></a>
        //         </div>
        //     </section>
        // `
        $ListContainer.appendChild($Card);
        $Card.appendChild($img); 
        $Card.appendChild($section);
        $section.appendChild($CardTitle); 
        $section.appendChild($p); 
        $section.appendChild($divContainerTechnologies); 
        $section.appendChild($divContainerButtons)


    })
}   
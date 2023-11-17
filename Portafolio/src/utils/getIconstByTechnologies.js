import { TECHNOLOGIES } from "./data/Technologies.js"
const d = document; 
export const getIconBytTechnology = (technology) => {
    const $ContainerTechnology = d.createElement('div')
    $ContainerTechnology.innerHTML = TECHNOLOGIES[technology];  
    return $ContainerTechnology; 
}
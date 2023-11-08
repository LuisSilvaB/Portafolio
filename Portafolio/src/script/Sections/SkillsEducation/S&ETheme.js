const d = document; 
const $SkillsEducation = d.getElementById("Skill-Education"); 
const $SkillsEducationTitle = d.getElementById("Skills-Education-Title"); 
const $SkillsEducationDescription = d.getElementById("Skills-Education-Description"); 
const $SkillsEducationSubTitles = d.querySelectorAll("#Skills-Education-Sub-Title"); 
const $SkillsEducationEducationTimeLines = d.querySelectorAll("#Skills-Education-Education-Item-Time-Line"); 
const $SkillsEducationEducationTimeLineBall = d.querySelectorAll("#Skill-Education-Education-Ball")
const $SkillEducationEducation = d.getElementById("Skill-Education-Education"); 
const $SkillsEducationEducationItemsContainer = d.getElementById("Skills-Education-Education-Items-Container"); 
const $SkillEducationEducationItemsTitles = d.querySelectorAll("#Skills-Education-Education-Item-Title")
const $SkillEducationEducationItemsSubTitles = d.querySelectorAll("#Skills-Education-Education-Item-Sub-Title");
const ChangeThemeSkillsEducation = () => {
    $SkillsEducation.classList.contains("skills-education-light") ? ThemeDark() : ThemeLight(); 
}; 

const ThemeDark = () => {
    $SkillsEducation.classList.toggle("skills-education-light"); 
    $SkillsEducation.classList.toggle("skills-education-dark"); 
    $SkillsEducationTitle.classList.toggle("skills-education__title-light"); 
    $SkillsEducationTitle.classList.toggle("skills-education__title-dark"); 
    $SkillsEducationDescription.classList.toggle("skills-education__description-light"); 
    $SkillsEducationDescription.classList.toggle("skills-education__description-dark");
    $SkillsEducationSubTitles.forEach((el)=>{
        el.classList.toggle("skills-education__sub-title-light"); 
        el.classList.toggle("skills-education__sub-title-dark"); 
    })
    $SkillsEducationEducationTimeLines.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_time-line-light");
        el.classList.toggle("skills-education__education_item_time-line-dark");
    })
    $SkillsEducationEducationTimeLineBall.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_time-line-ball-light"); 
        el.classList.toggle("skills-education__education_item_time-line-ball-dark"); 
    }); 
    $SkillsEducationEducationItemsContainer.classList.toggle("skills-education__education_items_container-light");
    $SkillsEducationEducationItemsContainer.classList.toggle("skills-education__education_items_container-dark");
    $SkillEducationEducation.classList.toggle("skills-education__education-light"); 
    $SkillEducationEducation.classList.toggle("skills-education__education-dark"); 
    $SkillEducationEducationItemsTitles.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_title-light")
        el.classList.toggle("skills-education__education_item_title-dark")
    })
    $SkillEducationEducationItemsSubTitles.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_sub-title-light"); 
        el.classList.toggle("skills-education__education_item_sub-title-dark"); 
    })
}
const ThemeLight = () => {
    $SkillsEducation.classList.toggle("skills-education-dark"); 
    $SkillsEducation.classList.toggle("skills-education-light"); 
    $SkillsEducationTitle.classList.toggle("skills-education__title-dark");
    $SkillsEducationTitle.classList.toggle("skills-education__title-light");
    $SkillsEducationDescription.classList.toggle("skills-education__description-dark");
    $SkillsEducationDescription.classList.toggle("skills-education__description-light");
    $SkillsEducationSubTitles.forEach((el)=>{
        el.classList.toggle("skills-education__sub-title-dark"); 
        el.classList.toggle("skills-education__sub-title-light"); 
    }); 
    $SkillsEducationEducationTimeLines.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_time-line-dark");
        el.classList.toggle("skills-education__education_item_time-line-light");
    }); 
    $SkillsEducationEducationTimeLineBall.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_time-line-ball-dark"); 
        el.classList.toggle("skills-education__education_item_time-line-ball-light"); 
    }); 
    $SkillsEducationEducationItemsContainer.classList.toggle("skills-education__education_items_container-dark");
    $SkillsEducationEducationItemsContainer.classList.toggle("skills-education__education_items_container-light");
    $SkillEducationEducation.classList.toggle("skills-education__education-dark");
    $SkillEducationEducation.classList.toggle("skills-education__education-light"); 
    $SkillEducationEducationItemsTitles.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_title-dark")
        el.classList.toggle("skills-education__education_item_title-light")
    })
    $SkillEducationEducationItemsSubTitles.forEach((el)=>{
        el.classList.toggle("skills-education__education_item_sub-title-dark"); 
        el.classList.toggle("skills-education__education_item_sub-title-light"); 
    })
}

export { ChangeThemeSkillsEducation };
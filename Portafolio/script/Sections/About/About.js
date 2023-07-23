const d = document,
 w = window;  

export function replace_paragraph(){
    const $aboutList = d.querySelector(".About__list"); 
    const $containerParagraph = d.querySelector(".About__description")
    
    //* Creación de elementos 
    
    const $desktopParagraph = d.createElement("p"); 
    $desktopParagraph.classList.add("About__description__p-desktop"); 
    $desktopParagraph.innerText = 
    `Soy estudiante de la carrera de ingeniería en computación y sistemas, poseo una amplia gama de cualidades y habilidades que me destacan en el mundo tecnológico. Mi pasión por la informática y la programación me ha llevado a dominar diversas herramientas de ofimática y lenguajes de programación, permitiéndome abordar proyectos de manera innovadora y eficiente. Mi capacidad para estudiar de forma autodidacta me ha brindado la oportunidad de mantenerme actualizado en las últimas tendencias tecnológicas y adaptarme rápidamente a los cambios del campo.`
    const $mobileParagraph = d.createElement("p"); 
    $mobileParagraph.classList.add("About__description__p-mobile");
    $mobileParagraph.innerText =
     `Soy estudiante de la carrera de ingeniería en computación y sistemas, poseo una amplia gama de cualidades y habilidades que me destacan en el mundo tecnológico.`  
    
     // * Comprobación inicial 
    
    if (w.innerWidth < 900 ) {
      $containerParagraph.insertBefore($mobileParagraph, $aboutList)
    }
    else{
      $containerParagraph.insertBefore($desktopParagraph, $aboutList)
    }

    // * Remplazo de párrafo al redimensionar  
    
    w.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 900 ) {
      try {
        const $desktopParagraphHTML = d.querySelector(".About__description__p-desktop")
        $containerParagraph.replaceChild($mobileParagraph, $desktopParagraphHTML)
      } catch (error) {
        // console.log(error);
      }
    }
    else{
      try {
        const $mobileParagraphHTML = d.querySelector(".About__description__p-mobile")
        $containerParagraph.replaceChild($desktopParagraph,$mobileParagraphHTML)
      } catch (error) {
        // console.log(error);
      }
    }
  })
}


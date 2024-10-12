
export const downloadCv = () => {
  const buttonCv = document.getElementById('Button-Cv');
  
  if (buttonCv) {
    buttonCv.addEventListener('click', function() {
      window.open(buttonCv.href, '_blank');
    });
  
    buttonCv.addEventListener('click', function(e) {
      e.preventDefault(); 
      window.open(buttonCv.href, '_blank');
    });
  }
}
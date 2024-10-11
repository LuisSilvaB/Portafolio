export const downloadCv = () => {
  const buttonCv = document.getElementById('Button-Cv');
  
  if (buttonCv) {
    buttonCv.addEventListener('click', function(e) {
      e.preventDefault();

      const link = document.createElement('a');
      link.href = buttonCv.href; 
      link.setAttribute('download', 'CV_LuisSilvaBalladares');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

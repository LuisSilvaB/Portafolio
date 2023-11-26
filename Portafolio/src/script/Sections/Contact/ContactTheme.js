const d = document;
const $Contact = d.getElementById('Contact'); 
const $ContactFormContainer = d.getElementById('Contact-form-container'); 
const $FormTitleSpan = d.getElementById('Contact-form-title-span'); 
const $ContactFormLabel = d.querySelectorAll('#Contact-form-label'); 
const $SendButton = d.getElementById('Contact-button'); 
export const ChangeThemeContact = () => {
    $Contact.classList.contains('Contact-light')?ThemeDark():ThemeLight(); 
}; 
const ThemeDark = () => {
    $Contact.classList.toggle('Contact-light')
    $Contact.classList.toggle('Contact-dark')
    $ContactFormContainer.classList.toggle('Contact__form_container-light')
    $ContactFormContainer.classList.toggle('Contact__form_container-dark')
    $FormTitleSpan.classList.toggle('Contact__form_title_span-light')
    $FormTitleSpan.classList.toggle('Contact__form_title_span-dark')
    $ContactFormLabel.forEach(el=>{
        el.classList.toggle('Contact__form_label-light')
        el.classList.toggle('Contact__form_label-dark')
    })
    $SendButton.classList.toggle('Contact__button_send-light')
    $SendButton.classList.toggle('Contact__button_send-dark')
} 
const ThemeLight = () => {
    $Contact.classList.toggle('Contact-dark')
    $Contact.classList.toggle('Contact-light')
    $ContactFormContainer.classList.toggle('Contact__form_container-dark')
    $ContactFormContainer.classList.toggle('Contact__form_container-light')
    $FormTitleSpan.classList.toggle('Contact__form_title_span-light')
    $FormTitleSpan.classList.toggle('Contact__form_title_span-dark')
    $ContactFormLabel.forEach(el=>{
        el.classList.toggle('Contact__form_label-dark')
        el.classList.toggle('Contact__form_label-light')
    })
    $SendButton.classList.toggle('Contact__button_send-dark')
    $SendButton.classList.toggle('Contact__button_send-light')
}
const d = document; 
const w = window;
const $ButtonSubmitForm = d.getElementById("Contact-button"); 
const $fullname = d.getElementById("Fullname"); 
const $subject = d.getElementById("Subject"); 
const $message = d.getElementById("Message"); 
const $successMessage = d.getElementById("Contact-message"); 
const $contactLoader = d.getElementById("ContactLoader")

export const ContactButtonsFunctions = () =>{
    let fullnameValue; 
    let subjectValue; 
    let messageValue; 
    $fullname.addEventListener('change',(e)=>{
        fullnameValue = e.target.value;
    })
    $subject.addEventListener('change', (e)=>{
        subjectValue = e.target.value; 
    })
    $message.addEventListener('change', (e)=>{
        messageValue = e.target.value; 
    })
    $ButtonSubmitForm.addEventListener("click", (e)=>{
        e.preventDefault();
        $contactLoader.classList.add('loader'); 
        if (fullnameValue != '' && subjectValue != '' && messageValue != '') {
            fetch("https://formsubmit.co/ajax/luisarmandoballadares@gmail.com",{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json', 
                    'Accept':'application/json',
                },
                body: JSON.stringify({
                    fulname: fullnameValue, 
                    subject: subjectValue, 
                    message: messageValue, 
                })
            }).then( response => {
                response.json()
                console.log(response);
                if (response.ok) {
                    $contactLoader.classList.remove('loader'); 
                    $successMessage.classList.toggle('Contact__message_sucess-inactive');
                    $successMessage.classList.toggle('Contact__message_sucess-active');
                    setTimeout(()=>{
                        $successMessage.classList.toggle('Contact__message_sucess-active');
                        $successMessage.classList.toggle('Contact__message_sucess-inactive');
                    },3000)
                }
            }).then(data => console.log(data)).catch(error => console.log(error))
        }
    })
    d.addEventListener('click', (e)=>{
        if (e.target.matches("#WhatsappButton")) {
            w.open('https://api.whatsapp.com/send?phone=51923951866&text=Hi%20Luis!%20%F0%9F%9A%80%20','_blank')
        }
        if (e.target.matches('#TelegramButton')) {
            w.open('https://t.me/luissilvaba', '_blank')
        }
    })
}
const TOKEN = "6480004283:AAE7NfGjINYHM2EEGLsLHZEPQ_UUrrT9NRs";
const CHAT_ID = "-1001948659956";
const URI_API = 'https://api.telegram.org/bot6480004283:AAE7NfGjINYHM2EEGLsLHZEPQ_UUrrT9NRs/sendMessage';

document.getElementById("tg-sender").addEventListener("submit", function(event){
    event.preventDefault();
    
    let message = "<b>Здравствуйте!</b>\n";
    message += "<b>Хочу заказать у вас торт</b>\n";
    message += "<b>Свяжитесь со мной по номеру: </b>" + this.phone.value + "\n";
    message += "<b>Или по почте: </b>" + this.email.value + "\n"; 

    

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    })
})
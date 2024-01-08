const chatBackwardsBtn = document.getElementById("chat-backwards-btn");
const chatBackground = document.getElementById("chat");
const chat = document.getElementById("chat-screen");
const chatBtn = document.getElementById("chat-icon");

function closeChatClickBtn(event) {
    
    chat.classList.replace("on-chat","off-chat");
    chatBackground.classList.replace("visible","hidden");
}

function closeChatClickBackground(event) {
    if(event.currentTarget === chatBackground) {
        chat.classList.replace("on-chat","off-chat");
        chatBackground.classList.replace("visible","hidden");
    }
}

function onChat(event) {
    checkChatClass(event);
    if(chat.classList.contains) {
        chat.classList.replace("off-chat","on-chat");
        chatBackground.classList.replace("hidden","visible");
    }
}

function checkChatClass(event) {
    if(profile.classList.contains("on-chat") ==false){
        chat.classList.add("on-chat");
        chatBackground.classList.add("visible");
    }
}

chatBtn.addEventListener("click",onChat);
chatBackwardsBtn.addEventListener("click", closeChatClickBtn);
chatBackground.addEventListener("mousedown",closeChatClickBackground);

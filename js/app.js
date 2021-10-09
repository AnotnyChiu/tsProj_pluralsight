"use strict";
// plain js is also valid ts!
function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'welcome to multimath! starting new game';
}
document.getElementById('startGame').addEventListener('click', startGame);
// config option 開啟 strict後，ts會認為messagesElement 跟 getelement那邊(來自html) 的東西
// 可能會是null，所以會抱錯，要讓ts知道你確定它不會是null
// 在他後面加上 " ! "

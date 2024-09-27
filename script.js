// API URL
var qrApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let gnrtBtn = document.getElementById("gnrt-btn");

function generateQR() {
    qrImage.src = qrApiUrl + qrText.value;
}

gnrtBtn.addEventListener("click", generateQR);










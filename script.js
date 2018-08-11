let userInput = document.getElementById("userinput");
let textOutput = document.getElementById("output");
let toKatakana = document.getElementById("katakana");
let toHirangana = document.getElementById("hiragana");

function processKatakana(){
    textOutput.innerHTML = (jaco(userInput.value).toKatakana());
}

function processHiragana(){
    textOutput.innerHTML = (jaco(userInput.value).toHiragana());
}

passwordInput = document.getElementById("password");

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase ="abcdefghijklmnopqrstuvwxyz";
    let digit = "0123456789";
    let SpecialCharacter = "!@#$%^&*()-_=+\|[]{};:/?.>";
    let password="",length=12;
    let allCharacter = upperCase + lowerCase + digit + SpecialCharacter;

function generate(){
    password ="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += digit[Math.floor(Math.random() * digit.length)];
    password += SpecialCharacter[Math.floor(Math.random() * SpecialCharacter.length)];

    while(length > password.length){
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
    }

    console.log(password)

    passwordInput.value = password;
 }  

 function copy(){
    passwordInput.select();
    document.execCommand("copy");
 }

// var yourName, yourSurname, yourAge, yourFavouriteColor, yourFavouriteNumber, yourPassword;

var yourName;
var yourSurname;
var yourAge;
var yourFavouriteColor;
var yourFavouriteNumber;
var yourPassword;
var questPasswordGeneretor;

questPasswordGeneretor = function() {

    yourName = prompt("Ciao, come ti chiami?");

    yourSurname = prompt("Piacere " + yourName +", di cognome?");
    
    yourAge = prompt( yourName + " " + yourSurname + ", quanti anni hai?");
    
    yourFavouriteColor = prompt( yourName + ", complimenti! " + yourAge + " sono anni ruggenti!" +  " E qual'è il tuo colore preferito?");
    
    yourFavouriteNumber = prompt( yourName + ", un'ultima domanda prima di scoprire la tua nuova fantastica password. Qual'è il tuo numero preferito?");
    
        confirm( yourName + " sei pronto a scoprire la tua password SupeInsiCula?");
    
    yourPassword = yourName + yourSurname + yourFavouriteColor + yourFavouriteNumber + (19) + yourAge;
    
    password.innerHTML = yourPassword;
};
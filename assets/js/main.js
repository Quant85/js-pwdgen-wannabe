var yourName = prompt("Ciao, come ti chiami?");

var yourSurname = prompt("Piacere " + yourName +", di cognome?");

var yourAge = prompt( yourName + " " + yourSurname + ", quanti anni hai?");

var yourFavouriteColor = prompt( yourName + ", complimenti! " + yourAge + " sono anni ruggenti!" +  " E qual'è il tuo colore preferito?");

var yourFavouriteNumber = prompt( yourName + ", un'ultima domanda prima di scoprire la tua nuova fantastica password. Qual'è il tuo numero preferito?");
    confirm( yourName + " sei pronto a scoprire la tua password SupeInsiCula?");

var yourPassword;

yourPassword = yourName + yourSurname + yourFavouriteColor + yourFavouriteNumber + (19) + yourAge;

password.innerHTML = yourPassword;
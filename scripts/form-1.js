//wird verwendet, um den Wert eines bestimmten URL-Parameters aus der aktuellen URL zu extrahieren
function getParameterByName(lang) {
    lang = lang.replace(/[\[\]]/g, '\\$&');
    // Hole die aktuelle URL
    let url = window.location.href;
    let regex = new RegExp('[?&]' + lang + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Daten aus dem Formular auslesen
document.getElementById('personalienForm').addEventListener('submit', function (event) {
    // Verhindert das Standardverhalten des Formulars           
    event.preventDefault();

        //Get the values from the input fields.
        const vorname = document.getElementById('fname').value;
        const nachname = document.getElementById('lname').value;
        const strasse = document.getElementById('street').value;
        const hausnr = document.getElementById('house').value;
        const plz = document.getElementById('plz').value;
        const ort = document.getElementById('ort').value;
        const tlfnr = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const lang = getParameterByName('lang');

// Validate the form

const errors = [];

function myValidation() {
    // Get the value of the input field with id=""

    

        let x = document.getElementById("house").value;
        
        if (isNaN(x) || x < 1) {
            document.getElementById("error-message-house").innerHTML = "Bitte eine gültige Zahl eingeben";
            errors.push("Invalid");
        } else {
            document.getElementById("error-message-house").innerHTML = "";
        }

        let y = document.getElementById("plz").value;

        if (isNaN(y) || y < 1 || y.length != 4) {
            document.getElementById("error-message-plz").innerHTML = "Bitte eine gültige Postleitzahl eingeben";
            errors.push("Invalid");
        } else {
            document.getElementById("error-message-plz").innerHTML = "";
        }

        let z = document.getElementById("lname").value;

        if (z === "") {
            document.getElementById("error-message-last-name").innerHTML = "Bitte Ihren Nachnamen eingeben";
            errors.push("Invalid");
        } else {
            document.getElementById("error-message-last-name").innerHTML = "";
        }
 
}



myValidation();

if(errors.length > 0) { // If there are errors, we don't submit the form.
    return false;
  }   





// Daten im sessionStorage speichern      
        sessionStorage.setItem('fname', vorname);
        sessionStorage.setItem('lname', nachname);
        sessionStorage.setItem('street', strasse);
        sessionStorage.setItem('house', hausnr);
        sessionStorage.setItem('plz', plz);
        sessionStorage.setItem('ort', ort);
        sessionStorage.setItem('phone', tlfnr);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('lang', lang);



// Weiterleitung zur nächsten Seite        
        window.location.href = 'form-2-index.html';
    });

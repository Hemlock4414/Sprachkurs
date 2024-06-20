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
   // })


// Validate the form

function myValidation() {
    // Get the value of the input field with id=""
    let x = document.getElementById("house").value;
    
    if (isNaN(x) || x < 1) {
        document.getElementById("error-message-house").innerHTML = "Bitte eine gültige Zahl eingeben";
    } else {
        document.getElementById("error-message-house").innerHTML = "";
    }

    let y = document.getElementById("plz").value;
    if (isNaN(y) || y < 1 || y.length != 4) {
        console.log("platz plz")
        document.getElementById("error-message-plz").innerHTML = "Bitte eine gültige Postleitzahl eingeben";
    } else {
        document.getElementById("error-message-plz").innerHTML = "";
    }
}

myValidation();

/* const errors = [];
    if (vorname === "") {
        document.getElementById("error-message-first-name").innerHTML = "Please enter your first name";
        errors.push("first_name")
    } else {
        document.getElementById("error-message-first-name").innerHTML = "";
    }
 */

/* 
    if(errors.length > 0) {
        return false;
      }

 */

/* if(plz.length != 4) {
    alert("Bitte eine gültige Postleitzahl angeben.");
    return; 
}
 */

// Daten im sessionStorage speichern      
        sessionStorage.setItem('fname', vorname);
        sessionStorage.setItem('lname', nachname);
        sessionStorage.setItem('street', strasse);
        sessionStorage.setItem('house', hausnr);
        sessionStorage.setItem('plz', plz);
        sessionStorage.setItem('ort', ort);
        sessionStorage.setItem('phone', tlfnr);
        sessionStorage.setItem('email', email);

// Weiterleitung zur nächsten Seite        
        window.location.href = 'form-2-index.html';
    });

document.addEventListener('DOMContentLoaded', function() {
        const lang = sessionStorage.getItem('lang');
        // Setze den Kurs im Dropdown-Feld vorausgewählt
                if (lang) {
                        document.getElementById('lang').value = lang;
                }
        //dynamisches min Attribut, basierend auf dem aktuellen Datum
        const startMonthInput = document.getElementById('kbeginn');

        const currentDate = new Date();
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        const nextMonthYear = nextMonth.getFullYear();
        const nextMonthMonth = String(nextMonth.getMonth() + 1).padStart(2, '0');
        // Monat 0-basiert
        // Setzt das `min`-Attribut auf den nächsten Monat
        startMonthInput.min = `${nextMonthYear}-${nextMonthMonth}`;
});

// Kursdaten auslesen 
    document.getElementById('kursForm').addEventListener('submit', function (event) {
        // Verhindert das Standardverhalten des Formulars            
        event.preventDefault();
        //Get the values from the input fields.
        const sprache = document.getElementById('lang').value;
        const niveau = document.getElementById('niveau').value;
        const monat = document.getElementById('kbeginn').value;
        const standort = document.getElementById('kort').value;
        const modell = document.getElementById('kmodell').value;
console.log(sprache);
// Verhindert das Speichern und Weiterleitung, wenn keine Auswahl getroffen wurde
if (sprache === "") {
        alert("Bitte eine Sprache auswählen.");
        return; 
}

if (niveau === "") {
        alert("Bitte ein Sprachniveau auswählen.");
        return; 
}

if (standort === "") {
        alert("Bitte einen Standort auswählen.");
        return; 
}

if (modell === "") {
        alert("Bitte ein Kursmodell auswählen.");
        return; 
}

// Daten im sessionStorage speichern            
        sessionStorage.setItem('lang', sprache);
        sessionStorage.setItem('niveau', niveau);
        sessionStorage.setItem('kbeginn', monat);
        sessionStorage.setItem('kort', standort);
        sessionStorage.setItem('kmodell', modell);

// Weiterleitung zur nächsten Seite            
        window.location.href = 'grats-index.html';
    });


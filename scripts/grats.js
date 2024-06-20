
// Buchungsdetails Personalien abrufen
    const vorname = sessionStorage.getItem('fname');
    const nachname = sessionStorage.getItem('lname');
    const strasse = sessionStorage.getItem('street');
    const hausnr = sessionStorage.getItem('house');
    const plz = sessionStorage.getItem('plz');
    const ort = sessionStorage.getItem('ort');
    const tlfnr = sessionStorage.getItem('phone');
    const email = sessionStorage.getItem('email');

// HTML für die Anzeige der Daten erstellen
const buchungDetailsPerson = `
        <p><b>Vorname:</b> ${vorname}</p>
        <p><b>Nachname:</b> ${nachname}</p>
        <p><b>Strasse:</b> ${strasse}</p>
        <p><b>Hausnummer:</b> ${hausnr}</p>
        <p><b>PLZ:</b> ${plz}</p>
        <p><b>Ort:</b> ${ort}</p>
        <p><b>Telefonnummer:</b> ${tlfnr}</p>
        <p><b>E-Mail:</b> ${email}</p>
    `;

// Daten in das div-Element einfügen
document.getElementById('buchungDetailsPerson').innerHTML = buchungDetailsPerson;


// Buchungsdetails Kurs abrufen
const sprache = sessionStorage.getItem('lang');
const niveau = sessionStorage.getItem('niveau');
const monat = sessionStorage.getItem('kbeginn');
const standort = sessionStorage.getItem('kort');
const modell = sessionStorage.getItem('kmodell');

// HTML für die Anzeige der Daten erstellen
const buchungDetailsKurs = `
        <p><b>Sprachkurs:</b> ${sprache}</p>
        <p><b>Niveau:</b> ${niveau}</p>
        <p><b>Monat:</b> ${monat}</p>
        <p><b>Kursort:</b> ${standort}</p>
        <p><b>Kursmodell:</b> ${modell}</p>
        `;

// Daten in das div-Element einfügen
document.getElementById('buchungDetailsKurs').innerHTML = buchungDetailsKurs;
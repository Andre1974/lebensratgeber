// main.js
// Die Main JS dient der zusammenführung/ Verknüpfung der Scripte und steuert die logische Abfolge
// Asynchron weil später viele Nutzer zeitgleich
// Autor Andre 
// Version v0.0.1

const { animateEarth } = require("./js/animation.js"); // Import für die Animation hinzufügen
const { sprache_waehlen } = require("./js/sprachauswahl_ramazan.js");
const { kategorie_waehlen } = require("./js/inhalt_deutsch_conny.js");
const { kategorie2_waehlen } = require("./js/inhalt_englisch_conny.js");
const { bewertungAbgeben } = require("./js/bewertung_abgeben_ramazan.js"); 
const readline = require("readline");

// Funktion zur Neustart-Abfrage
async function neustart_abfragen() {
  return new Promise((resolve) => {  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(
      "****Möchten Sie das Programm neu starten? (j/n): ",
      (antwort) => {
        rl.close();
        if (antwort.toLowerCase() === "j") {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    );
  });
}

// Erstelle eine Funktion, die asynchron abläuft
async function main() {
  console.clear(); // Immer beim Start Konsole leeren

    // Start der Animation (2-3 Zyklen) vor dem Programm
    await animateEarth(3);

  try {
    // Warte auf die Sprachauswahl
    const sprachauswahl = await sprache_waehlen();
    let ergebnis;
    if (sprachauswahl === "Deutsch 🇩🇪") {
      console.log("Deutscher Inhalt wird geladen...🇩🇪");
      console.log("********************************");
      // Lade das deutsche Skript und warte auf die Kategorieauswahl
      ergebnis = await kategorie_waehlen();
      console.log("***********");
      // console.log(
      //   `Sprache: ${ergebnis.sprache}, Kategorie: ${ergebnis.kategorie}, Ratschlag: ${ergebnis.ratschlag}, ID: ${ergebnis.id}`
      // );
    } else if (sprachauswahl === "Englisch 🇬🇧") {
      console.log("Englischer Inhalt wird geladen...🇬🇧");
      console.log("********************************");
      // Lade das englische Skript und warte auf die Kategorieauswahl
      ergebnis = await kategorie2_waehlen();
      console.log("***********");
      // console.log(
      //   `Sprache: ${ergebnis.sprache}, Kategorie: ${ergebnis.kategorie}, Ratschlag: ${ergebnis.ratschlag}, ID: ${ergebnis.id}`
      // );
    } else {
      console.log("Keine gültige Sprache ausgewählt.");
      return;
    }

    // Bewertungsfunktion separat aufrufen, wenn die Sprache und der Ratschlag vorhanden sind
    if (ergebnis) {
      await bewertungAbgeben(
        ergebnis.sprache,
        ergebnis.kategorie,
        ergebnis.ratschlag,
        ergebnis.id
      );
    }

    // Warte auf die Eingabe, ob das Programm neu gestartet werden soll
    const neustart = await neustart_abfragen();
    if (neustart) {
      console.clear(); // Bildschirm leeren
      console.log("Programm wird neu gestartet...");
      main(); // Neustart der main-Funktion
    } else {
      console.log("Programm wird beendet.");
    } 
  } catch (error) {
    console.error("Es gab einen Fehler:", error);
  }
}

// Hauptfunktion aufrufen
main(); 
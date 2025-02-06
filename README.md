**🌟 Projektbeschreibung**

BC-Projekt ist eine reine Konsolenanwendung, die es Benutzern ermöglicht, einfache Lebensweisheiten nach Kategorien auszugeben und zu bewerten. Die Anwendung unterstützt mehrere Sprachen und zeigt passende ASCII-Kunst zu den Weisheiten an. Benutzer können die Weisheiten mit 1-5 Sternen bewerten, und die Bewertungen werden zur weiteren Verarbeitung gespeichert.

Dieses Projekt wurde als kleine Teamarbeit nach Scrum mit den Tools Miro und Trello durchgeführt.

**👥 Teammitglieder**
Ramazan
Cornelia Boolhaar

**🛠️ Projektstruktur**
Das Projekt hat die folgende Datei- und Ordnerstruktur:
Wichtige Dateien und Funktionen

main.js : Die Hauptdatei der Anwendung, die alle anderen Skripte zusammenführt.
neustart_abfragen(): Fragt den Benutzer, ob er das Programm neu starten möchte.
main(): Die Hauptfunktion der Anwendung.
js/auswertung.js: Lädt und analysiert Bewertungen.
ladeBewertungen(): Lädt Bewertungen aus der Datei bewertungen.txt.
berechneAuswertung(): Analysiert die Bewertungen.
js/sprachauswahl_ramazan.js: Ermöglicht die Auswahl der Benutzersprache.
sprache_waehlen(): Ermöglicht dem Benutzer die Auswahl der Sprache.
js/inhalt_deutsch_conny.js & js/inhalt_englisch_semm.js: Zeigt ASCII-Kunst nach Kategorien.
bildchen(kategorie): Zeigt ASCII-Kunst für eine bestimmte Kategorie an.
kategorie_waehlen(): Ermöglicht dem Benutzer die Auswahl einer Kategorie.
js/bewertung_abgeben_ramazan.js: Nimmt die Bewertung des Benutzers entgegen und speichert sie.
bewertungAbgeben(sprache, kategorie, ratschlag, id): Nimmt die Bewertung des Benutzers entgegen.
speichern(id, bewertung, sprache, kategorie, ratschlag): Speichert die Bewertung in der Datei bewertungen.txt.

**📝 Installation und Ausführung**
Befolgen Sie die folgenden Schritte, um das Projekt auszuführen:

*Projekt klonen:*
git clone git@github.com:Andre1974/lebensratgeber.git
cd lebensratgeber

*Erforderliche Abhängigkeiten installieren:*
npm install

*Starten Sie die Anwendung:*
node main.js

**🎨 Verwendung**

Das Programm startet mit einer Sprachauswahl.
Danach wählt der Benutzer eine Kategorie für die Lebensweisheiten (z. B. "Ostern").
Das Programm gibt die Lebensweisheit der gewählten Kategorie aus.
Es wird ein passendes ASCII-Bild zur Lebensweisheit angezeigt.
Abschließend kann der Benutzer die Lebensweisheit mit 1-5 Sternen bewerten.
Die Bewertungen werden gespeichert und stehen für weitere Analysen zur Verfügung.

**📈 Roadmap**
Erweiterung der Bewertungskategorien 📚
Optimierung der Lebensweisheiten 📝
Auswertung der Nutzerbewertungen zur Verbesserung der Inhalte 📊
Einführung eines Freemium-Modells mit begrenzten kostenlosen und unbegrenzten Premium-Sprüchen ☕
Tägliche Glückssprüche für eine Extraportion Motivation 🌟

**✨ Mitwirken**
Möchten Sie zum Projekt beitragen? Folgen Sie diesen Schritten:

Forken Sie das Repository
Erstellen Sie einen neuen Branch: git checkout -b feature-xy
Committen Sie Ihre Änderungen: git commit -m 'Funktion XY hinzugefügt'
Pushen Sie Ihre Änderungen: git push origin feature-xy
Erstellen Sie einen Pull Request

**✉ Kontakt**
📧 E-Mail: projekte@kingnetz.de

📌 Projektverantwortlicher Andre1974

**🛡️ Lizenz**
Dieses Projekt ist unter der MIT-Lizenz lizenziert.

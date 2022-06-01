class Lebensmittelliste {
    liste = []

    constructor(artikel) {
        this.artikel = artikel
    }

    artikelHinzufuegen(artikel) {
        this.liste.push(artikel)
        //console.debug(artikel,"wurde erfolgrreich hinzugefügt")
    }

    artikelsHinzufuegen(artikel) {

        for (let mehrereartikel of artikel) {
            this.liste.push(mehrereartikel)
            //console.debug(mehrereartikel,"wurde erfolgrreich hinzugefügt")
        }

        //for (let i = 0; i < artikel.length; i++) {
        // this.liste.push(artikel[i])
        // }

    }

    sortieren() {
        this.liste.sort()
    }
}

class Lebensmittel {
    constructor(art, MHD, anzahl) {
        this.art = art
        this.MHD = MHD
        this.anzahl = anzahl

    }

}

let art1 = new Lebensmittel("Mehl", "1/24", 2)
let art2 = new Lebensmittel("Reis", "3/24", 1)
let art3 = new Lebensmittel("Banane", 0, 8)
let art4 = new Lebensmittel("Weltmeister", 0, 1)
let art5 = new Lebensmittel("Weizen Toast", 0, 2)
let art6 = new Lebensmittel("Vollkorn Toast", 0, 3)
let art8 = new Lebensmittel("Milch", "12/22", 49)
let art9 = new Lebensmittel("Gouda", "22/5/22", 1)
let art10 = new Lebensmittel("Tillsitter", "26/5/22", 2)
let art11 = new Lebensmittel("Kaffee", "2/24", 4)
let art12 = new Lebensmittel("Margarine", 0, 2)
let art13 = new Lebensmittel("Oliven Öl", 0, 3)
let art14 = new Lebensmittel("Frittier Öl 3L", 0, 2)
let art15 = new Lebensmittel("Öl 1L", 0, 4)
let art16 = new Lebensmittel("Kakao", "5/23", 2)
let art17 = new Lebensmittel("Paprika TK", 0, 3)
let art18 = new Lebensmittel("Hackfleisch 500G", 0,)
let art19 = new Lebensmittel("Bratwurst 5er TK", 0, 4)
let art20 = new Lebensmittel("Schweinefilet", 0, 4)
let art21 = new Lebensmittel("Koteletts TK", 0, 12)
let art22 = new Lebensmittel("Kartoffeln in ca.Kg", 0, 10)
let art23 = new Lebensmittel("Zwiebeln in ca.Kg", 0, 5)
let art24 = new Lebensmittel("Tomaten TK", 0, 1)
let art25 = new Lebensmittel("Möhren TK", 0, 3)
let art26 = new Lebensmittel("Erbsen TK", 0, 2)
let art27 = new Lebensmittel("Spaghetti", 0, 4)
let art28 = new Lebensmittel("Spirelli", 0, 4)
let art29 = new Lebensmittel("Penne", 0, 4)
let art30 = new Lebensmittel("Tortelini Schinken", 0, 2)
let art31 = new Lebensmittel("Tortelini Spinat", 0, 2)
let art32 = new Lebensmittel("Passierte Tomaten", 0, 12)
let art33 = new Lebensmittel("Tomaten Dose", 0, 8)
let art34 = new Lebensmittel("Tomatenmark", 0, 6)
let art35 = new Lebensmittel("Ketchup", 0, 2)
let art36 = new Lebensmittel("Mayo", 0, 2)
let art37 = new Lebensmittel("Remoulade", 0, 1)
let art38 = new Lebensmittel("Senf", 0, 1)
let art39 = new Lebensmittel("Süß Sauer", 0, 1)
let art40 = new Lebensmittel("Curry Ketchup", 0, 1)
let art41 = new Lebensmittel("Knoblauch Sauce", 0, 1)
let art42 = new Lebensmittel("BBC Sauce", 0, 1)
let art43 = new Lebensmittel("Kräuterbutter", 0, 1)
let art44 = new Lebensmittel("Kochsahne", "3/6/22", 6)
let art45 = new Lebensmittel("Schlagsahne", "28/5/22", 3)
let art46 = new Lebensmittel("Zucker", 0, 2)
let art47 = new Lebensmittel("Frische Hefe", "6/6/22", 2)
let art48 = new Lebensmittel("Schokoaufstrich", 0, 2)
let art49 = new Lebensmittel("Marmelade", "7/22", 1)
let art50 = new Lebensmittel("Kaffeefilter Pack", 0, 1)
let art51 = new Lebensmittel("Honig", 0, 1)
let art52 = new Lebensmittel("Fenchelhonig", 0, 1)
let art53 = new Lebensmittel("Kamillentee", 0, 1)
let art54 = new Lebensmittel("Fencheltee", 0, 1)
let art55 = new Lebensmittel("Pfefferminztee", 0, 1)
let art56 = new Lebensmittel("Vanillezucker", 0, 8)
let art57 = new Lebensmittel("Amarettosirup", 0, 1)
let art58 = new Lebensmittel("Colasirup", 0, 1)
let art59 = new Lebensmittel("Orangensirup", 0, 1)
let art60 = new Lebensmittel("Zitrussirup", 0, 1)
let art62 = new Lebensmittel("Prinzessbohnen", 0, 2)
let art63 = new Lebensmittel("Chillibohnen", 0, 2)
let art64 = new Lebensmittel("Weiße Bohnen", 0, 3)
let art65 = new Lebensmittel("Mandarinen", 0, 2)
let art66 = new Lebensmittel("Apfelmuss", 0, 2)
let art67 = new Lebensmittel("Schwarzwurzel", 0, 3)
let art68 = new Lebensmittel("Spargel", 0, 5)
let art69 = new Lebensmittel("Grühnkohl", 0, 1)
let art70 = new Lebensmittel("Frühstücksfleisch", 0, 1)
let art71 = new Lebensmittel("Birnen", 0, 2)
let art72 = new Lebensmittel("Aprikosen", 0, 4)
let art73 = new Lebensmittel("Thunfisch", 0, 6)
let art74 = new Lebensmittel("Champignons", 0, 7)
let art75 = new Lebensmittel("Gurken ganz", 0, 2)
let art76 = new Lebensmittel("Pickels", 0, 2)
let art77 = new Lebensmittel("Gurcken geschnitten", 0, 3)
let art78 = new Lebensmittel("Salz", 0, 2)
let art79 = new Lebensmittel("Meersalz", 0, 1)
let art80 = new Lebensmittel("Pfeffer Weiß", 0, 1)
let art81 = new Lebensmittel("Pfeffer Schwarz", 0, 1)
let art82 = new Lebensmittel("Pfeffer Bunt", 0, 1)
let art83 = new Lebensmittel("Paprika edelsüß", 0, 1)
let art84 = new Lebensmittel("Paprika rosenscharf", 0, 1)
let art85 = new Lebensmittel("Muskatnuss", 0, 1)
let art86 = new Lebensmittel("Cumin", 0, 1)
let art87 = new Lebensmittel("Thymian", 0, 1)
let art88 = new Lebensmittel("Oregano", 0, 1)
let art89 = new Lebensmittel("Basilicum", 0, 1)
let art90 = new Lebensmittel("Saucenbinder Dunkel", 0, 1)
let art91 = new Lebensmittel("Saucenbinder Hell", 0, 1)
let art92 = new Lebensmittel("Saucenbinder Creme", 0, 1)
let art93 = new Lebensmittel("Hollandaise", 0, 4)
let art94 = new Lebensmittel("Butter", 0, 2)
let art95 = new Lebensmittel("Zitronensaft", 0, 2)
let art96 = new Lebensmittel("Essigessenz", 0, 2)
let art97 = new Lebensmittel("Tafelessig", 0, 1)
let art98 = new Lebensmittel("Apfelessig", 0, 1)
let art99 = new Lebensmittel("Vanillepudding", 0, 2)
let art100 = new Lebensmittel("Schokopudding", 0, 1)


let milchproduktListe = new Lebensmittelliste("Milchprodukte")
let milchArray = [art8, art9, art10, art43, art44, art45]
milchproduktListe.artikelsHinzufuegen(milchArray)

let saeurenListe = new Lebensmittelliste("Essig & co")
let saeurenArray = [art95, art96, art97, art98]
saeurenListe.artikelsHinzufuegen(saeurenArray)


let saucenliste = new Lebensmittelliste("Saucen & Dips")
let saucenArray = [art35, art36, art37, art38, art39, art40, art41, art42]
saucenliste.artikelsHinzufuegen(saucenArray)

let condimentListe = new Lebensmittelliste("Andere")
let condimentArray = [art46, art47, art50, art51, art52, art56]
condimentListe.artikelsHinzufuegen(condimentArray)

let aufstrichListe = new Lebensmittelliste("Aufstrich")
let aufstrichArray = [art48, art49]
aufstrichListe.artikelsHinzufuegen(aufstrichArray)

let brotListe = new Lebensmittelliste("Brot")
brotListe.artikelHinzufuegen(art4)
brotListe.artikelHinzufuegen(art5)
brotListe.artikelHinzufuegen(art6)

let fleischListe = new Lebensmittelliste("Fleisch")
let fleischArray = [art18, art19, art20, art21]
fleischListe.artikelsHinzufuegen(fleischArray)


let getraenkeListe = new Lebensmittelliste("Getränke")
let getraenkeArray = [art7, art11, art16, art53, art54, art55, art57, art58, art59, art60]
getraenkeListe.artikelsHinzufuegen(getraenkeArray)

let fruechteListe = new Lebensmittelliste("Früchte")
fruechteListe.artikelHinzufuegen(art3)

let gemueseListe = new Lebensmittelliste("Gemüse")
let gemueseArray = [art17, art22, art23, art24, art25, art26, art32, art33, art34]
gemueseListe.artikelsHinzufuegen(gemueseArray)

let getreideListe = new Lebensmittelliste("Getreide")
let getreideArray = [art1, art2, art27, art28, art29, art30, art31]
getreideListe.artikelsHinzufuegen(getreideArray)


let fettListe = new Lebensmittelliste("Fette und Öle")
let fettArray = [art12, art13, art14, art15, art94]
fettListe.artikelsHinzufuegen(fettArray)

let konservenListe = new Lebensmittelliste("Konserven")
let konservenArray = [art62, art63, art64, art65, art65, art66, art67, art68, art69, art70, art71, art72, art73, art74, art75, art76, art77]
konservenListe.artikelsHinzufuegen(konservenArray)

let gewuerzeListe = new Lebensmittelliste("Gewürze")
let gewuerzeArray = [art78, art79, art80, art81, art82, art83, art84, art85, art86, art87, art88, art89]
gewuerzeListe.artikelsHinzufuegen(gewuerzeArray)


let kochundbackListe = new Lebensmittelliste("Koch & Backhelfer")
let kochundbackArray = [art90, art91, art92, art93, art99, art100]
kochundbackListe.artikelsHinzufuegen(kochundbackArray)


let gruppenArray = [milchproduktListe, brotListe, getreideListe, getraenkeListe, fettListe, fruechteListe, saucenliste,
    fleischListe, aufstrichListe, condimentListe, konservenListe, gewuerzeListe, kochundbackListe, saeurenListe]


//console.debug(gruppenArray)
for (let gruppe of gruppenArray) {
    console.debug("\n" + gruppe.artikel + ":\n")

    for (let artikel of gruppe.liste) {
        console.debug(artikel.art + " ,MHD: " + artikel.MHD + " ,Anzahl: " + artikel.anzahl)

    }

}

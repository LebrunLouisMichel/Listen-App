class Filmliste {
    liste = []

    constructor(titel) {
        this.titel = titel
    }

    filmHinzufuegen(film) {
        this.liste.push(film)
        console.debug(film.titel,"wurde erfolgrreich hinzugefügt")
    }

    filmeHinzufuegen(filme) {

        for (let film of filme) {
            this.liste.push(film)
        }

        for (let i = 0; i < filme.length; i++) {
            this.liste.push(filme[i])

        }

    }

    sortieren() {
        this.liste.sort()
    }
}

class Film {
    constructor(titel, spieldauer, genre, erscheinung, fsk, specialEdition) {
        this.titel = titel
        this.spieldauer = spieldauer
        this.genre = genre
        this.erscheinung = erscheinung
        this.fsk = fsk
        this.specialEdition = specialEdition

    }

}

let film1 = new Film("Avatar", 162, "Sci-Fi", 2009, 12, true)
let film2 = new Film("Dune", 155, "Sci-Fi", 2001, 12, false)
let film3 = new Film("Enemy at the Gates", 130, "Drama", 2001, 16, false)
let film4 = new Film("Iron Man", 126, "Action", 2008, 12, true)

let sciFiListe = new Filmliste("Science-Fiction")
let sciFiArray = [film1, film2]
sciFiListe.filmeHinzufuegen(sciFiArray)

let dramaListe = new Filmliste("Drama")
dramaListe.filmHinzufuegen(film3)

let actionListe = new Filmliste("Action")
actionListe.filmHinzufuegen(film4)


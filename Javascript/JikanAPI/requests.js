const base_URL = "https://api.jikan.moe/v4";

const requests = {
    getSearch(event) {
        event.PreventDefault;

        const $type = document.querySelector('#header__select').value;
        const $name = document.querySelector('#header__input').value;

        fetch(`${base_URL}/${$type}?q=${$name}`)
        .then(res => res.json())
        .then(data => update.setSearch(data))
        .catch(err => console.warn(err.message))
    },

    getRandomAnime() {
        fetch(`${base_URL}/random/anime`)
        .then(res => res.json())
        .then(data => update.setRandomAnime(data))
        .catch(err => console.warn(err.message))
    },

    getTopAnime() {
        fetch(`${base_URL}/top/anime`)
        .then(res => res.json())
        .then(data => update.setTopAnime(data))
        .catch(err => console.warn(err.message))
    },

    getAtualSeason() {
        fetch(`${base_URL}/seasons/now`)
        .then(res => res.json())
        .then(data => update.setAtualSeason(data))
        .catch(err => console.warn(err.message))
    },

    getNextSeason() {
        fetch(`${base_URL}/seasons/upcoming`)
        .then(res => res.json())
        .then(data => update.setNextSeason(data))
        .catch(err => console.warn(err.message))
    },

    getTopManga() {
        fetch(`${base_URL}/top/manga`)
        .then(res => res.json())
        .then(data => update.setTopManga(data))
        .catch(err => console.warn(err.message))
    },

    getAnimeById(id) {
        fetch(`${base_URL}/anime/${id}`)
        .then(res => res.json())
        .then(data => update.setAnimeById(data))
        .catch(err => console.warn(err.message))
    },

    getAnimePerson(id) {
        fetch(`${base_URL}/anime/${id}/characters`)
        .then(res => res.json())
        .then(data => update.setAnimePerson(data))
        .catch(err => console.warn(err.message))
    },

    getAnimeStaff(id) {
        fetch(`${base_URL}/anime/${id}/staff`)
        .then(res => res.json())
        .then(data => update.setAnimeStaff(data))
        .catch(err => console.warn(err.message))
    },

    getAnimeRecommendations(id) {
        fetch(`${base_URL}/anime/${id}/recommendations`)
        .then(res => res.json())
        .then(data => update.setItemRecommendations(data))
        .catch(err => console.warn(err.message))
    },

    getMangaById(id) {
        fetch(`${base_URL}/manga/${id}`)
        .then(res => res.json())
        .then(data => update.setMangaById(data))
        .catch(err => console.warn(err.message))
    },
    
    getMangaPictures(id) {
        fetch(`${base_URL}/manga/${id}/pictures`)
        .then(res => res.json())
        .then(data => update.setMangaPictures(data))
        .catch(err => console.warn(err.message))
    },

    getMangaPerson(id) {
        fetch(`${base_URL}/manga/${id}/characters`)
        .then(res => res.json())
        .then(data => update.setMangaPerson(data))
        .catch(err => console.warn(err.message))
    },

    getMangaRecommendations(id) {
        fetch(`${base_URL}/manga/${id}/recommendations`)
        .then(res => res.json())
        .then(data => update.setItemRecommendations(data))
        .catch(err => console.warn(err.message))
    }
}
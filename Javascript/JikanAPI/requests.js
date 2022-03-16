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
    }
}
const base_URL = "https://api.jikan.moe/v4"

const request = {
    getSearch() {
        
        const $type = document.querySelector('#header__select').value;
        const $name = document.querySelector('#header__search').value;

        fetch(`${base_URL}/${$type}?q=${$name}`)
        .then(res => res.json())
        .then(data => update.setSearch(data))
        .catch(err => console.warn(err.message))
    },

    getAnimeRandom() {
        fetch(`${base_URL}/random/anime`)
        .then(res => res.json())
        .then(data => update.setAnimeRandom(data))
        .catch(err => console.warn(err.message))
    },

    getAnimeByID(index) {
        fetch(`${base_URL}/anime/${index}`)
        .then(res => res.json())
        .then(data => update.setAnimeByID(data))
        .catch(err => console.warn(err.message))
    },

    getMangaByID(index) {
        fetch(`${base_URL}/manga/${index}`)
        .then(res => res.json())
        .then(data => update.setMangaByID(data))
        .catch(err => console.warn(err.message))
    },

    getStaff(index) {
        fetch(`${base_URL}/anime/${index}/staff`)
        .then(res => res.json())
        .then(data => update.setStaff(data))
        .catch(err => console.warn(err.message))
    },

    getCharacter(type, index) {
        fetch(`${base_URL}/${type}/${index}/characters`)
        .then(res => res.json())
        .then(data => update.setCharacters(data))
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

    getTopAnime() {
        fetch(`${base_URL}/top/anime`)
        .then(res => res.json())
        .then(data => update.setTopAnime(data))
        .catch(err => console.warn(err.message))
    },

    getTopManga() {
        fetch(`${base_URL}/top/manga`)
        .then(res => res.json())
        .then(data => update.setTopManga(data))
        .catch(err => console.warn(err.message))
    },

    getRecommendations(type, index) {
        fetch(`${base_URL}/${type}/${index}/recommendations`)
        .then(res => res.json())
        .then(data => update.setRecommendations(data, type))
        .catch(err => console.warn(err.message))
    } 

}
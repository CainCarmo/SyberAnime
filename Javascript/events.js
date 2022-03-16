/* --- Scroll --- */

const $fixHeader = document.querySelector('#header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        document.querySelector('#header').classList.add('fixed')
        document.querySelector('#header__menu').classList.add('reduce')
    }
    else {
        document.querySelector('#header').classList.remove('fixed')
        document.querySelector('#header__menu').classList.remove('reduce')
    }
})

/* --- Click --- */

const $searchIcon = document.querySelector('.fa-search')

$searchIcon.addEventListener('click', () => {
    const $searchBox = document.querySelector('#header__search--minimized.show')

    if(!$searchBox) {
        document.querySelector('#header__search--minimized').classList.add('show')
    }
    else {
        document.querySelector('#header__search--minimized').classList.remove('show')
    }
})

const $emptyInput = document.querySelector('.fa-times')

$emptyInput.addEventListener('click', () => {
    const $input = document.querySelector('#header__input')
    $input.value = '';

    document.querySelector('#header__times--hidden').classList.remove('visible')
    document.querySelector('#header__results--hidden').classList.remove('show')
})

/* --- Input --- */

const $searchInput = document.querySelector('#header__input')

$searchInput.addEventListener('input', () => {
    let inputLength = $searchInput.value.length

    if(inputLength > 0) {
        document.querySelector('#header__times--hidden').classList.add('visible')
        document.querySelector('#header__results--hidden').classList.add('show')
    }
    else {
        document.querySelector('#header__times--hidden').classList.remove('visible')
        document.querySelector('#header__results--hidden').classList.remove('show')
    }
})

const $divInput = document.querySelector('#header__input')

$divInput.addEventListener('input', () => {
    requests.getSearch(event);
})
/* --- Scroll --- */

const $header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        $header.classList.add('fixed')
        document.querySelector('#header__logobar').classList.add('reduce')

    } else {
        $header.classList.remove('fixed')
        document.querySelector('#header__logobar').classList.remove('reduce')
    }
})

/* --- Click --- */

const $searchIcon = document.querySelector('.fa-search')

$searchIcon.addEventListener('click', () => {
    const $searchBar = document.querySelector('#header__searchbar--minimized.maximized')

    if(!$searchBar) {
        document.querySelector('#header__searchbar--minimized').classList.add('maximized')

    } else {
        document.querySelector('#header__searchbar--minimized').classList.remove('maximized')
    }
})

const $headerBtn = document.querySelector('#header__login-button')

$headerBtn.addEventListener('click', () => {
    document.querySelector('#login--hidden').classList.add('show')
    document.querySelector('#login').classList.add('show')
})

const $userIcon = document.querySelector('#header__user--hidden')

$userIcon.addEventListener('click', () => {
    if(document.querySelector('#header__menu').className === "maximized")
        document.querySelector('#header__menu').classList.remove('maximized')
    else
        document.querySelector('#header__menu').classList.add('maximized')
})

const $loginTimes = document.querySelector('#login__times')

$loginTimes.addEventListener('click', () => {
    document.querySelector('#login--hidden').classList.remove('show')
    document.querySelector('#login').classList.remove('show')
})

const $inputTimes = document.querySelector('#input__times')

$inputTimes.addEventListener('click', () => {
    document.querySelector('#header__search').value = ''

    document.querySelector('#header__times--hidden').classList.remove('show')
    document.querySelector('#header__results--hidden').classList.remove('maximized')
})

/* --- Input --- */

const $searchInput = document.querySelector('#header__search')

$searchInput.addEventListener('input', () => {
    let $searchLength = $searchInput.value.length
    
    if ($searchLength > 0) {
        document.querySelector('#header__times--hidden').classList.add('show')
        document.querySelector('#header__results--hidden').classList.add('maximized')

    } else {
        document.querySelector('#header__times--hidden').classList.remove('show')
        document.querySelector('#header__results--hidden').classList.remove('maximized')
    }
})

$searchInput.addEventListener('input', () => {
    request.getSearch();
})
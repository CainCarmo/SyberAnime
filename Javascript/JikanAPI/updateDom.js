const update = {
    setSearch(data) {
        const $divSearchResults = document.querySelector('#header__results--hidden')

        $divSearchResults.innerHTML = data.data.map((item) => {
            return `
                <div class="header__card">

                    <img src="${item.images.webp.large_image_url}" alt="">

                    <div class="header__card-info">

                        <div class="section__ranking-name">

                            <h3 class="section__ranking-title">
                                <a href="#">${item.title}</a>
                            </h3>

                        </div>

                        <div class="section__ranking-extra">

                            <span class="section__ranking-text">${item.type} (${item.episodes} episódios)</span>
                            
                            <span class="section__ranking-text">${item.duration}</span>
                            
                            <span class="section__ranking-text">${item.year}</span>

                        </div>

                    </div>

                </div>
            `
        }).join("");
    },

    setRandomAnime(data) {
        const $divBanner = document.querySelector('#banner')

       $divBanner.innerHTML = `
            <video id="banner__video" src="./Movies/mylivewallpapers.com-Nier-Automata-Team.mp4" autoplay muted loop></video>
                    
            <div id="banner__info">
            
                <h1 id="banner__title">${data.data.title}</h1>
                
                <p id="banner__description">
                    ${data.data.synopsis}
                </p>

                <button id="banner__btn" type="button">Saiba Mais</button>
            
            </div>
            
            <div id="banner__card">
            
                <img id="banner__card-img" src="${data.data.images.webp.large_image_url}" alt="Banner-image-card">
            
            </div>
        `;

        VanillaTilt.init(document.querySelector('#banner__card-img'), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });
    },

    setTopAnime(data) {
        const $divTopAnime = document.querySelector('#anime__top')

        $divTopAnime.innerHTML = data.data.slice(0,5).map((anime) => {
            return `
            <div class="section__ranking-item" id="anime__ranking-item">

                <div class="section__ranking-rank" id="anime__ranking-rank">

                    <span class="section__ranking-index">
                        ${anime.rank}
                    </span>

                </div>

                <div class="section__ranking-description" id="anime__ranking-description">

                    <img src="${anime.images.webp.large_image_url}" alt="Ranking-image-card">

                    <div class="section__ranking-info">

                        <div class="section__ranking-name">

                            <h3 class="section__ranking-title">
                                <a href="#">${anime.title}</a>
                            </h3>

                        </div>

                        <div class="section__ranking-extra">


                            <span class="section__ranking-text">${anime.type} (${anime.episodes} episódios)</span>
                            
                            <span class="section__ranking-text">${anime.duration}</span>
                            
                            <span class="section__ranking-text">${anime.year}</span>

                        </div>

                    </div>

                </div>

                <div class="section__ranking-score" id="anime__ranking-score">

                    <i class="fas fa-star"></i>

                    <span class="section__ranking-avaliation">
                        ${anime.score}
                    </span>

                </div>

            </div>
            `

        }).join("");
    },

    setAtualSeason(data) {
        const $divSliderAS = document.querySelector('#anime__slider--AS')

        $divSliderAS.innerHTML = data.data.map((anime) => {
            return `
                <div class="section__slider-card">

                    <img src="${anime.images.webp.image_url}" alt="Slider-image-card">

                    <div class="section__slider-info">

                        <h3 class="section__slider-title">
                            ${anime.title}
                        </h3>

                        <button type="button" class="section__slider-button">
                            Veja Mais
                        </button>

                        <span class="section__slider-extra">
                            ${anime.type}<br>${anime.year}
                        </span>

                    </div>

                </div>
            `
        }).join("");

        new Glider($divSliderAS, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: '#dots__AS',
            draggable: true,
            arrows: {
                prev: '#section__arrows-left--AS',
                next: '#section__arrows-right--AS'
            }
        });
        
    },

    setNextSeason(data) {
        const $divSliderNS = document.querySelector('#anime__slider--NS')

        $divSliderNS.innerHTML = data.data.map((anime) => {
            return `
                <div class="section__slider-card">

                    <img src="${anime.images.webp.image_url}" alt="Slider-image-card">

                    <div class="section__slider-info">

                        <h3 class="section__slider-title">
                            ${anime.title}
                        </h3>

                        <button type="button" class="section__slider-button">
                            Veja Mais
                        </button>

                        <span class="section__slider-extra">
                            ${anime.type}<br>${anime.year}
                        </span>

                    </div>

                </div>
            `
        }).join("");

        new Glider($divSliderNS, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: '#dots__NS',
            draggable: true,
            arrows: {
                prev: '#section__arrows-left--NS',
                next: '#section__arrows-right--NS'
            }
        });
    },

    setTopManga(data) {
        const $divTopManga = document.querySelector('#manga__top')

        $divTopManga.innerHTML = data.data.slice(0, 5).map((manga) => {
            return `
                <div class="section__ranking-item" id="manga__ranking-item">
                    
                    <div class="section__ranking-rank" id="manga__ranking-rank">
            
                        <span class="section__ranking-index">
                            ${manga.rank}
                        </span>
            
                    </div>
            
                    <div class="section__ranking-description" id="manga__ranking-description">
            
                        <img src="${manga.images.webp.large_image_url}" alt="Ranking-image-card">
            
                        <div class="section__ranking-info">
            
                            <div class="section__ranking-name">
            
                                <h3 class="section__ranking-title">
                                    <a href="#">${manga.title}</a>
                                </h3>
            
                            </div>
            
                            <div class="section__ranking-extra">
            
            
                                <span class="section__ranking-text">${manga.type} (${manga.chapters} capítulos)</span>
                                
                                <span class="section__ranking-text">${manga.volumes} volumes</span>
                                
                                <span class="section__ranking-text">${manga.published.prop.from.year}</span>
            
                            </div>
            
                        </div>
            
                    </div>
            
                    <div class="section__ranking-score" id="manga__ranking-score">
            
                        <i class="fas fa-star"></i>
            
                        <span class="section__ranking-avaliation">
                            ${manga.scored}
                        </span>
            
                    </div>
        
                </div>
            `
        }).join("")
    }
}
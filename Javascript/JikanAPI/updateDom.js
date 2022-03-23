const update = {
    setSearch(data) {
        const $divSearchResults = document.querySelector('#header__results--hidden')
        const $itemType = document.querySelector('#header__select').value;

        $divSearchResults.innerHTML = data.data.map((item) => {
            return `
                <div class="header__card">

                    <img src="${item.images.webp.large_image_url}" alt="">

                    <div class="header__card-info">

                        <div class="section__ranking-name">

                            <h3 class="section__ranking-title">
                                <a href="details.html?=${item.mal_id}&type=${$itemType}">${item.title}</a>
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

                <button id="banner__btn" type="button">
                    <a href="details.html?=${data.data.mal_id}">Saiba Mais</a>
                </button>
            
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
                                    <a href="details.html?=${anime.mal_id}">${anime.title}</a>
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
                            <a href="details.html?=${anime.mal_id}">Saiba Mais</a>
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
                            <a href="details.html?=${anime.mal_id}">Saiba Mais</a>
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
                                    <a href="details.html?=${manga.mal_id}&type=manga">${manga.title}</a>
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
        }).join("");
    },

    setAnimeById(data) {
        const $title = document.querySelector('#details')
        const $divBanner = document.querySelector('#banner')
        const $divTrailer = document.querySelector('#trailer__video--wrapper')
        
        $title.innerHTML = `${data.data.title} | SyberAnime`;

        $divBanner.innerHTML = `
            <video id="banner__video" src="./Movies/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" autoplay muted loop></video>
                    
            <div id="banner__info">
            
                <h1 id="banner__title">${data.data.title}</h1>
                
                <p id="banner__description">
                    ${data.data.synopsis}
                </p>
                
                <div id="banner__genres">

                </div>
                
            </div>
            
            <div id="banner__card">
            
                <img id="banner__card-img" src="${data.data.images.webp.large_image_url}" alt="Banner-image-card">

                <div id="banner__status">

                    <div id="banner__score">

                        <i class="fas fa-star"></i>
            
                        <span id="banner__avaliation">
                            ${data.data.score}
                        </span>

                    </div>

                    <div id="banner__temp">

                        <span id="banner__aired">
                            ${data.data.season} ${data.data.year}
                        </span>

                    </div>
                    
                </div>
            
            </div>
        `;

        const $divBannerGenres = document.querySelector('#banner__genres')

        $divBannerGenres.innerHTML = data.data.genres.map((genre) => {
            return `
                <div id="banner__genre">        
                    <span>${genre.name}</span>
                </div>
            `
        }).join("");

        VanillaTilt.init(document.querySelector('#banner__card-img'), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });

        $divTrailer.innerHTML = `
            <iframe id="trailer__video" src="${data.data.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    },

    setAnimePerson(data) {
        const $divAnimePerson = document.querySelector('#persons__wrapper')

        $divAnimePerson.innerHTML = data.data.slice(0, 15).map((anime) => {
            if (anime.voice_actors[0] === undefined) {
                return `
                    <div class="box__item">
            
                        <div class="box__left">

                            <img src="${anime.character.images.webp.image_url}" alt="">

                            <div class="box__info" id="persons__person-info">

                                <span class="box__name">${anime.character.name}</span>

                                <span class="box__sub">${anime.role}</span>

                            </div>

                        </div>

                    </div>
                `
            } else {
                return `
                    <div class="box__item">
            
                        <div class="box__left">

                            <img src="${anime.character.images.webp.image_url}" alt="">

                            <div class="box__info" id="persons__person-info">

                                <span class="box__name">${anime.character.name}</span>

                                <span class="box__sub">${anime.role}</span>

                            </div>

                        </div>

                        <div class="box__right">

                            <div class="box__info" id="persons__seiyuu-info">

                                <span>${anime.voice_actors[0].person.name}</span>

                                <span>${anime.voice_actors[0].language}</span>

                            </div>

                            <img src="${anime.voice_actors[0].person.images.jpg.image_url}">

                        </div>

                    </div>
                `
            }
        }).join("");
    },

    setAnimeStaff(data) {
        const $divAnimeStaff = document.querySelector('#staff__wrapper')

        $divAnimeStaff.innerHTML = data.data.slice(0, 10).map((anime) => {
            return `
                <div class="box__item">
        
                    <div class="box__left">

                        <img src="${anime.person.images.jpg.image_url}" alt="">

                        <div class="box__info" id="staff__info">

                            <span class="box__name">${anime.person.name}</span>

                            <span class="box__sub">${anime.positions[0]}</span>

                        </div>

                    </div>

                </div>
            `
        }).join("");
    },
    
    setItemRecommendations(data) {
        const $sectionRecommendation = document.querySelector('#recommendations')
        const $divSliderRE = document.querySelector('#anime__slider--RE')
        
        if (data.data[0] === undefined) {
            $sectionRecommendation.innerHTML = null
        } else {
            $divSliderRE.innerHTML = data.data.map((item) => {
                return `
                    <div class="section__slider-card">

                        <img src="${item.entry.images.webp.image_url}" alt="Slider-image-card">

                        <div class="section__slider-info">

                            <h3 class="section__slider-title">
                                ${item.entry.title}
                            </h3>

                            <button type="button" class="section__slider-button">
                                <a href="details.html?=${item.entry.mal_id}">Saiba Mais</a>
                            </button>

                            <span class="section__slider-extra">
                                <span></span><br><span></span>
                            </span>

                        </div>

                    </div>
                `
            }).join("");

            if (data.data.length <= 5) {
                
                new Glider($divSliderRE, {
                    slidesToShow: data.data.length,
                    dots: '#dots__RE',
                    draggable: true,
                    arrows: {
                        prev: '#section__arrows-left--RE',
                        next: '#section__arrows-right--RE'
                    }
                });

            } else {

                new Glider($divSliderRE, {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    dots: '#dots__RE',
                    draggable: true,
                    arrows: {
                        prev: '#section__arrows-left--RE',
                        next: '#section__arrows-right--RE'
                    }
                });

            }
        }
    },

    setMangaById(data) {
        const $title = document.querySelector('#details')
        const $divBanner = document.querySelector('#banner')
        
        $title.innerHTML = `${data.data.title} | SyberAnime`;

        if(data.data.status === "Finished" || data.data.status === "On Hiatus") {
            $divBanner.innerHTML = `
                <video id="banner__video" src="./Movies/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" autoplay muted loop></video>
                        
                <div id="banner__info">
                
                    <h1 id="banner__title">${data.data.title}</h1>
                    
                    <p id="banner__description">
                        ${data.data.synopsis}
                    </p>
                    
                    <div id="banner__genres"></div>
                    
                </div>
                
                <div id="banner__card">
                
                    <img id="banner__card-img" src="${data.data.images.webp.large_image_url}" alt="Banner-image-card">

                    <div id="banner__status">

                        <div id="banner__score">

                            <i class="fas fa-star"></i>
                
                            <span id="banner__avaliation">
                                ${data.data.scored}
                            </span>

                        </div>

                        <div id="banner__temp">

                            <span id="banner__aired">
                                ${data.data.published.prop.from.year} - ${data.data.published.prop.to.year}
                            </span>

                        </div>
                        
                    </div>
                
                </div>
            `;
        } else {
            $divBanner.innerHTML = `
                <video id="banner__video" src="./Movies/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" autoplay muted loop></video>
                        
                <div id="banner__info">
                
                    <h1 id="banner__title">${data.data.title}</h1>
                    
                    <p id="banner__description">
                        ${data.data.synopsis}
                    </p>
                    
                    <div id="banner__genres"></div>
                    
                </div>
                
                <div id="banner__card">
                
                    <img id="banner__card-img" src="${data.data.images.webp.large_image_url}" alt="Banner-image-card">

                    <div id="banner__status">

                        <div id="banner__score">

                            <i class="fas fa-star"></i>
                
                            <span id="banner__avaliation">
                                ${data.data.scored}
                            </span>

                        </div>

                        <div id="banner__temp">

                            <span id="banner__aired">
                                ${data.data.published.prop.from.year}
                            </span>

                        </div>
                        
                    </div>
                
                </div>
            `;
        }

        const $divBannerGenres = document.querySelector('#banner__genres')

        $divBannerGenres.innerHTML = data.data.genres.map((genre) => {
            return `
                <div id="banner__genre">        
                    <span>${genre.name}</span>
                </div>
            `
        }).join("");

        VanillaTilt.init(document.querySelector('#banner__card-img'), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });
    }, 

    setMangaPictures(data) {
        const $divPictures = document.querySelector('#trailer')
        $divPictures.id = "pictures"

        $divPictures.innerHTML = `
            <header class="section__header">

                <h2 class="section__header-index">
                    <i class="fa-solid fa-image"></i> - Capas
                </h2>

                <div class="section__arrows">

                    <button type="button" class="section__arrow" id="section__arrows-left--PIC">
                        <i class="fa-solid fa-circle-chevron-left"></i>
                    </button>

                    <button type="button" class="section__arrow" id="section__arrows-right--PIC">
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </button>

                </div>

            </header>

            <div class="section__sliders">

                <!-- Filled by Script -->
                <div class="section__slider" id="manga__slider--PIC"></div>

            </div>

            <div role="tablist" class="dots" id="dots__PIC"></div>
        `;


        const $divSliderPIC = document.querySelector('#manga__slider--PIC')

        $divSliderPIC.innerHTML = data.data.map((pictures) => {
            return `
                <div class="section__slider-card">

                    <img src="${pictures.webp.large_image_url}" alt="Slider-image-card">

                </div>
            `
        }).join("");

        if (data.data.length <= 5) {
                
            new Glider($divSliderPIC, {
                slidesToShow: data.data.length,
                dots: '#dots__PIC',
                draggable: true,
                arrows: {
                    prev: '#section__arrows-left--PIC',
                    next: '#section__arrows-right--PIC'
                }
            });

        } else {

            new Glider($divSliderPIC, {
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: '#dots__PIC',
                draggable: true,
                arrows: {
                    prev: '#section__arrows-left--PIC',
                    next: '#section__arrows-right--PIC'
                }
            });

        }
    }, 

    setMangaPerson(data) {
        const $divMangaPerson = document.querySelector('#persons__wrapper')

        $divMangaPerson.innerHTML = data.data.slice(0, 15).map((manga) => {
            return `
                <div class="box__item">
        
                    <div class="box__left">

                        <img src="${manga.character.images.webp.image_url}" alt="">

                        <div class="box__info" id="persons__person-info">

                            <span class="box__name">${manga.character.name}</span>

                            <span class="box__sub">${manga.role}</span>

                        </div>

                    </div>

                </div>
            `
        }).join("");
    }
}
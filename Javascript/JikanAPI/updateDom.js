const update = {
    setSearch(data) {
        const $divSearchResults = document.querySelector('#header__results--hidden')
        let $itemType = document.querySelector('#header__select').value

        if ($itemType === "anime") {
            $divSearchResults.innerHTML = data.data.map((anime) => {
                return `
                    <div class="header__card">

                        <img src="${anime.images.webp.large_image_url}" alt="">

                        <div class="header__card-info">

                            <div class="section__ranking-name">

                                <h3 class="section__ranking-title">
                                    <a href="details.php?type=anime&id=${anime.mal_id}">${anime.title}</a>
                                </h3>

                            </div>

                            <div class="section__ranking-extra">
                                
                                <span class="section__ranking-text result-anime__episodes">${anime.type} (${anime.episodes} episódios)</span>
                                <span class="section__ranking-text result-anime__duration">${anime.duration}</span>
                                <span class="section__ranking-text result-anime__year">${anime.year}</span>

                            </div>

                        </div>

                    </div>
                `
            }).join('');
            
            const $animeChapters = document.querySelectorAll('.result-anime__chapters')
            $animeChapters.forEach((item, index) => {
                if (data.data[index].chapters === null)
                    item.innerHTML = manga.type
                
            })

            const $animeVolumes = document.querySelectorAll('.result-anime__volumes')
            $animeVolumes.forEach((item,  index) => {
                if (data.data[index].volumes === null)
                    item.innerHTML = null
            
            })

            const $animeYear = document.querySelectorAll('.result-anime__year')
            $animeYear.forEach((item) => {
                if (item.innerHTML === "null")
                    item.innerHTML = null
            })

        } else {
            $divSearchResults.innerHTML = data.data.map((manga) => {
                return `
                    <div class="header__card">

                        <img src="${manga.images.webp.large_image_url}" alt="">

                        <div class="header__card-info">

                            <div class="section__ranking-name">

                                <h3 class="section__ranking-title">
                                    <a href="details.php?type=anime&id=${manga.mal_id}>${manga.title}</a>
                                </h3>

                            </div>

                            <div class="section__ranking-extra">
                                <span class="section__ranking-text result-manga__chapters">${manga.type} (${manga.chapters} capítulos)</span>
                                <span class="section__ranking-text result-manga__volumes">${manga.volumes} volumes</span>
                                <span class="section__ranking-text result-manga__year">${manga.published.prop.from.year}</span>
                            </div>

                        </div>

                    </div>
                `
            }).join('');
            
            const $mangaChapters = document.querySelectorAll('.result-manga__chapters')
            $mangaChapters.forEach((item, index) => {
                if (data.data[index].chapters === null)
                    item.innerHTML = manga.type
                
            })

            const $mangaVolumes = document.querySelectorAll('.result-manga__volumes')
            $mangaVolumes.forEach((item,  index) => {
                if (data.data[index].volumes === null)
                    item.innerHTML = null
            
            })

            const $mangaYear = document.querySelectorAll('.result-manga__year')
            $mangaYear.forEach((item) => {
                if (item.innerHTML === "null")
                    item.innerHTML = null
            })

        }

    },

    setAnimeRandom(data) {
        const $divBanner = document.querySelector('#banner')
        $divBanner.innerHTML = `
            <video id="banner__video" src="/Assets/movies/mylivewallpapers.com-Nier-Automata-Team.mp4" autoplay muted loop></video>
                            
            <div id="banner__info">
            
                <h1 id="banner__title">${data.data.title}</h1>
                
                <p id="banner__description">${data.data.synopsis}</p>

                <button id="banner__btn" type="button">
                    <a href="details.php?type=anime&id=${data.data.mal_id}">Saiba Mais</a>
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

        const $bannerDecription = document.querySelector('#banner__description')
        if ($bannerDecription.innerHTML === "null")
            $bannerDecription.innerHTML = null

    },

    setTopAnime(data) {
        const $divTopAnime = document.querySelector('#anime__top')
        $divTopAnime.innerHTML = data.data.slice(0, 5).map((anime) => {
            return `
                <div class="section__ranking-item" id="anime__ranking-item">

                    <div class="section__ranking-rank" id="anime__ranking-rank">
                        <span class="section__ranking-index">${anime.rank}</span>
                    </div>

                    <div class="section__ranking-description" id="anime__ranking-description">

                        <img src="${anime.images.webp.large_image_url}" alt="Ranking-image-card">

                        <div class="section__ranking-info">

                            <div class="section__ranking-name">

                                <h3 class="section__ranking-title">
                                    <a href="details.php?type=anime&id=${anime.mal_id}">${anime.title}</a>
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
                        <span class="section__ranking-avaliation">${anime.score}</span>
                    </div>

                </div>
            `
        }).join('');

    },

    setAtualSeason(data) {
        const $divSliderAS = document.querySelector('#anime__slider--AS')
        $divSliderAS.innerHTML = data.data.map((anime) => {
            return `
                <div class="section__slider-card">

                    <img src="${anime.images.webp.large_image_url}" alt="Slider-image-card">

                    <div class="section__slider-info">

                        <h3 class="section__slider-title">${anime.title}</h3>

                        <button type="button" class="section__slider-button">
                            <a href="details.php?type=anime&id=${anime.mal_id}">Saiba Mais</a>
                        </button>

                        <span class="section__slider-extra">${anime.type}<br>${anime.year}</span>

                    </div>

                </div>
            `
        }).join('');

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

                    <img src="${anime.images.webp.large_image_url}" alt="Slider-image-card">

                    <div class="section__slider-info">

                        <h3 class="section__slider-title">${anime.title}</h3>

                        <button type="button" class="section__slider-button">
                            <a href="details.php?type=anime&id=${anime.mal_id}">Saiba Mais</a>
                        </button>

                        <span class="section__slider-extra slider__year">${anime.type}<br>${anime.year}</span>

                    </div>

                </div>
            `
        }).join('');

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

        const $sliderYear = document.querySelectorAll('.slider__year')
        $sliderYear.forEach((item, index) => {
            if (data.data[index].year === null)
                item.innerHTML = data.data[index].type
        })

    },

    setTopManga(data) {
        const $divTopManga = document.querySelector('#manga__top')
        $divTopManga.innerHTML = data.data.slice(0, 5).map((manga) => {
            return `
                <div class="section__ranking-item" id="manga__ranking-item">
                        
                    <div class="section__ranking-rank" id="manga__ranking-rank">
                        <span class="section__ranking-index">${manga.rank}</span>
                    </div>
            
                    <div class="section__ranking-description" id="manga__ranking-description">
            
                        <img src="${manga.images.webp.large_image_url}" alt="Ranking-image-card">
            
                        <div class="section__ranking-info">
            
                            <div class="section__ranking-name">
            
                                <h3 class="section__ranking-title">
                                    <a href="details.php?type=manga&id=${manga.mal_id}">${manga.title}</a>
                                </h3>
            
                            </div>
            
                            <div class="section__ranking-extra">
                                <span class="section__ranking-text top-manga__chapters">${manga.type} (${manga.chapters} capítulos)</span>
                                <span class="section__ranking-text top-manga__volumes">${manga.volumes} volumes</span>
                                <span class="section__ranking-text top-manga__year">${manga.published.prop.from.year}</span>
                            </div>
            
                        </div>
            
                    </div>
            
                    <div class="section__ranking-score" id="manga__ranking-score">
                        <i class="fas fa-star"></i>
                        <span class="section__ranking-avaliation">${manga.scored}</span>
                    </div>

                </div>
            `
        }).join('');

        const $topMangaChap = document.querySelectorAll('.top-manga__chapters')
        $topMangaChap.forEach((item, index) => {
            if (data.data[index].chapters === null)
                item.innerHTML = data.data[index].type
        })

        const $topMangaVol = document.querySelectorAll('.top-manga__volumes')
        $topMangaVol.forEach((item, index) => {
            if (data.data[index].volumes === null)
                item.innerHTML = null
        })

    },

    setAnimeByID(data) {
        document.querySelector('title').innerHTML = `${data.data.title} | SyberAnime`

        const $divBanner = document.querySelector('#banner')
        const $sectionTrailer = document.querySelector('#trailer')
        const $divTrailer = document.querySelector('#trailer__video--wrapper')
        $divBanner.innerHTML = `
            <video id="banner__video" src="/Assets/movies/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" autoplay muted loop></video>
                        
            <div id="banner__info">
            
                <h1 id="banner__title">${data.data.title}</h1>
                <p id="banner__description">${data.data.synopsis}</p>
                
                <div id="banner__genres"></div>
                
            </div>
            
            <div id="banner__card">
            
                <img id="banner__card-img" src="${data.data.images.webp.large_image_url}" alt="Banner-image-card">

                <div id="banner__status">

                    <div id="banner__score">

                        <i class="fas fa-star"></i>
            
                        <span id="banner__avaliation">${data.data.score}</span>

                    </div>

                    <div id="banner__temp">
                        <span id="banner__aired">${data.data.season} ${data.data.year}</span>
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
        }).join('');

        VanillaTilt.init(document.querySelector('#banner__card-img'), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });

        if (data.data.trailer.embed_url === null) {
            $sectionTrailer.innerHTML = null
        } else {
            $divTrailer.innerHTML = `
                <iframe id="trailer__video" src="${data.data.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        }

    },

    setMangaByID(data) {
        document.querySelector('title').innerHTML = `${data.data.title} | SyberAnime`

        const $divBanner = document.querySelector('#banner')
        $divBanner.innerHTML = `
            <video id="banner__video" src="/Assets/movies/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" autoplay muted loop></video>
                    
            <div id="banner__info">
            
                <h1 id="banner__title">${data.data.title}</h1>
                <p id="banner__description">${data.data.synopsis}</p>
                
                <div id="banner__genres"></div>
                
            </div>
            
            <div id="banner__card">
            
                <img id="banner__card-img" src="${data.data.images.webp.large_image_url}" alt="Banner-image-card">

                <div id="banner__status">

                    <div id="banner__score">

                        <i class="fas fa-star"></i>
            
                        <span id="banner__avaliation">${data.data.scored}</span>

                    </div>

                    <div id="banner__temp">
                        <span id="banner__aired">${data.data.published.prop.from.year} - ${data.data.published.prop.to.year}</span>
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
        }).join('');

        VanillaTilt.init(document.querySelector('#banner__card-img'), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });
    },

    setCharacters(data) {
        const $divCharacters = document.querySelector('#characters--wrapper')
        $divCharacters.innerHTML = data.data.slice(0, 15).map((characters) => {
            return `
                <div class="box__item">
        
                    <div class="box__left">

                        <img src="${characters.character.images.webp.image_url}" alt="">

                        <div class="box__info" id="persons__person-info">
                            <span class="box__name">${characters.character.name}</span>
                            <span class="box__sub">${characters.role}</span>
                        </div>

                    </div>

                    <div class="box__right"></div>

                </div>
            `
        }).join('');

        const $divBoxDub = document.querySelectorAll('.box__right')
        $divBoxDub.forEach((item, index) => {
            if (data.data[index].voice_actors[0] !== null) {
                item.innerHTML = `
                <div class="box__info" id="persons__seiyuu-info">
                    <span>${data.data[index].voice_actors[0].person.name}</span>
                    <span>${data.data[index].voice_actors[0].language}</span>
                </div>

                <img src="${data.data[index].voice_actors[0].person.images.jpg.image_url}">
            `
            }
            if (data.data[index].voice_actors[0] === null)
                item.innerHTML = null
        })
    },

    setStaff(data) {
        const $sectionStaff = document.querySelector('#staff')
        const $divStaff = document.querySelector('#staff--wrapper')
        $divStaff.innerHTML = data.data.slice(0, 15).map((staff) => {
            return `
                <div class="box__item">
        
                    <div class="box__left">

                        <img src="${staff.person.images.jpg.image_url}" alt="">

                        <div class="box__info" id="staffs__staff-info">
                            <span class="box__name">${staff.person.name}</span>
                            <span class="box__sub staff__positions"></span>
                        </div>

                    </div>

                </div>
            `
        }).join('');

        const $staffPositions = document.querySelectorAll('.staff__positions')
        $staffPositions.forEach((item, index) => {
            if (data.data[0].positions === null)
                $sectionStaff.innerHTML = null
            
            if (data.data[0].positions !== null) {
                if (data.data[index].positions[1] === undefined)
                    item.innerHTML = data.data[index].positions[0] 
                if (data.data[index].positions[1] !== undefined)
                    item.innerHTML = `${data.data[index].positions[0]}, <br> ${data.data[index].positions[1]}`
            }
        })
    },

    setRecommendations(data, type) {
        const $sectionRecommendations = document.querySelector('#recommendations')
        const $divSliderRE = document.querySelector('#anime__slider--RE')

        if (data.data[0] === undefined)
            $sectionRecommendations.innerHTML = null
        else {
            $divSliderRE.innerHTML = data.data.map((anime) => {
                return `
                    <div class="section__slider-card">
    
                        <img src="${anime.entry.images.webp.image_url}" alt="Slider-image-card">
    
                        <div class="section__slider-info">
    
                            <h3 class="section__slider-title">${anime.entry.title}</h3>
    
                            <button type="button" class="section__slider-button">
                                <a href="details.php?type=${type}&id=${anime.entry.mal_id}">Saiba Mais</a>
                            </button>
    
                            <span class="section__slider-extra"><br></span>
    
                        </div>
    
                    </div>
                `
            }).join('');
        }

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
}
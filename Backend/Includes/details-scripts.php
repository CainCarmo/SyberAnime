        <link rel="stylesheet" href="./CSS/details.css">
        <script src="/Javascript/events.js"></script>
        <script src="/Javascript/JikanAPI/requests.js"></script>
        <script src="/Javascript/JikanAPI/updateDom.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
        <script type="text/javascript" src="/Javascript/Vanilla-Tilt/vanilla-tilt.js"></script>

        <script>
            
            const urlParam = {
                itemType: window.location.href.split('/')[3].split('=')[1].split('&')[0],
                itemID: window.location.href.split('/')[3].split('=')[2]
            }

            window.addEventListener('load', async() => {
                if (urlParam.itemType === "anime") {
                    await request.getAnimeByID(urlParam.itemID)
                    await request.getCharacter(urlParam.itemType, urlParam.itemID)
                    await request.getStaff(urlParam.itemID)

                    setTimeout(async() => {
                        await request.getRecommendations(urlParam.itemType, urlParam.itemID)
                    }, 2500)
                }

                if(urlParam.itemType === "manga") {
                    const $divTrailer = document.querySelector('#trailer')
                    $divTrailer.innerHTML = null
                    const $headerCharacters = document.querySelector('#section__header-character')
                    $headerCharacters.innerHTML = '<i class="fa-solid fa-person"></i> - Personagens'
                    const $divStaff = document.querySelector('#staff')
                    $divStaff.innerHTML = null

                    await request.getMangaByID(urlParam.itemID)
                    await request.getCharacter(urlParam.itemType, urlParam.itemID)
                    
                    setTimeout(async() => {
                        await request.getRecommendations(urlParam.itemType, urlParam.itemID)
                    }, 2500)
                }
            })

        </script>

    </body>
</html>
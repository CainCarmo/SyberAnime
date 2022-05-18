        <script src="./Javascript/events.js"></script>
        <script src="./Javascript/JikanAPI/requests.js"></script>
        <script src="./Javascript/JikanAPI/updateDOM.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
        <script type="text/javascript" src="/Javascript/Vanilla-Tilt/vanilla-tilt.js"></script>

        <script>

            window.addEventListener('load', async() => {
                await request.getAnimeRandom();
                await request.getTopAnime();
                await request.getAtualSeason();

                setTimeout(async() => {
                    await request.getNextSeason();
                    await request.getTopManga();

                }, 2500)
                
            })

        </script>
            
    </body>
</html>
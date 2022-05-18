<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./CSS/main.css">
        <link rel="stylesheet" href="./CSS/register.css">
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>
        <title>Cadastrar | SyberAnime</title>
    </head>
    <body>

        <a href="index.php" id="return">
            <i class="fa-solid fa-arrow-left"></i>
        </a>

        <section id="content">

            <div id="box">

                <div id="box__left">

                    <video src="./Assets/movies/mylivewallpapers.com-Sasuke-Studying.mp4" id="box__video" autoplay muted loop></video>

                </div>

                <div id="box__right">

                    <form method="POST" id="box__form">

                        <header id="box__header">

                            <h1 id="box__logo">SyberAnime</h1>

                        </header>

                        <main id="box__fields">

                            <div class="box__field" id="box__name--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">
                                        <i class="fa-solid fa-user"></i>
                                    </div>
    
                                    <input type="text" name="box__username" id="box__username" class="box__input" placeholder="Digite seu nome:" required>

                                </div>


                                <div class="underline"></div>

                            </div>

                            <div class="box__field" id="box__surname--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">    
                                        <i class="fa-regular fa-user"></i>
                                    </div>
    
                                    <input type="text" name="box__surname" id="box__surname" class="box__input" placeholder="Digite seu sobrenome:" required>

                                </div>
                            

                                <div class="underline"></div>

                            </div>

                            <div class="box__field" id="box__nickname--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">
                                        <i class="fa-solid fa-tag"></i>
                                    </div>
    
                                    <input type="text" name="box__nick" id="box__nick" class="box__input" placeholder="Digite seu nickname:" required>

                                </div>
                            

                                <div class="underline"></div>

                            </div>

                            <div class="box__field" id="box__email--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
    
                                    <input type="email" name="box__email" id="box__email" class="box__input" placeholder="Digite seu email:" required>

                                </div>
                            

                                <div class="underline"></div>

                            </div>

                            <div class="box__field" id="box__pass--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
    
                                    <input type="password" name="box__pass" id="box__pass" class="box__input" placeholder="Digite sua senha:" required>

                                </div>
                            

                                <div class="underline"></div>

                            </div>

                            <div class="box__field" id="box__birth--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">
                                        <i class="fas fa-calendar"></i>   
                                    </div>
    
                                    <input type="date" name="box__birth" id="box__birth" required>

                                </div>
                            

                            </div>

                            <div class="box__field" id="box__gender--wrapper">

                                <div class="box__input--wrapper">

                                    <div class="box__icon--wrapper">
                                        <i class="fa-solid fa-mars-and-venus"></i>
                                    </div>
    
                                    <select name="box__select" id="box__select" required>
                                        <option value="M">Masculino</option>
                                        <option value="F">Feminino</option>
                                    </select>

                                </div>
                            

                            </div>

                        </main>

                        <footer id="box__footer">

                            <button type="submit" name="acao" value="cadastrar" id="box__submit">Cadastrar</button>

                            <span class=" login__alt" id="box__alt">Ou entre usando</span>

                            <div class="login__medias">

                                <div class="login__circle">

                                    <i class="fa-brands fa-github"></i>

                                </div>

                                <div class="login__circle">

                                    <i class="fa-brands fa-twitter"></i>

                                </div>

                                <div class="login__circle">

                                    <i class="fa-brands fa-google"></i>

                                </div>

                            </div>

                        </footer>

                    </form>

                </div>

            </div>

        </section>

    </body>
</html>
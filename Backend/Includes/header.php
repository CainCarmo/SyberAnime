<?php
    use \App\Session\Login;

    $obUser = Login::getUserLogged();

    $hiddenBtn = $obUser ? "hidden" : "";
    $visibleIcon = $obUser ? "visible" : "";

    $nickname = $obUser ? $obUser['userName'] : "";
    $userEmail = $obUser ? $obUser['userEmail'] : "";
?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css">
        <link rel="stylesheet" href="/CSS/main.css">
        <title>Home | SyberAnime</title>
    </head>
    <body>

        <header id="header">

            <div id="header__logobar">

                <div id="header__logo">

                    <h1 id="header__logo-text">
                        <a href="index.php">SyberAnime</a>
                    </h1>

                </div>

                <nav>

                    <ul id="header__links">

                        <li class="header__link">
                            <a href="index.php">Home</a>
                        </li>

                        <li class="header__link">
                            <a href="#">Anime</a>
                        </li>

                        <li class="header__link">
                            <a href="#">Mangá</a>
                        </li>

                        <li class="header__link">
                            <a href="#">Contato</a>
                        </li>

                    </ul>

                </nav>

                <div id="header__controls">

                    <i class="fas fa-search"></i>

                    <div id="header__login">

                        <button type="button" id="header__login-button" class="<?=$hiddenBtn?>">Entrar</button>

                        <div id="header__user--hidden" class="<?=$visibleIcon?>">

                            <img src="/Assets/img/Uzui.jpg" alt="profile-pic" id="header__user-icon">

                            <div id="header__menu">

                                <header id="header__menu-header">

                                    <img src="/Assets/img/Uzui.jpg" alt="profile-pic" id="header__menu-icon">

                                    <h2 id="header__nickname"></h2>
                                        <?=$nickname?>
                                    <div>
                                        <span id="header__email"><?=$userEmail?></span> - <a href="logout.php"> <strong>Sair</strong> </a>
                                    </div>
                                    
                                </header>
                                
                                <nav id="header__options">

                                    <ul>

                                        <li class="header__option">
                                            <a href="#">
                                                <i class="fa-solid fa-user"></i> - Profile
                                            </a>
                                        </li>
                                        <li class="header__option">
                                            <a href="#">
                                                <i class="fa-solid fa-clipboard"></i> - My List
                                            </a>
                                        </li>
                                        <li class="header__option">
                                            <a href="#">
                                                <i class="fa-solid fa-gear"></i> - Configurações
                                            </a>
                                        </li>
                                        <li class="header__option">
                                            <a href="#">
                                                <i class="fas fa-sign-out-alt"></i> - Sair
                                            </a>
                                        </li>

                                    </ul>

                                </nav>

                                <div></div>

                                <!-- <ul id="header__options">

                                    <li class="header__option">

                                        <a href="#">
                                            <i class="fa-solid fa-user"></i> - Profile
                                        </a>

                                    </li>

                                    <li class="header__option">

                                        <a href="#">
                                            <i class="fa-solid fa-clipboard"></i> - My List
                                        </a>

                                    </li>

                                    <li class="header__option">

                                        <a href="#">
                                            <i class="fa-solid fa-gear"></i> - Configurações
                                        </a>

                                    </li>

                                    <li class="header__option">

                                        <a href="#">
                                            <i class="fas fa-sign-out-alt"></i> - Sair
                                        </a>

                                    </li>

                                </ul> -->
                            
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div id="header__searchbar--minimized">

                <form id="header__form">

                    <select name="header__select" id="header__select">

                        <option value="anime">Anime</option>
                        <option value="manga">Mangá</option>

                    </select>

                    <input type="text" name="header__search" id="header__search">

                    <div id="header__buttons">

                        <div id="header__times--hidden">

                            <i class="fas fa-times" id="input__times"></i>

                        </div>

                        <button type="submit" id="header__submit">
                            <i class="fas fa-search"></i>
                        </button>
                        
                    </div>

                     <!-- Filled by Script -->
                     <div id="header__results--hidden"></div>

                </form>

            </div>

        </header>


<?php

require __DIR__.'/Backend/vendor/autoload.php';

use \App\Entity\Users;
use \App\Session\Login;

if(isset($_POST['acao'])) {
    $obUser = Users::getUserByEmail($_POST['login__email']);

    $obUser->userID = $obUser->USER_ID;
    $obUser->userName = $obUser->USERNAME;
    $obUser->userNick = $obUser->NICKNAME;
    $obUser->userEmail = $obUser->USER_EMAIL;
    $obUser->userPass = $obUser->USER_PASS;
    
    if(!$obUser instanceof Users || !password_verify($_POST['login__pass'], $obUser->userPass)) {
        
    }
       
    Login::login($obUser);
}

include __DIR__.'/Backend/Includes/header.php';
include __DIR__.'/Backend/Includes/login-form.php';
include __DIR__.'/Backend/Includes/main.php';
include __DIR__.'/Backend/Includes/footer.php';
include __DIR__.'/Backend/Includes/main-scripts.php';
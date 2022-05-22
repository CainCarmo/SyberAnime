<?php

require __DIR__.'/Backend/vendor/autoload.php';

use \App\Entity\Users;
use \App\Session\Login;

Login::requireLogout();

if(isset($_POST['acao'])) {
    $obUser = new Users;

    $obUser->userName = $_POST['box__username'];
    $obUser->userSurName = $_POST['box__surname'];
    $obUser->userNick = $_POST['box__nick'];
    $obUser->userEmail = $_POST['box__email'];
    $obUser->userPass = password_hash($_POST['box__pass'], PASSWORD_DEFAULT);
    $obUser->userBirth = $_POST['box__birth'];
    $obUser->userGender = $_POST['box__select'];

    $obUser->cadastrar();
    
    Login::login($obUser);
}

include __DIR__.'/Backend/Includes/register-form.php';
<?php

namespace App\Session;

class Login {
    public static function init() {
        if(session_status() !== PHP_SESSION_ACTIVE) {
            session_start();
        }
    }

    public static function getUserLogged() {
        self::init();

        return self::isLogged() ? $_SESSION['user'] : null;
    }

    public static function login($obUser) {
        self::init();

        $_SESSION['user'] = [
            'ID' => $obUser->userID,
            'userName' => $obUser->userName,
            'userEmail' =>$obUser->userEmail
        ];

        header('location: index.php');
        exit;
    }

    public static function logout() {
        self::init();

        unset($_SESSION['user']);

        header('location: index.php');
        exit;
    }

    public static function isLogged() {
        self::init();

        return isset($_SESSION['user']['ID']);
    }

    public static function requireLogin() {
        if(!self::isLogged()) {
            header('location: index.php');
            exit;
        }
    }

    public static function requireLogout() {
        if(self::isLogged()) {
            header('location: index.php');
            exit;
        }
    }

}
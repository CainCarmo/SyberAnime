<?php

namespace App\Entity;

use \App\Database\Config;
use \PDO;


class Users {
    public $userID;
    public $userName;
    public $userSurName;
    public $userNick;
    public $userEmail;
    public $userPass;
    public $userBirth;
    public $userGender;
    public $regisDate;

    public function cadastrar() {
        $this->regisDate = date('Y-m-d H:i:s');

        $obDatabase = new Config('Users');

        $this->userID = $obDatabase->insert([
            'USERNAME'    => $this->userName,
            'SURNAME'     => $this->userSurName,
            'NICKNAME'    => $this->userNick,
            'USER_EMAIL'  => $this->userEmail,
            'USER_PASS'   => $this->userPass,
            'NAS_DATE'    => $this->userBirth,
            'USER_GENDER' => $this->userGender,
            'REGIS_DATE'  => $this->regisDate
        ]);
    }

    public static function getUserByEmail($email) {
        return (new Config('Users'))->select('USER_EMAIL = "'.$email.'"')->fetchObject(self::class);
    }
    
}
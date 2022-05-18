<?php

namespace App\Database;

use PDO;
use PDOException;

class Config {
    const host = 'localhost';
    const dbName = 'SyberAnime_Test';
    const dbUser = 'root';
    const dbPass = '77000520Ccos+';

    private $table;
    private $con;

    public function __construct($table = '') {
        $this->table = $table;
        $this->setConnection();
    }

    private function setConnection() {
        try {
            $this->con = new PDO('mysql:host='.self::host.';dbname='.self::dbName, self::dbUser, self::dbPass);
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die('ERROR: '.$e->getMessage());
        }
    }

    public function execute($query, $params = []) {
        try {
            $stmt = $this->con->prepare($query);
            $stmt->execute($params);
            
            return $stmt;
        } catch(PDOException $e) {
            die('ERROR: '.$e->getMessage());
        }
    }

    public function insert($values) {
        $fields = array_keys($values);
        $binds  = array_pad([], count($fields), '?');

        $query = 'INSERT INTO ' .$this->table.' ('.implode(',', $fields).') VALUES ('.implode(',', $binds).')';

        $this->execute($query, array_values($values));

        return $this->con->lastInsertId();
    }

    public function select($where = '', $order = '', $limit = '') {
        $where = strlen($where) ? 'WHERE ' .$where : '';
        $order = strlen($order) ? 'ORDER BY ' .$order : '';
        $limit = strlen($limit) ? 'LIMIT ' .$limit : '';

        $query = 'SELECT * FROM '.$this->table.' '.$where.' '.$order.' '.$limit;

        return $this->execute($query);
    }

}
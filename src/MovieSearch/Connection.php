<?php
namespace MovieSearch;

class Connection
{
    private static $_instance = null;
    private $conn;

    private function __construct()
    {
        $config = new \Doctrine\DBAL\Configuration();
        require_once('../config/dbconfig.php');
        $this->conn = \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
    }

    public static function getInstance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new Connection();
        }
        return self::$_instance->conn;
    }
}
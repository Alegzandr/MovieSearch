<?php
namespace Controller;

class ErrorController
{
    public function e404($e)
    {
        http_response_code(404);
        return "Not found " . $e->getMessage();
    }

    public function e500($e)
    {
        http_response_code(500);
        return "Server error : " . $e->getMessage();
    }
}
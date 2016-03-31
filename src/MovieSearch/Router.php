<?php
namespace MovieSearch;

class Router
{
    public static function load($controller_name, $action_name)
    {
        $class_name = "\Controller\\" . ucfirst($controller_name) . "Controller";

        if (!class_exists($class_name))
            throw new \Exception("Le controller " . $controller_name . " est introuvable");

        $controller = new $class_name();

        $action = strtolower($action_name) . "Action";

        if (!method_exists($controller, $action))
            throw new \Exception("L'action " . $action_name . " est introuvable dans le controller " . $controller_name);

        return [$controller, $action];
    }
}
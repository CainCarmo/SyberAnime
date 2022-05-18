<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1d90b7da57698106e0ebf3ca24d05739
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1d90b7da57698106e0ebf3ca24d05739::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1d90b7da57698106e0ebf3ca24d05739::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1d90b7da57698106e0ebf3ca24d05739::$classMap;

        }, null, ClassLoader::class);
    }
}

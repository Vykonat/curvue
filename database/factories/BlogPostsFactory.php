<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\BlogPost;
use Faker\Generator as Faker;

$factory->define(BlogPost::class, function (Faker $faker) {
    $title = $faker->sentence();
    $slug = str_slug($title, '-');
    return [
        'title' => $title,
        'description' => $faker->sentence(25),
        'content' => $faker->paragraph(100),
    ];
});

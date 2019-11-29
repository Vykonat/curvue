<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\BlogPost;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(BlogPost::class, function (Faker $faker) {
    $title = $faker->sentence();
    $slug = Str::slug($title, '-');
    return [
        'title' => $title,
        'description' => $faker->sentence(25),
        'content' => $faker->paragraph(100),
    ];
});

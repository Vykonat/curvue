<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    $commentables = [
        App\Models\BlogPost::class,
        App\Models\Comment::class
    ]; // Add new commentables here as we make them
    $commentableType = $faker->randomElement($commentables);
    $commentable = factory($commentableType)->create();

    return [
        'commentable_type' => $commentableType,
        'commentable_id' => $commentable->id,
        'content' => $faker->paragraph()
    ];
});

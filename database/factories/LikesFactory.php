<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Like;
use Faker\Generator as Faker;

$factory->define(Like::class, function (Faker $faker) {
    $likeables = [
        App\Models\BlogPost::class,
        App\Models\Comment::class,
    ]; // Add new likeables here as we make them
    $likeableType = $faker->randomElement($likeables);
    $likeableId = rand(1, 20);

    return [
        'likeable_type' => $likeableType,
        'likeable_id' => $likeableId,
    ];
});

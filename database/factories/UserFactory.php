<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => config('app.adminUserName'),
        'email' => config('app.adminUserEmail'),
        'role_id' => 1,
        'email_verified_at' => now(),
        'password' => config('app.adminUserPassword'),
        'remember_token' => Str::random(10),
    ];
});

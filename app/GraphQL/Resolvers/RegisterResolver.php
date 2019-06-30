<?php

namespace App\GraphQL\Resolvers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Connection;
use Illuminate\Auth\Events\Registered;

class RegisterResolver {
    
    public function resolve($root, array $args) {
        event(new Registered($this->createUser($args['data'])));

        return [ 'status' => 'success',
           'message' => 'Registration was successful! Please use the below link to go to the login page',
           'redirect' => '/login'
        ];
    }

    /**
     * Create a new User instance
     *
     * @param  array  $data
     * @return \App\Containers\Core\Models\User
     */
    protected function createUser(array $data)
    {
        //Create a new user object

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        return $user;
    }
}
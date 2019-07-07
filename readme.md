# Curvue
## A Laravel Vue boilerplate for developers that want to sleep again

## Main dependencies

Front-end:

* [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
* [Vue](https://github.com/vuejs/vue)
* [Typescript](https://github.com/microsoft/TypeScript)
* [Pug](https://github.com/pugjs/pug/tree/master/packages/pug)
* [Vue Apollo](https://github.com/Akryum/vue-apollo)
* [Vue Auth](https://github.com/websanova/vue-auth/)
* [Vee Validate](https://github.com/baianat/vee-validate)
* [Vue Router](https://github.com/vuejs/vue-router)

Back-end:

* [Laravel](https://github.com/laravel/laravel)
* [Laravel Pug](https://github.com/BKWLD/laravel-pug)
* [GraphQL Playground](https://github.com/mll-lab/laravel-graphql-playground)
* [Lighthouse](https://github.com/nuwave/lighthouse)
* [JWT Auth](https://github.com/tymondesigns/jwt-auth)

## Adding the root level account
In your .env file locate the following lines:

`
ADMIN_USER_NAME=  
`  
`
ADMIN_USER_EMAIL=  
`  
`
ADMIN_USER_PASSWORD=  
`

and edit them with your details. Note that the password must be hashed when you enter it into the .env file. This can be done with the following commands:

`
php artisan tinker  
`  
`
Hash::make('<password>')  
`

The auth.php file in the config folder reads these values and the users table seeder uses them to seed the
first account.
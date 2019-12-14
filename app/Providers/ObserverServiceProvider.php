<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Models\BlogPost;
use App\Models\User;

use App\Observers\BlogPostObserver;
use App\Observers\UserObserver;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the model observers.
     */
    public function boot(): void
    {
        BlogPost::observe(BlogPostObserver::class);
        User::observe(UserObserver::class);
    }
}

<?php

namespace App\Observers;

use App\Models\User;
use Illuminate\Support\Str;

class UserObserver
{
    /**
     * Listen to the users saving event.
     */
    public function saving(User $user): void
    {
        if(! isset($user->role_id) ) {
            $user->role_id = 2;
        }
    }
}
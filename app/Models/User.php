<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Http\Traits\DateAttributeTransformations;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use DateAttributeTransformations;

    /**
     * The "booting" method of the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($user) {
            if(! isset($user->role_id)) {
                $user->role_id = 2;
            }
        });
    }

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name', 'email', 'password', 'role_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'id' => 'integer',
        'role_id' => 'integer',
    ];

    /**
     * Checks if a user is an administrator
     */
    public function isAdmin(): bool
    {
        return $this->role_id === 1;
    }

    /**
     * Checks if a user is a patron user
     */
    public function isPatron(): bool
    {
        return $this->role_id === 2;
    }

    /**
     * Returns the users JWT Identifier
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    /**
     * Custom JWT claims
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Gets all a users blog posts
     */
    public function blogPosts(): HasMany
    {
        return $this->hasMany(BlogPost::class);
    }

    /**
     * Gets all a users comments
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}

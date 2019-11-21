<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;
use softDeletes;

class Like extends Model
{

    protected static function boot()
    {
        parent::boot();

        // auto-sets values on creation
        static::saving(function ($like) {
            $user = Auth::user();

            if($user) {
                $like->user_id = $user->id;
            } else {
                $like->user_id = 1;
            }
        });
    }

    protected $fillable = ['likeable_id', 'likeable_type'];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    public function likeable() 
    {
        return $this->morphTo();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class BlogPost extends Model
{
    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        // auto-sets values on creation
        static::saving(function ($post) {
            $user = Auth::user();

            if($user) {
                $post->user_id = $user->id;
            }

            $post->slug = str_slug($post->title . ' ' . time(), '-');
            $post->user_id = 1;
        });
    }

    protected $fillable = [
        'title', 'description', 'content',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }
}

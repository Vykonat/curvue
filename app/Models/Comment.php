<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Comment extends Model
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
        static::saving(function ($comment) {
            $user = Auth::user();

            if($user) {
                $comment->user_id = $user->id;
            } else {
                $comment->user_id = 1;
            }
        });
    }

    protected $fillable = ['content', 'commentable_id', 'commentable_type'];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    public function commentable() 
    {
        return $this->morphTo();
    }

    public function replies()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

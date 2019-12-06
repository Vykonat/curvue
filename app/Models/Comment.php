<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

use App\Http\Traits\DateAttributeTransformations;
use App\Http\Traits\Commentable;

class Comment extends Model
{
    use DateAttributeTransformations;
    use Commentable;

    protected static function boot()
    {
        parent::boot();

        static::saving(function($comment) {
            $comment->user_id = Auth::user() ? Auth::user()->id : 1;
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
}

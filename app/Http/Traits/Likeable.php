<?php
namespace App\Http\Traits;

use Auth;

trait Likeable {
    public function getIsLikedAttribute()
    {
        $like = $this->likes()->whereUserId(Auth::id())->first();
        return (!is_null($like)) ? true : false;
    }

    public function getLikesCountAttribute()
    {
        return $this->likes()->count();
    }

    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }
}
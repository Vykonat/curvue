<?php
namespace App\Http\Traits;

use App\Models\Comment;

trait Commentable {
    public function getCommentsCountAttribute()
    {
        return $this->comments()->count();
    }
}
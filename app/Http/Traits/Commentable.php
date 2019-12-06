<?php
namespace App\Http\Traits;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait Commentable {
    /**
     * Get all of the resources comments
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    /**
     * Gets the number of comments on a resource
     */
    public function getCommentsCountAttribute(): int
    {
        return $this->comments()->count();
    }

    /**
     * determines if a user has commented on a resource
     */
    public function getHasCommentedAttribute(): bool
    {
        return $this->comments->where('user_id', auth()->id())->isNotEmpty();
    }
}
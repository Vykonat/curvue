<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use App\Http\Traits\DateAttributeTransformations;
use App\Http\Traits\Commentable;
use App\Http\Traits\BelongsToUser;

class BlogPost extends Model
{
    use DateAttributeTransformations;
    use Commentable;
    use BelongsToUser;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title', 'content',
    ];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Get the passage attribute for the model.
     */
    public function getPassageAttribute(): string
    {
        return Str::limit($this->content, 400);
    }

    /**
     * Get the 3 most recent blog posts
     */
    public function scopeRecent(Builder $query): Builder
    {
        return $query->orderBy('id', 'desc')->limit(3);
    }

    /**
     * Get last weeks blog posts
     */
    public function scopeLastWeek(): Builder
    {
        return BlogPost::whereBetween('created_at', [carbon('1 week ago'), now()])->orderBy('id', 'desc');
    }
}

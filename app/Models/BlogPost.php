<?php

namespace App\Models;

use Auth;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use App\Http\Traits\DateAttributeTransformations;
use App\Http\Traits\Commentable;

class BlogPost extends Model
{
    use DateAttributeTransformations;
    use commentable;
    
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
            $post->user_id = Auth::user() ? Auth::user()->id : 1;
            $post->slug = Str::slug($post->title . ' ' . time(), '-');
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
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
     * Get the route passage attribute for the model.
     */
    public function getPassageAttribute(): string
    {
        return Str::limit($this->content, 400);
    }

    /**
     * Return the blog posts comments
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    /**
     * Return the blog posts user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Order blog posts by most recent
     */
    public function scopeRecent(Builder $query): Builder
    {
        return $query->orderBy('id', 'desc')->limit(5);
    }

    /**
     * Get last weeks blog posts
     */
    public function scopeLastWeek()
    {
        return BlogPost::whereBetween('created_at', [carbon('1 week ago'), now()])->orderBy('id', 'desc');
    }
}

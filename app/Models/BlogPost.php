<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Auth;

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

    protected $fillable = [
        'title', 'description', 'content',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

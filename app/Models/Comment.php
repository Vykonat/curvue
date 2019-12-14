<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

use App\Http\Traits\DateAttributeTransformations;
use App\Http\Traits\Commentable;
use App\Http\Traits\BelongsToUser;

class Comment extends Model
{
    use DateAttributeTransformations;
    use Commentable;
    use BelongsToUser;

    /**
     * The attributes that are mass assignable
     */
    protected $fillable = ['content', 'commentable_id', 'commentable_type'];

    /**
     * Return the resource this comment belongs to
     */
    public function commentable(): MorphTo
    {
        return $this->morphTo();
    }
}

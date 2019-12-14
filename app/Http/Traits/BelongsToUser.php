<?php
namespace App\Http\Traits;

use Auth;
use App\Models\User;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait BelongsToUser {

    /**
     * The "booting" method of the traits model
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function($resource) {
            $resource->user_id = Auth::user() ? Auth::user()->id : 1;
        });
    }

    /**
     * Get the resources user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
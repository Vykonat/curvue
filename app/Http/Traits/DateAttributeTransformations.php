<?php
namespace App\Http\Traits;

use Carbon\Carbon;

trait DateAttributeTransformations {

    /**
     * Return the created_at attribute as '1 ... ago'
     */
    public function getCreatedAtAttribute(): string
    {
        $date = Carbon::parse($this->attributes['created_at']);
        return $date->diffForHumans();
    }

    /**
     * Return the updated_at attribute as '1 ... ago'
     */
    public function getUpdatedAtAttribute(): string
    {
        $date = Carbon::parse($this->attributes['updated_at']);
        return $date->diffForHumans();
    }

    /**
     * Check if the resource has been updated
     */
    public function getIsUpdatedAttribute(): bool
    {
        return $this->attributes['created_at'] !== $this->attributes['updated_at'];
    }
}
<?php
namespace App\Http\Traits;

use Carbon\Carbon;

trait DateAttributeTransformations {
    public function getCreatedAtAttribute()
    {
        $date = Carbon::parse($this->attributes['created_at']);
        return $date->diffForHumans();
    }

    public function getUpdatedAtAttribute()
    {
        $date = Carbon::parse($this->attributes['updated_at']);
        return $date->diffForHumans();
    }

    public function getIsUpdatedAttribute()
    {
        return $this->attributes['created_at'] !== $this->attributes['updated_at'];
    }
}
<?php
namespace App\Http\Traits;

use Carbon\Carbon;

trait DateAttributeTransformations {
    public function getCreatedAtAttribute()
    {
        $date = Carbon::parse($this->attributes['created_at']);
        return $date->diffForHumans();
    }
}
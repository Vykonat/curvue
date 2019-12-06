<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;


/**
 * Handles middleware errors
 */
function middlewareError()
{
    $code = Auth::guest() ? 401 : 403;
    $value = Auth::guest() ? 'errors.unauthorized' : 'errors.forbidden';

    return response()->json([
        'errors' => [
            'message' => [
                __($value),
            ],
        ],
        'message' => __($value),
    ], $code);
}

/**
 * Return a Carbon instance.
 */
function carbon(string $parseString = '', string $timeZone = null): Carbon
{
    return new Carbon($parseString, $timeZone);
}

/**
 * Return a formatted Carbon date.
 */
function humanize_date(Carbon $date, string $format = 'd F Y, H:i'): string
{
    return $date->format($format);
}
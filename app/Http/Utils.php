<?php

use Illuminate\Support\Facades\Auth;

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
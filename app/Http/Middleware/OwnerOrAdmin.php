<?php

namespace App\Http\Middleware;

use Closure;

class OwnerOrAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $resource)
    {
        $resourceId = \DB::table($resource)->find($request->json('variables')['id']);
        $user_id = $resourceId->user_id;

        if( $request->user()->isAdmin() ) {
            return $next($request);
        }

        if( $request->user()->id === $user_id ) {
            return $next($request);
        }

        return middlewareError();
    }
}

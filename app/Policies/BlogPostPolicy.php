<?php

namespace App\Policies;

use App\Models\BlogPost;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BlogPostPolicy
{
    use HandlesAuthorization;
    
    /**
     * Determine whether the user is admin for all authorization.
     */
    public function before(User $user): bool
    {
        if( $user->isAdmin() ) {
            return true;
        }
    }

    /**
     * Determine whether the user can update the post.
     */
    public function update(User $user, BlogPost $post): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can create a post.
     */
    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the post.
     */
    public function delete(User $user, BlogPost $post): bool
    {
        return $user->isAdmin();
    }
}

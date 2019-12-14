<?php

namespace App\Observers;

use App\Models\BlogPost;
use Illuminate\Support\Str;

class BlogPostObserver
{
    /**
     * Listen to the blog post saving event.
     */
    public function saving(BlogPost $blogPost): void
    {
        $blogPost->slug = Str::slug($blogPost->title . ' ' . time(), '-');
    }
}
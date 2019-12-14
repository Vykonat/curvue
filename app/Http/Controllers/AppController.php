<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Return the application view
     */
    public function index()
    {
        return view('app');
    }
}

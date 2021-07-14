<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);


Route::statamic('login', 'login', [
    'title' => 'Login',
]);
Route::statamic('interiors', 'projects.index', [
    'title' => 'Interiors',
]);
Route::statamic('press', 'press.index', [
    'title' => 'Press',
]);

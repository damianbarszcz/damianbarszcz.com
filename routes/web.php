<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BasicController;
use App\Http\Controllers\MemberController;

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

Route::get('/', [BasicController::class, 'indexView'])->name('index');

Route::get('/{slug}', [BasicController::class, 'basicView']);

Route::get('/project/{slug}', [BasicController::class, 'singleProjectView']);

Route::get('/review/{slug}', [BasicController::class, 'singleReviewView']);

Route::get('/help/{slug}', [BasicController::class, 'searchView']);


Auth::routes();



Route::group(['prefix' => '/member'], function(){

        Route::get('/{slug}', [MemberController::class, 'memberView']);

        Route::get('/reviews/edit/:pub_url', [MemberController::class, 'indexView']);

        Route::get('/drafts/review/continue/:pub_url', [MemberController::class, 'indexView']);
});



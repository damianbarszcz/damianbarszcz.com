<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BasicController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\Auth\LoginController;

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

Route::get('/help/search={slug}', [BasicController::class, 'searchView']);

//Auth routes group
Route::group(['prefix' => '/auth'], function(){
        Route::get('/sign-in', [LoginController::class, 'showLoginForm']);   
});

//Member routes group
Route::group(['prefix' => '/member'], function(){

        Route::get('/{slug}', [MemberController::class, 'memberView']);

        Route::get('/projects/edit/{slug}', [MemberController::class, 'projectEditView']);

        Route::get('/reviews/edit/{slug}', [MemberController::class, 'reviewEditView']);

        Route::get('/projects/draft/{slug}', [MemberController::class, 'projectDraftView']);

        Route::get('/reviews/draft/{slug}', [MemberController::class, 'reviewDraftView']);
});



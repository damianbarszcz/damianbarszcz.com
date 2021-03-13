<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\AccountController;
use App\Http\Controllers\Api\IndexController;
use App\Http\Controllers\Api\Member\NewProjectController;
use App\Http\Controllers\Api\Member\NewReviewController;
use App\Http\Controllers\Api\Member\ProjectsController;
use App\Http\Controllers\Api\Member\ReviewsController;
use App\Http\Controllers\Api\Member\OverviewController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/account', [AccountController::class, 'getAuthUser']);

      /*
      =======================
      Contact  API
      =======================
      */
      Route::post('/contact/send-message', [ContactController::class, 'contactForm']);

        /*
        =======================
        Basic  API
        =======================
        */
        Route::group(['prefix' => '/basic'], function(){
                Route::get('/collection', [ IndexController::class, 'getPubCollection' ]);

                Route::get('/projects', [ ProjectsController::class, 'allProjects' ]);

                Route::get('/project/{pub_url}', [ ProjectsController::class, 'singleProject' ]);

                Route::get('/reviews', [ ReviewsController::class, 'allReviews' ]);

                Route::get('/review/{review_url}', [ ReviewsController::class, 'singleReview' ]);
        });

        /*
        =======================
        Member  API
        =======================
        */
        Route::group(['prefix' => '/member'], function(){
                Route::get('/collection', [ OverviewController::class, 'userCollection']);

                Route::get('/projects', [ ProjectsController::class, 'userProjects' ]);

                Route::get('/reviews', [ ReviewsController::class, 'userReviews' ]);

                Route::post('/new-project/create-project', [NewProjectController::class, 'createProject']);

                Route::post('/new-review/create-review', [NewReviewController::class, 'createReview']);

                Route::get('/overview/counter', [ OverviewController::class, 'getPubCounter']);
        });
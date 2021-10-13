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
use App\Http\Controllers\Api\Member\DraftsController;
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

                Route::get('/projects/random/{pub_url}', [ ProjectsController::class, 'randomProjects' ]);

                Route::get('/reviews', [ ReviewsController::class, 'allReviews' ]);

                Route::get('/review/{review_url}', [ ReviewsController::class, 'singleReview' ]);

                Route::get('/reviews/random/{pub_url}', [ ReviewsController::class, 'randomReviews' ]);
        });

        /*
        =======================
        Member  API
        =======================
        */
        Route::group(['prefix' => '/member'], function(){

                // Show user publications collection
                Route::get('/collection', [ OverviewController::class, 'userCollection']);

                // Show user projects collection
                Route::get('/projects', [ ProjectsController::class, 'userProjects' ]);

                // Show user review collection
                Route::get('/reviews', [ ReviewsController::class, 'userReviews' ]);

                // Show user drafts collection
                 Route::get('/drafts', [DraftsController::class, 'userDrafts']);

                 // New project actions
                Route::post('/new-project/create-project', [NewProjectController::class, 'createProject']);

                Route::post('/new-project/draft-project', [NewProjectController::class, 'createProjectDraft']);

                 // Update project actions
                Route::get('/projects/edit/{project_url}', [ProjectsController::class, 'singleProject']);

                Route::post('/projects/edit/update-project/{slug}', [ProjectsController::class, 'updateProject']);

                // Project draft actions
                Route::get('/projects/draft/{slug}', [ DraftsController::class, 'singleProjectDraft']);

                Route::post('/drafts/draft-project/{slug}', [ ProjectsController::class, 'saveProjectDraft']);

                // New review actions
                Route::post('/new-review/create-review', [NewReviewController::class, 'createReview']);
 
                Route::post('/new-review/draft-review', [NewReviewController::class, 'createReviewDraft']);

                // Update review actions
                Route::get('/reviews/edit/{review_url}', [ReviewsController::class, 'singleReview']);

                Route::post('/reviews/edit/update-review/{slug}', [ReviewsController::class, 'updateReview']);

                // Review  draft actions
                Route::get('/reviews/draft/{slug}', [ DraftsController::class, 'singleReviewDraft']);

                Route::post('/drafts/draft-review/{slug}', [ ReviewsController::class, 'saveReviewDraft']);

                
                
                Route::get('/overview/counter', [ OverviewController::class, 'getPubCounter']);

                Route::post('/projects/delete/{slug}', [ProjectsController::class, 'deleteSingleProject']);

                Route::post('/reviews/delete/{slug}', [ReviewsController::class, 'deleteSingleReview']);

                Route::post('/drafts/delete/{slug}', [DraftsController::class, 'deleteSingleDraft']);

        });


<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Project;
use App\Models\User;
use App\Models\DraftProject;
use App\Models\DraftReview;

class OverviewController extends Controller{


        /*
        =======================
        Display all reviews  article
        =======================
        */
        public function userCollection(){
                $projectArticles = Project::get();

                $reviewArticles = Review::get();

                $pubCollection = $projectArticles->concat($reviewArticles);

                $sorted = collect($pubCollection)->sortByDesc('date_of_publication')->values();

                return response()->json($sorted);
        }

        /*
        =======================
        Get publication counter
        =======================
        */

        public function getPubCounter(){
            $projectsPublication = Project::get();

            $reviewsPublication = Review::get();

            $draftsReview = DraftProject::get();

            $draftsProject = DraftReview::get();

            $reviewsPubCounter = $reviewsPublication->count();

            $projectsPubCounter = $projectsPublication->count();

            $draftsReviewCounter = $draftsReview->count();

            $draftsProjectCounter = $draftsProject->count();

            $draftsPubCounter =  $draftsReviewCounter + $draftsProjectCounter ;

            return response()->json([ $projectsPubCounter , $reviewsPubCounter, $draftsPubCounter ]);
        }
}

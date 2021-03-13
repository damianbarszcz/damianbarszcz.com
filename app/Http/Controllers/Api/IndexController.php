<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Project;
use App\Models\User;

class IndexController extends Controller{

        public function getPubCollection(){
            $projectArticles = Project::get();

            $reviewArticles = Review::get();

            $pubCollection = $projectArticles->concat($reviewArticles);

            $sorted = collect($pubCollection)->sortByDesc('date_of_publication')->values();

            return response()->json($sorted);
        }
}

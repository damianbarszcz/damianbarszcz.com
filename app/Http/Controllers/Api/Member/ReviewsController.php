<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewsController extends Controller
{
      /*
        =======================
        Display all reviews articles
        =======================
        */
        public function allReviews()  {
            return  Review::orderBy('id', 'DESC')->get();
        }

        /*
        ==========================
         Display single review article
        ==========================
        */
        public function singleReview($pub_url)  {
            return Review::where('pub_url',$pub_url)->firstOrFail();
        }

        /*
        ==========================
        Display user review articles
        ==========================
        */
        public function userReviews()  {
            return Review::where('user_id',Auth::user()->id)->get();
        }
}


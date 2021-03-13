<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reviews;

class ReviewsController extends Controller{

        /*
        =======================
        Display all reviews  article
        =======================
        */
        public function allReviews()  {
            return  Reviews::orderBy('id', 'DESC')->get();
        }

        /*
        ==========================
         Display single review article
        ==========================
        */
        public function singleReview($pub_url)  {
            return Review::where('pub_url',$pub_url)->firstOrFail();
        }
}

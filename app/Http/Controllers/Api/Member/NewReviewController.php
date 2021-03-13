<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Review;

class NewReviewController extends Controller{

        public function __construct(){
            $this->middleware('auth');
        }

        /*
        =======================
        Create review article
        =======================
        */

        public function createReview(Request $request){
            
            $user = Auth::user()->id;

            $pub_title = $request->input('review_title');

            $pub_subtitle = $request->input('review_subtitle');

            $pub_body = $request->input('review_body');

            $pub_tags = $request->input('review_tags');

            $pub_category = $request->input('review_category');

            $pub_image =  $request->file('review_picture');

            $date_of_publication = Carbon::now();

            $pub_destination_folder = "/images/reviews/articles/";

            $request->validate([
                    'review_title' => 'required|string|min:10|max:55',
                    'review_subtitle' => 'required|string|min:25|max:150',
                    'review_body' => 'required|string|min:300',
                    'review_category' => 'required',
                    'review_picture' =>  'required|mimes:jpeg,bmp,png,gif|max:2048',
            ]);

            $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();

            $pub_image->move(public_path($pub_destination_folder), $pub_image_name);

            $pub_picture = $pub_destination_folder .   $pub_image_name;

            Review::create([  'user_id' => $user, 'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle ,  'pub_body' => $pub_body, 'pub_picture' => $pub_picture,
            'pub_category' => $pub_category, 'date_of_publication' => $date_of_publication, 'pub_tags' => $pub_tags, 'pub_url' => Str::slug($pub_title, "-") ]);

            return response()->json('The Review has been added.');
    }
}

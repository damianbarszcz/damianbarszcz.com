<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\DraftReview;
use App\Models\User;
use Carbon\Carbon;

class ReviewsController extends Controller{
      /*
        ============================
        Display all reviews articles
        ============================
        */
        public function allReviews()  {
             return  Review::orderBy('id', 'DESC')->get();
        }

        /*
        ============================
         Display single review article
        ============================
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
                return Review::where('user_id',Auth::user()->id)->orderBy('id', 'DESC')->get();
        }

       /*
        ============================
         Display random related reviews
        ============================
        */
        public function randomReviews($pub_url){
                $pub_id =  Review::where('pub_url',$pub_url)->pluck('id');

                return  Review::whereNotIn('id', $pub_id)->inRandomOrder()->get();
        }

        /*
        ============================
         Delete user single review
        ============================
        */
        public function deleteSingleReview(Request $request,$slug){

            $password = $request->input('password');

            $request->validate([ 'password' => 'required' ]);

            $user = User::where('id', Auth::user()->id)->first();
            
            if(Hash::check($password,  $user->password)){
                    $review_url = basename($slug);

                    $reviews_record = Review::where('pub_url', $review_url)->firstOrFail();

                    $reviews_record->delete();

                   return Review::orderBy('id', 'DESC')->get();

            }

            else{ throw ValidationException::withMessages(['password' => 'Twoje hasło jest niepoprawne.']);  }
        }  

         /*
        =======================
        Update review
        =======================
        */
        public function  updateReview(Request $request, $review_url){
                $user = User::where('id', Auth::user()->id)->first();
    
                $pub_title = $request->input('pub_title');
    
                $pub_subtitle = $request->input('pub_subtitle');
    
                $pub_body = $request->input('pub_body');
    
                $pub_tags = $request->input('pub_tags');
    
                $pub_image =  $request->file('pub_picture');
    
                $pub_category = $request->input('pub_category');

                $pub_color =  $request->input('pub_color');
    
                $pub_destination_folder = "/images/reviews/articles/";
    
                $request->validate([
                        'pub_title' => 'required|string|min:10|max:55',
                        'pub_subtitle' => 'required|string|min:25|max:150',
                        'pub_body' => 'required|string|min:300',
                        'pub_tags' => 'required|string|min:2',
                        'pub_category' => 'required',
                        'pub_color' => 'required|string|min:4|min:7'
                ]);
    
                $updateData = Review::where('pub_url', $review_url)->firstOrFail();
    
                if(!empty($pub_image)){
                        $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();
        
                        $pub_image->move(public_path($pub_destination_folder), $pub_image_name);
        
                        $pub_picture = $pub_destination_folder .   $pub_image_name;
                }
    
                else{  $pub_picture = $updateData->pub_picture; }
    
                $updateData->update(['id_author' => $user->id,  'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle , 'pub_body' => $pub_body, 'pub_picture' => $pub_picture,  
                'pub_tags' => $pub_tags, 'pub_category' => $pub_category,'pub_color' => $pub_color ]);
        }

        /*
        =======================
        Save review  draft
        =======================
        */
        public function  saveReviewDraft(Request $request, $review_url){
                $user = User::where('id', Auth::user()->id)->first();
    
                $pub_title = $request->input('pub_title');
    
                $pub_subtitle = $request->input('pub_subtitle');
    
                $pub_body = $request->input('pub_body');
    
                $pub_tags = $request->input('pub_tags');
    
                $pub_image =  $request->file('pub_picture');
    
                $pub_category = $request->input('pub_category');

                $pub_color =  $request->input('pub_color');
    
                $pub_destination_folder = "/images/reviews/drafts/";
    
                $request->validate([
                        'pub_title' => 'required|string|min:10|max:55',
                        'pub_category' => 'required',
                        'pub_color' => 'required|string|min:4|min:7'
                ]);
    
                $updateData = DraftReview::where('pub_url', $review_url)->firstOrFail();
    
                if(!empty($pub_image)){
                        $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();
        
                        $pub_image->move(public_path($pub_destination_folder), $pub_image_name);
        
                        $pub_picture = $pub_destination_folder .   $pub_image_name;
                }
    
                else{  $pub_picture = $updateData->pub_picture; }
    
                $updateData->update(['id_author' => $user->id,  'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle , 'pub_body' => $pub_body, 'pub_picture' => $pub_picture,  
                'pub_tags' => $pub_tags, 'pub_category' => $pub_category,'pub_color' => $pub_color ]);
        }
}


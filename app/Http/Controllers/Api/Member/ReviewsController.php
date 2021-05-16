<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\User;

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
        public function randomBooks($pub_url){
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
    
                $pub_title = $request->input('review_title');
    
                $pub_subtitle = $request->input('review_subtitle');
    
                $pub_body = $request->input('review_body');
    
                $pub_tags = $request->input('review_tags');
    
                $pub_image =  $request->file('review_picture');
    
                $pub_category = $request->input('review_category');
    
                $pub_destination_folder = "/images/reviews/drafts/";
    
                $request->validate([
                        'review_title' => 'required|string|min:10|max:55',
                        'review_subtitle' => 'required|string|min:25|max:150',
                        'review_body' => 'required|string|min:300',
                        'review_tags' => 'required|string|min:2',
                        'review_category' => 'required',
                ]);
    
                $updateData = Review::where('pub_url', $review_url)->firstOrFail();
    
                if(!empty($pub_image)){
                        $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();
        
                        $pub_image->move(public_path($pub_destination_folder), $pub_image_name);
        
                        $pub_picture = $pub_destination_folder .   $pub_image_name;
                }
    
                else{  $pub_picture = $updateData->pub_picture; }
    
                $updateData->update(['id_author' => $user->id,  'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle , 'pub_body' => $pub_body, 'pub_picture' => $pub_picture,  
                'pub_tags' => $pub_tags, 'pub_category' => $pub_category]);
        }
}


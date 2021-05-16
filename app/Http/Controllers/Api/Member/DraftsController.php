<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\DraftReview;
use App\Models\DraftProject;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class DraftsController extends Controller{

        /*
        =======================
         Get drafts collection
        =======================
        */
        public function userDrafts(){
                $projectDrafts = DraftProject::where('user_id','=', 1)->get();

                $reviewDrafts =  DraftReview::where('user_id','=', 1)->get();

                $pubCollection = $projectDrafts->concat($reviewDrafts);

                return collect($pubCollection)->sortByDesc('updated_at')->values();
        }

        /*
        =======================
        Delete single draft
        =======================
        */
        public function deleteSingleDraft(Request $request,$slug){

            $password = $request->input('password');

            $request->validate([ 'password' => 'required' ]);

            $user = User::where('id', Auth::user()->id)->first();
            
            if(Hash::check($password,  $user->password)){
                    $pub_url = basename($slug);

                    if(DraftReview::where('pub_url', $pub_url)->value('pub_category')){
                            $review_record = DraftReview::where('pub_url', $pub_url)->firstOrFail();
    
                            $review_record->delete();
                    }

                    else{       
                            $project_record = DraftProject::where('pub_url', $pub_url)->firstOrFail();
    
                            $project_record->delete();
                    }

                    $projects = DraftProject::where('id_author','=', Auth::user()->id)->get();

                    $reviews = DraftReview::where('id_author','=', Auth::user()->id)->get();
    
                    $pubCollection = $projects->concat($reviews );

                    return collect($pubCollection)->sortByDesc('updated_at')->values();
            }

            else{ throw ValidationException::withMessages(['password' => 'Twoje hasło jest niepoprawne.']);  }
    }  

        /*
        =======================
        Show project draft
        =======================
        */
        public function singleProjectDraft($slug){

                $pub_url = basename($slug);

                 return DraftProject::where('pub_url',$pub_url)->firstOrFail();
        }

        /*
        =======================
        Show review  draft
        =======================
        */
        public function singleReviewDraft($slug){
                $pub_url = basename($slug);

                return DraftReview::where('pub_url',$pub_url)->firstOrFail();
        }
}

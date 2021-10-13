<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;
use App\Models\Project;
use App\Models\DraftProject;
use App\Models\User;
use Carbon\Carbon;

class ProjectsController extends Controller{

        /*
        ==========================
        Display all project articles
        ==========================
        */
        public function allProjects()  {
                return Project::orderBy('id', 'DESC')->get();
        }

        /*
        ==========================
        Display single project article
        ==========================
        */
        public function singleProject($pub_url)  {
                return Project::where('pub_url',$pub_url)->firstOrFail();
        }

        /*
        ==========================
        Display user project articles
        ==========================
        */
        public function userProjects()  {
                return Project::where('user_id',Auth::user()->id)->orderBy('id', 'DESC')->get();
        }

        /*
        ==========================
        Display user random projects
        ==========================
        */
        public function randomProjects($pub_url)  {
                $pub_id =  Project::where('pub_url',$pub_url)->pluck('id');

                return Project::whereNotIn('id', $pub_id)->inRandomOrder()->get();
        }

         /*
        =======================
        Delete single project
        =======================
        */
        public function deleteSingleProject(Request $request,$slug){

                $password = $request->input('password');

                $request->validate([ 'password' => 'required' ]);

                $user = User::where('id', Auth::user()->id)->first();
                        
                if(Hash::check($password,  $user->password)){
                        $project_url = basename($slug);

                        $project_record = Project::where('pub_url', $project_url)->firstOrFail();

                        $project_record->delete();

                        return Project::orderBy('id', 'DESC')->get();
                }

                else{ throw ValidationException::withMessages(['password' => 'Twoje hasło jest niepoprawne.']);  }
        }  

        /*
        ==========================
        Update single project content
        ==========================
        */

        public function  updateProject(Request $request,$project_url){
                $user = User::where('id', Auth::user()->id)->first();

                $pub_title = $request->input('pub_title');
    
                $pub_subtitle = $request->input('pub_subtitle');
    
                $pub_body = $request->input('pub_body');
    
                $pub_tags = $request->input('pub_tags');
    
                $pub_image =  $request->file('pub_picture');

                $pub_color =  $request->input('pub_color');
    
                $pub_destination_folder = "/images/projects/articles/";
    
                $request->validate([
                        'pub_title' => 'required|string|min:10|max:55',
                        'pub_subtitle' => 'required|string|min:25|max:150',
                        'pub_body' => 'required|string|min:300',
                        'pub_tags' => 'required|string|min:2',
                        'pub_color' => 'required|string|min:4|min:7',
                ]);

                $updateData = Project::where('pub_url', $project_url)->firstOrFail();
    
                if(!empty($pub_image)){
                        $request->validate([ 'pub_picture' =>  'required|mimes:jpeg,bmp,png,gif|max:2048' ]);
                        
                        $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();
        
                        $pub_image->move(public_path($pub_destination_folder), $pub_image_name);
        
                        $pub_picture = $pub_destination_folder .   $pub_image_name;
                }

                else{  $pub_picture = $updateData->pub_picture; }

                $updateData->update(['id_author' => $user->id,  'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle , 'pub_body' => $pub_body, 'pub_picture' => $pub_picture,  
                'pub_tags' => $pub_tags,'pub_color' => $pub_color ]);
        }

        /*
        ==========================
        Save project draft
        ==========================
        */
        public function  saveProjectDraft(Request $request,$project_url){
                $user_id = Auth::user()->id;

                $pub_title = $request->input('pub_title');

                $pub_subtitle = $request->input('pub_subtitle');

                $pub_body = $request->input('pub_body');

                $pub_tags = $request->input('pub_tags');

                $pub_image =  $request->file('pub_picture');

                $last_modify = Carbon::now();

                $pub_destination_folder = "/images/projects/drafts/";

                $request->validate([ 'pub_title' => 'required|string|min:10|max:55' ]);

                $updateData = DraftProject::where('pub_url', $project_url)->firstOrFail();

                if(!empty($pub_image)){
                        $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();

                        $pub_image->move(public_path($pub_destination_folder), $pub_image_name);

                        $pub_picture = $pub_destination_folder .   $pub_image_name;
                }

                else{   $pub_picture = $pub_image;   }

                $updateData->update([  'user_id' => $user_id,  'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle , 'pub_body' => $pub_body, 'pub_picture' => $pub_picture,  
               'last_modify' => $last_modify,   'pub_tags' => $pub_tags,  'pub_url' => Str::slug($pub_title, "-")  ]);
        }
}

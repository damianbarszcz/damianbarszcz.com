<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\DraftProject;
use App\Models\Project;

class NewProjectController extends Controller{

        public function __construct(){
                $this->middleware('auth');
        }

        public function createProject(Request $request){
                $user = Auth::user()->id;

                $pub_title = $request->input('project_title');

                $pub_subtitle = $request->input('project_subtitle');

                $pub_body = $request->input('project_body');

                $pub_tags = $request->input('project_tags');

                $pub_image =  $request->file('project_picture');

                $date_of_publication = Carbon::now();

                $pub_destination_folder = "/images/projects/articles/";

                $request->validate([
                        'project_title' => 'required|string|min:10|max:55',
                        'project_subtitle' => 'required|string|min:25|max:150',
                        'project_body' => 'required|string|min:300',
                        'project_picture' =>  'required|mimes:jpeg,bmp,png,gif|max:2048',
                ]);

                $pub_image_name = Str::slug($pub_title, "-") . rand() .  '.' . $pub_image->getClientOriginalExtension();

                $pub_image->move(public_path($pub_destination_folder), $pub_image_name);

                $pub_picture = $pub_destination_folder .   $pub_image_name;

                Project::create([ 'user_id' => $user,  'pub_title' => $pub_title, 'pub_subtitle' => $pub_subtitle , 'pub_body' => $pub_body, 'pub_picture' => $pub_picture,  
                'date_of_publication' => $date_of_publication,  'pub_tags' => $pub_tags,  'pub_url' => Str::slug($pub_title, "-")  ]);

                return response()->json('The project has been added.'); 
        }
}

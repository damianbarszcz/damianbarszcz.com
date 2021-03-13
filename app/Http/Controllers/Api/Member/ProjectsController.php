<?php

namespace App\Http\Controllers\Api\Member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Project;

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
            return Project::where('user_id',Auth::user()->id)->get();
        }
}

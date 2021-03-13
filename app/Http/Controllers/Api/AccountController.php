<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller{

        public function getAuthUser(){
            $user = DB::table('users')->join('personal_data','personal_data.id','=','users.id')->where('users.id', Auth::user()->id)->first();
            
            return response()->json($user);
        }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\SendMessage;

class ContactController extends Controller{
        /*
        =======================
         Send contact message
        =======================
        */
        public function contactForm(Request $request){

                $request->validate([
                        'first_name'  =>  'required|min:3|max:50',
                        'last_name'  =>  'required|min:3|max:50',
                        'email_address'  =>  'required|email',
                        'subject'  =>  'required|min:3|max:255',
                        'message' =>  'required|min:100',
                       'recaptcha' => 'required'
                ]);

                $first_name = $request->first_name;
                $last_name = $request->last_name;
                $email = $request->email_address;
                $subject  = $request->subject;
                $message =  $request->message;

                Mail::to('barszcz.investments@gmail.com')->send(new SendMessage($first_name, $last_name, $email, $subject, $message));
        }
}

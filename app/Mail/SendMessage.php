<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMessage extends Mailable{
    use Queueable, SerializesModels;

    protected  $first_name , $last_name, $email, $message;
    public $subject;

    public function __construct($first_name, $last_name, $email, $subject, $message){
            $this->first_name = $first_name;
            $this->last_name = $last_name;
            $this->email = $email;
            $this->subject = $subject;
            $this->message = $message;
    }

    public function build(){
            return $this->from('damianbarszcz@protonmail.com', 'damianbarszcz.com  - '. $this->first_name . ' ' . $this->last_name)
            ->subject($this->subject)
            ->markdown('mail.contact-me')
            ->with(['first_name' => $this->first_name,'last_name' => $this->last_name,'email' => $this->email, 'subject' => $this->subject, 'message' => $this->message]);
    }
}

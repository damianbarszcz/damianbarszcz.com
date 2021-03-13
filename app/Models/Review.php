<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model{
        use HasFactory;

        protected $table = "reviews";

        protected $fillable = ['user_id','pub_title', 'pub_subtitle', 'pub_body', 'pub_picture', 'date_of_publication', 'pub_url', 'pub_tags', 'pub_category'];

        public function user(){
            return $this->belongsTo(User::class);
        }
}

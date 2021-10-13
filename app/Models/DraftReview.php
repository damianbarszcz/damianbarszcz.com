<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DraftReview extends Model{
    use HasFactory;

    protected $table = "review_drafts";

    protected $fillable = ['user_id', 'pub_title', 'pub_subtitle', 'pub_body', 'pub_picture',  'pub_url', 'pub_tags', 'pub_category','pub_color'];

    public function user(){   return $this->belongsTo(User::class);  }
}

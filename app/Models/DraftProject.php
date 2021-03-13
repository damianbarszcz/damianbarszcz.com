<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DraftProject extends Model{
    use HasFactory;

    protected $table = "project_drafts";

    protected $fillable = ['user_id', 'pub_title', 'pub_subtitle', 'pub_body', 'pub_picture', 'pub_url', 'pub_tags'];

    public function user(){   return $this->belongsTo(User::class); }

}

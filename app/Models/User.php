<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable{
    use HasFactory, Notifiable, HasApiTokens;
    
    protected $fillable = ['email', 'phone', 'password', 'role'];

    protected $hidden = [ 'password',   'remember_token'  ];

    protected $casts = [ 'email_verified_at' => 'datetime'  ];

    public function personData(){  return $this->hasOne(PersonData::class);}

    public function project(){ return $this->hasMany(Project::class); }

    public function review(){ return $this->hasMany(Review::class); }

    public function draftProject(){  return $this->hasMany(DraftProject::class);}

    public function draftReview(){  return $this->hasMany(DraftReview::class); }
}

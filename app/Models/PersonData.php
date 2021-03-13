<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonData extends Model{
    use HasFactory;

    protected $table = "personal_data";

    protected $fillable = ['user_id', 'name', 'surename', 'avatar', 'birthday', 'gender', 'website', 'biogram'];
}

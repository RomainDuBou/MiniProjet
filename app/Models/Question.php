<?php

namespace App\Models;

use App\Models\User;
use App\Models\Response;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'author_id'
    ];

    public function author(){
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    public function responses(){
        return $this->hasMany(Response::class, 'question_id', 'id');
    }
}

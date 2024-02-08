<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = ['account_name', 'website_url', 'username', 'password', 'note', 'created_at', 'updated_at'];

    public function users()
    {
        return $this->belongTo(User::class);
    }
}

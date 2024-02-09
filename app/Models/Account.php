<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    use HasSlag;

    protected $fillable = ['user_id', 'account_name', 'website_url', 'username', 'password', 'note', 'created_at', 'updated_at'];

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('account_name')
            ->saveSlugsTo('slug');
    }

    public function users()
    {
        return $this->belongTo(User::class);
    }
}

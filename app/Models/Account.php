<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Account extends Model
{
    use HasFactory;
    use Sluggable;

    protected $fillable = ['user_id', 'account_name', 'slug', 'website_url', 'username', 'password', 'note', 'created_at', 'updated_at'];

        /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'account_name'
            ]
        ];
    }

    public function users()
    {
        return $this->belongTo(User::class);
    }
}

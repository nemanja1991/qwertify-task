<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Crypt;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'account_name'  => $this->account_name,
            'slug'          => $this->slug,
            'website_url'   => $this->website_url,
            'username'      => $this->username,
            'password'      => Crypt::decryptString($this->password),
            'note'          => $this->note
        ];
    }
}

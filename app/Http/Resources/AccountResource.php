<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'website_url'   => $this->website_url,
            'username'      => $this->username,
            'password'      => $this->password,
            'note'          => $this->note
        ];
    }
}

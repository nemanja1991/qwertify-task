<?php

namespace App\Repositories;

use App\Models\Account;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use App\Http\Resources\AccountResource;
use App\Repositories\Interfaces\AccountInterface;

class AccountRepository implements AccountInterface
{   
    public function all()
    {
        $user = auth()->user();

        return AccountResource::collection(
            Account::where('user_id', $user->id)->paginate(10)
        );
    }

    public function store($data)
    {
        return new AccountResource(Account::create(
            [
                'user_id'       => auth()->user()->id,
                'account_name'  => $data['account_name'],
                'website_url'   => $data['website_url'],
                'username'      => $data['username'],
                'password'      => Crypt::encryptString($data['password']),
                'note'          => $data['note'],
            ]
        ));
    }

    public function find($id)
    {
        return new AccountResource(Account::where('id', $id)->first());
    }

    public function update($data, $id)
    {
        return new AccountResource(Account::where('id', $id)->update($data));
    }

    public function destroy($id)
    {
        return Account::where('id', $id)->first()->delete();
    }

    public function findBySlug($slug)
    {
        return new AccountResource(Account::where('slug', $slug)->first());
    }
}
<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserService
{
    public function __construct(
        protected UserRepository $users,
    ) {}

    public function signup($data)
    {
        $this->users->signup($data);

        return $this->login($data);
    }

    public function login($data)
    {
        return $token = JWTAuth::attempt([
            "email" => $data['email'],
            "password" => $data['password']
        ]);
    }

    public function profile()
    {
        return auth()->user();
    }

    public function logout()
    {
        return auth()->logout(); 
    }
}
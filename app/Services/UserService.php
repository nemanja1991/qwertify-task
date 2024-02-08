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
        return $this->users->signup($data);
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
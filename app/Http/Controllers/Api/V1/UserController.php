<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Services\UserService;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct(protected UserService $userService){}

    public function signUp(SignupRequest $request)
    {
        $data = $request->validated();

        $this->userService->signup($data);

        return response()->json([
            "status" => true,
            "message" => "User registered successfully."
        ]);
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        $this->userService->login($data);

        $token = $this->userService->login($data);

        if(!empty($token)){

            return response()->json([
                "status" => true,
                "message" => "User logged in succcessfully.",
                "token" => $token
            ]);
        }

        return response()->json([
            "status" => false,
            "message" => "Invalid details."
        ]);
    }

    public function profile(Request $request)
    {
        $userData = $this->userService->profile();

        return response()->json([
            "status" => true,
            "message" => "Profile data.",
            "data" => $userData
        ]);
    }

    public function logout(Request $request)
    {
        $this->userService->logout();

        return response()->json([
            "status" => true,
            "message" => "User logged out successfully."
        ]);
    }
}

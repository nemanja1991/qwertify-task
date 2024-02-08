<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Services\UserService;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;

class UserController extends Controller
{

    public function __construct(protected UserService $userService){}

    public function signUp(SignupRequest $request)
    {
        $data = $request->validated();

        $token = $this->userService->signup($data);

        return response()->json([
            "status"    => true,
            "message"   => "User registered successfully.",
            "token"     => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        $this->userService->login($data);

        $token = $this->userService->login($data);

        if(!empty($token)){

            return response()->json([
                "status"    => true,
                "message"   => "User logged in succcessfully.",
                "token"     => $token
            ]);
        }

        return response()->json([
            "status" => false,
            "message" => "Invalid details."
        ]);
    }

    public function profile(Request $request)
    {
        $currentUser = $this->userService->profile();

        return response()->json([
            "status" => true,
            "message" => "Profile data.",
            "data" => $currentUser
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

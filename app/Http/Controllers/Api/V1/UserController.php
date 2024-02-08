<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function signUp(SignupRequest $request)
    {
        $data = $request->validated();

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            "status" => true,
            "message" => "User registered successfully."
        ]);
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        $token = JWTAuth::attempt([
            "email" => $request->email,
            "password" => $request->password
        ]);

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
        $userData = auth()->user();

        return response()->json([
            "status" => true,
            "message" => "Profile data.",
            "data" => $userData
        ]);
    }

    public function logout(Request $request)
    {
        auth()->logout();

        return response()->json([
            "status" => true,
            "message" => "User logged out successfully."
        ]);
    }
}

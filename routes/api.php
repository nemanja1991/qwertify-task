<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->group(function() {
    Route::get("/v1/profile", [UserController::class, 'profile']);
    Route::post("/v1/logout", [UserController::class, 'logout']);
});


Route::post("/v1/signup", [UserController::class, "signUp"]);
Route::post("/v1/login", [UserController::class, "login"]);
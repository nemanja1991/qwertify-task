<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Account;
use Illuminate\Http\Request;
use App\Services\AccountService;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAccountRequest;
use App\Http\Requests\UpdateAccountRequest;

class AccountController extends Controller
{
    public function __construct(protected AccountService $accountService){}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->accountService->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAccountRequest $request)
    {
        $data = $request->validated();
       
        $this->accountService->store($data);

        return response()->json([
            "status" => true,
            "message" => "Account successfully saved."
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Account $account)
    {
        $user = auth()->user();
        
        if ($user->id !== $account->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $accountData = $this->accountService->find($account->id);

        return response()->json([
            "status" => true,
            "message" => "",
            "data" => $accountData
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAccountRequest $request, Account $account)
    {
        $data = $request->validated();
        $user = auth()->user();
        
        if ($user->id !== $account->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $this->accountService->update($data, $account->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Account $account)
    {
        $user = auth()->user();
        
        if ($user->id !== $account->user_id) {
            return abort(403, 'Unauthorized action.');
        }
        
        return $this->accountService->destroy($account->id);
    }

    public function findBySlug(Account $account)
    {
        return $this->accountService->findBySlug($account->slug);
    }
}

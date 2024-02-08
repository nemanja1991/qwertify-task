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
        $account = $this->accountService->find($account->id);

        return response()->json([
            "status" => true,
            "message" => "",
            "data" => $account
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAccountRequest $request)
    {
        $data = $request->validated();
       
        $this->accountService->update($data, $data->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->accountService->destroy($id);
    }
}

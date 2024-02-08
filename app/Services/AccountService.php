<?php

namespace App\Services;

use App\Repositories\AccountRepository;

class AccountService
{
    public function __construct(
        protected AccountRepository $accountService,
    ) {}

    public function all()
    {
        return $this->accountService->all();
    }

    public function store($data)
    {
        $this->accountService->store($data);
    }

    public function find($id)
    {
        $this->accountService->store($id);
    }

    public function update($data, $id)
    {
        $this->accountService->update($data, $id);
    }

    public function destroy($id)
    {
        return $this->accountService->destroy($id);
    }
}
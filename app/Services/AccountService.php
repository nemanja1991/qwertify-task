<?php

namespace App\Services;

use App\Repositories\AccountRepository;

class AccountService
{
    public function __construct(
        protected AccountRepository $accountRepository,
    ) {}

    public function all()
    {
        return $this->accountRepository->all();
    }

    public function store($data)
    {
        $this->accountRepository->store($data);
    }

    public function find($id)
    {
        $this->accountRepository->find($id);
    }

    public function update($data, $id)
    {
        $this->accountRepository->update($data, $id);
    }

    public function destroy($id)
    {
        return $this->accountRepository->destroy($id);
    }

    public function findBySlug($slug)
    {
        return $this->accountRepository->findBySlug($slug);
    }
}
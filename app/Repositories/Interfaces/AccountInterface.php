<?php

namespace App\Repositories\Interfaces;

interface AccountInterface
{    
    public function all();
    public function store($data);
    public function find($id);
    public function update($data, $id);
    public function destroy($id);
}
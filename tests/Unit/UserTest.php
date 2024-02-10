<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $userData = User::create([
            'name' => 'Petar Petrovic',
            'email' => 'email4@example.com',
            'password' => Hash::make('password'),
        ]);

        $this->assertTrue(true);
    }
}

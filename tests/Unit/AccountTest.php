<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Account;

class AccountTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $accountData = Account::create([
            'user_id'       => 1,
            'account_name'  => 'account_name',
            'slug'          => 'slug',
            'website_url'   => 'website_url',
            'username'      => 'username',
            'password'      => 'password',
            'note'          => 'note'
        ]);

        $this->assertTrue(true);
    }
}

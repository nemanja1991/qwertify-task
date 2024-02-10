<?php

namespace Database\Factories;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'       => $this->faker->numberBetween(1, 2),
            'account_name'  => ucwords($this->faker->words(2, true)),
            'website_url'   => $this->faker->words(1, true),
            'username'      => ucwords($this->faker->words(1, true)),
            'password'      => Crypt::encryptString(ucwords($this->faker->words(1, true))),
            'note'          => $this->faker->paragraph(15)
        ];
    }
}
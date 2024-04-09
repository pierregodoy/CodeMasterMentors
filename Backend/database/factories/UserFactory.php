<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \App\Models\User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $roles = [1, 2, 3]; // IDs de los roles disponibles

        return [
            'username' => $this->faker->userName,
            'password' => bcrypt('password'),
            'role_id' => $this->faker->randomElement($roles), // Selecciona aleatoriamente un ID de rol
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'born_date' => $this->faker->date(),
            'area' => $this->faker->word,
            'img' => $this->faker->imageUrl(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }


    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}

<?php

use Illuminate\Database\Seeder;

class UserRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = ['Administrator', 'Patron'];

        foreach ($types as $type) {
            DB::table('user_roles')->insert([
                'name' => $type,
            ]);
        }
    }
}

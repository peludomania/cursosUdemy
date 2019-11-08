<?php


class UserManager
{
    public function showUser()
    {
        $userRepository = UserFactory::create();
        $user = $userRepository->getUser(1);

        print_r($user);
    }
}
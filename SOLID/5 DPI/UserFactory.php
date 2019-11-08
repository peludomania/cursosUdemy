<?php


class UserFactory
{
    public static function create(): UserRepository {
        return new LocalUserRepository();
    }
}
<?php


class LocalUserRepository implements UserRepository
{
    public function getUser(int $id): User
    {
        // logica para leer usuario de la base de datos
        $user = new User(1, 'Alberto', 'a@a.com');
        return $user;
    }
}
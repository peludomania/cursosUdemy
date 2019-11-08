<?php


interface UserRepository
{
    public function getUser(int $id): User;
}
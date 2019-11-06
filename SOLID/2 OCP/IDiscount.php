<?php


interface IDiscount
{
    public function apply(int $price): float;
}
<?php


class BlackFridayDiscount implements IDiscount
{

    public function apply(int $price): float
    {
        return $price * 0.2;
    }

}
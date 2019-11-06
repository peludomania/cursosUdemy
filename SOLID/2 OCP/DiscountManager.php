<?php


class DiscountManager
{

    public function apply(int $price, IDiscount $discount): float
    {
        return $discount->apply($price);
    }

}
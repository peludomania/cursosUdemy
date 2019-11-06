<?php


class Player
{
    /** @var int */
    private $id;
    /** @var string*/
    private $name;
    /** @var int*/
    private $win;
    /** @var int*/
    private $lose;
    /** @var string*/
    private $date;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getWin()
    {
        return $this->win;
    }

    /**
     * @param int $win
     */
    public function setWin($win)
    {
        $this->win = $win;
    }

    /**
     * @return int
     */
    public function getLose()
    {
        return $this->lose;
    }

    /**
     * @param int $lose
     */
    public function setLose($lose)
    {
        $this->lose = $lose;
    }

    /**
     * @return string
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param string $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }
}
<?php


class Main
{

    public function __construct ()
    {

    }

    public static function testGrassCourt()
    {
        $courts = [];
        $courts[] = new WimbledonCourt();
        $courts[] = new MallorcaOpenCourt();

        /** @var GrassCourt $court */
        foreach ($courts as $court) {
            $court->cutGrass();
        }
    }
    /*public static function testCourt()
    {
        $courts = [];
        $courts[] = new WimbledonCourt();
        $courts[] = new AustraliaOpenCourt();
        $courts[] = new RolandGarrosCourt();

        foreach ($courts as $court) {
            $court->cutGrass();
        }
    }*/

}
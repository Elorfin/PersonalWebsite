<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * About entity.
 *
 * @ORM\Entity()
 */
class About implements \JsonSerializable
{
    private $id;

    private $avatar;

    private $firstName;

    private $lastName;

    private $status;

    private $hiringStatus;

    private $description;

    private $birthDate;

    private $gender;

    private $location;

    private $maritalStatus;

    private $children = 0;

    private $more;

    private $lastUpdate;

    public function __construct()
    {
        $this->more = new ArrayCollection();
    }

    public function jsonSerialize()
    {
        return [

        ];
    }
}

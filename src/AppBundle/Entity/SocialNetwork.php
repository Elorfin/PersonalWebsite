<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SocialNetwork entity.
 *
 * @ORM\Entity()
 */
class SocialNetwork
{
    private $id;

    private $url;

    private $name;

    private $icon;
}

<?php

namespace AppBundle\Entity;

use AppBundle\Model\IdTrait;
use AppBundle\Model\NameTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * SocialNetwork entity.
 *
 * @ORM\Entity()
 */
class SocialNetwork
{
    use IdTrait;
    use NameTrait;

    private $url;

    private $icon;
}

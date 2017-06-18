<?php

namespace APWebsite\AppBundle\Entity;

use APWebsite\AppBundle\Model\IdTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * AboutMore entity.
 *
 * @ORM\Entity()
 */
class AboutMore
{
    use IdTrait;

    private $key;

    private $value;
}

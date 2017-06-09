<?php

namespace AppBundle\Model;

use Doctrine\ORM\Mapping as ORM;

trait NameTrait
{
    /**
     * @ORM\Column(name="entity_name")
     *
     * @var string
     */
    private $name;

    /**
     * Get name.
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set name.
     *
     * @param string $name
     */
    public function setName(string $name)
    {
        $this->name = $name;
    }
}

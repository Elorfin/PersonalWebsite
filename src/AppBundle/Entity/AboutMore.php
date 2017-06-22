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

    /**
     * @ORM\Column(name="more_key")
     *
     * @var string
     */
    private $key;

    /**
     * @ORM\Column(name="more_value")
     *
     * @var string
     */
    private $value;

    /**
     * Get key.
     *
     * @return string
     */
    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * Set key.
     *
     * @param string $key
     */
    public function setKey(string $key)
    {
        $this->key = $key;
    }

    /**
     * Get value.
     *
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * Set value.
     *
     * @param string $value
     */
    public function setValue(string $value)
    {
        $this->value = $value;
    }
}

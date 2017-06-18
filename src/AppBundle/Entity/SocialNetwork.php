<?php

namespace APWebsite\AppBundle\Entity;

use APWebsite\AppBundle\Model\IdTrait;
use APWebsite\AppBundle\Model\NameTrait;
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

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $url;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $icon;

    /**
     * Get url.
     *
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * Set url.
     *
     * @param string $url
     */
    public function setUrl(string $url)
    {
        $this->url = $url;
    }

    /**
     * Get icon.
     *
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon;
    }

    /**
     * Set icon.
     *
     * @param string $icon
     */
    public function setIcon(string $icon)
    {
        $this->icon = $icon;
    }
}

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
class SocialNetwork implements \JsonSerializable
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
    private $class;

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
     * Get class.
     *
     * @return string
     */
    public function getClass(): string
    {
        return $this->class;
    }

    /**
     * Set class.
     *
     * @param string $class
     */
    public function setClass(string $class)
    {
        $this->class = $class;
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

    /**
     * Serialize competency data.
     *
     * @return array
     */
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'class' => $this->class,
            'icon' => $this->icon,
            'utl' => $this->url,
        ];
    }
}

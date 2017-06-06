<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Competency entity.
 *
 * @ORM\Entity()
 */
class Competency implements \JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     *
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(name="competency_name")
     *
     * @var string
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     *
     * @var string
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     *
     * @var int
     */
    private $mastery = 0;

    /**
     * @ORM\ManyToOne(targetEntity="Competency", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     *
     * @var Competency
     */
    private $parent = null;

    /**
     * @ORM\OneToMany(targetEntity="Competency", mappedBy="parent")
     *
     * @var Competency[]
     */
    private $children;

    /**
     * Competency constructor.
     */
    public function __construct()
    {
        $this->children = new ArrayCollection();
    }

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set name.
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set description.
     *
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Get mastery.
     *
     * @return int
     */
    public function getMastery()
    {
        return $this->mastery;
    }

    /**
     * Set mastery.
     *
     * @param int $mastery
     */
    public function setMastery($mastery)
    {
        $this->mastery = $mastery;
    }

    /**
     * Get parent competency.
     *
     * @return Competency
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set parent competency.
     *
     * @param Competency $parent
     */
    public function setParent(Competency $parent = null)
    {
        $this->parent = $parent;
    }

    /**
     * Get children competencies.
     *
     * @return Competency[]
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Add a child competency.
     *
     * @param Competency $child
     */
    public function addChild(Competency $child)
    {
        if (!$this->children->contains($child)) {
            $this->children->add($child);
            $child->setParent($this);
        }
    }

    /**
     * Remove a child competency.
     *
     * @param Competency $child
     */
    public function removeChild(Competency $child)
    {
        if ($this->children->contains($child)) {
            $this->children->removeElement($child);
            $child->setParent(null);
        }
    }

    /**
     * Serialize competency data.
     *
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'mastery' => $this->mastery,
            'parent' => !empty($this->parent) ? $this->parent->getId() : null,
        ];
    }
}

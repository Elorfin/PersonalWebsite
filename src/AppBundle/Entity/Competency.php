<?php

namespace APWebsite\AppBundle\Entity;

use APWebsite\AppBundle\Model\DescriptionTrait;
use APWebsite\AppBundle\Model\IdTrait;
use APWebsite\AppBundle\Model\NameTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Competency entity.
 *
 * @ORM\Entity()
 */
class Competency implements \JsonSerializable
{
    use IdTrait;
    use NameTrait;
    use DescriptionTrait;

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
     * Get mastery.
     *
     * @return int
     */
    public function getMastery(): int
    {
        return $this->mastery;
    }

    /**
     * Set mastery.
     *
     * @param int $mastery
     */
    public function setMastery(int $mastery)
    {
        $this->mastery = $mastery;
    }

    /**
     * Get parent competency.
     *
     * @return Competency
     */
    public function getParent(): Competency
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
     * @return ArrayCollection
     */
    public function getChildren(): ArrayCollection
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
    public function jsonSerialize(): array
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

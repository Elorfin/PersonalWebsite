<?php

namespace AppBundle\Entity;

use AppBundle\Model\DescriptionTrait;
use AppBundle\Model\IdTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * About entity.
 *
 * @ORM\Entity()
 */
class About implements \JsonSerializable
{
    use IdTrait;
    use DescriptionTrait;

    private $avatar;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $firstName;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $lastName;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $status;

    private $hiringStatus;

    /**
     * @ORM\Column(type="date")
     *
     * @var \DateTime
     */
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

    /**
     * Get first name.
     *
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * Set first name.
     *
     * @param string $firstName
     */
    public function setFirstName(string $firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * Get last name.
     *
     * @return string
     */
    public function getLastName(): string
    {
        return $this->firstName;
    }

    /**
     * Set last name.
     *
     * @param string $lastName
     */
    public function setLastName(string $lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * Get birth date.
     *
     * @return \DateTime
     */
    public function getBirthDate(): \DateTime
    {
        return $this->birthDate;
    }

    /**
     * Set birth date.
     *
     * @param \DateTime $birthDate
     */
    public function setBirthDate(\DateTime $birthDate)
    {
        $this->birthDate = $birthDate;
    }

    /**
     * Get status.
     *
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * Set status.
     *
     * @param string $status
     */
    public function setStatus(string $status)
    {
        $this->status = $status;
    }

    public function jsonSerialize(): array
    {
        return [
            'status' => $this->status,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'birthDate' => !empty($this->birthDate) ? $this->birthDate->format(\DateTime::ISO8601) : null,
            'description' => $this->description,
        ];
    }
}

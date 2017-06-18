<?php

namespace APWebsite\AppBundle\Entity;

use APWebsite\AppBundle\Model\DescriptionTrait;
use APWebsite\AppBundle\Model\IdTrait;
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

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $hiringStatus;

    /**
     * @ORM\Column(type="date")
     *
     * @var \DateTime
     */
    private $birthDate;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $gender;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $location;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $maritalStatus;

    /**
     * @ORM\Column(type="smallint")
     *
     * @var int
     */
    private $children = 0;

    private $more;

    /**
     * @ORM\Column(type="date")
     *
     * @var \DateTime
     */
    private $lastUpdate;

    /**
     * About constructor.
     */
    public function __construct()
    {
        $this->lastUpdate = new \DateTime();
        $this->more = new ArrayCollection();
    }

    /**
     * Get avatar url.
     *
     * @return string
     */
    public function getAvatar(): string
    {
        return $this->avatar;
    }

    /**
     * Set avatar url.
     *
     * @param string $avatar
     */
    public function setAvatar(string $avatar)
    {
        $this->avatar = $avatar;
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
     * Get gender.
     *
     * @return string
     */
    public function getGender(): string
    {
        return $this->gender;
    }

    /**
     * Set gender.
     *
     * @param string $gender
     */
    public function setGender(string $gender)
    {
        $this->gender = $gender;
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

    /**
     * Get hiring status.
     *
     * @return string
     */
    public function getHiringStatus(): string
    {
        return $this->hiringStatus;
    }

    /**
     * Set hiring status.
     *
     * @param string $hiringStatus
     */
    public function setHiringStatus(string $hiringStatus)
    {
        $this->hiringStatus = $hiringStatus;
    }

    /**
     * Get location.
     *
     * @return string
     */
    public function getLocation(): string
    {
        return $this->location;
    }

    /**
     * Set location.
     *
     * @param string $location
     */
    public function setLocation(string $location)
    {
        $this->location = $location;
    }

    /**
     * Get marital status.
     *
     * @return string
     */
    public function getMaritalStatus(): string
    {
        return $this->maritalStatus;
    }

    /**
     * Set marital status.
     *
     * @param string $maritalStatus
     */
    public function setMaritalStatus(string $maritalStatus)
    {
        $this->maritalStatus = $maritalStatus;
    }

    /**
     * Get children.
     *
     * @return int
     */
    public function getChildren(): int
    {
        return $this->children;
    }

    /**
     * Set children.
     *
     * @param int $children
     */
    public function setChildren(int $children)
    {
        $this->children = $children;
    }

    /**
     * Get last update data.
     *
     * @return \DateTime
     */
    public function getLastUpdate(): \DateTime
    {
        return $this->lastUpdate;
    }

    /**
     * Set last update data.
     *
     * @param \DateTime $lastUpdate
     */
    public function setLastUpdate(\DateTime $lastUpdate)
    {
        $this->lastUpdate = $lastUpdate;
    }

    public function jsonSerialize(): array
    {
        return [
            'lastUpdate' => $this->lastUpdate,
            'avatar' => $this->avatar,
            'status' => $this->status,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'gender' => $this->gender,
            'birthDate' => !empty($this->birthDate) ? $this->birthDate->format(\DateTime::ISO8601) : null,
            'description' => $this->description,
            'hiringStatus' => $this->hiringStatus,
            'location' => $this->location,
            'maritalStatus' => $this->maritalStatus,
            'children' => $this->children,
            'more' => $this->more
        ];
    }
}

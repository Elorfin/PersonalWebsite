<?php

namespace APWebsite\AppBundle\Entity;

use APWebsite\AppBundle\Model\IdTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * Message entity.
 *
 * @ORM\Entity()
 */
class Message
{
    use IdTrait;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $email;

    /**
     * @ORM\Column()
     *
     * @var string
     */
    private $message;

    /**
     * Get sender email.
     *
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * Set sender email.
     *
     * @param string $email
     */
    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    /**
     * Get message.
     *
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }

    /**
     * Set message.
     *
     * @param string $message
     */
    public function setMessage(string $message)
    {
        $this->message = $message;
    }
}

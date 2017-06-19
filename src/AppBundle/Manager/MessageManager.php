<?php

namespace APWebsite\AppBundle\Manager;

use APWebsite\AppBundle\Entity\Message;
use APWebsite\AppBundle\Validation\ValidationException;
use Doctrine\Common\Persistence\ObjectManager;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * Message manager.
 *
 * @DI\Service("app.manager.message")
 */
class MessageManager
{
    /** @var ObjectManager */
    private $om;

    /**
     * MessageManager constructor.
     *
     * @DI\InjectParams({
     *     "om" = @DI\Inject("doctrine.orm.entity_manager")
     * })
     *
     * @param ObjectManager $om
     */
    public function __construct(ObjectManager $om)
    {
        $this->om = $om;
    }

    public function create(array $data): Message
    {
        $errors = $this->validate($data);
        if (!empty($errors)) {
            throw new ValidationException('Invalid about data.', $errors);
        }

        $message = new Message();

        $message->setEmail($data['email']);
        $message->setMessage($data['message']);

        $this->om->persist($message);
        $this->om->flush();

        return $message;
    }

    public function validate(array $data): array
    {
        $errors = [];

        if (empty($data['email'])) {
            $errors['email'] = 'can not be empty';
        } else if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'is not a valid email';
        }

        if (empty($data['message'])) {
            $errors['message'] = 'can not be empty';
        }

        return $errors;
    }
}

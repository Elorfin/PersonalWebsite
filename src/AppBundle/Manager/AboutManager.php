<?php

namespace APWebsite\AppBundle\Manager;

use APWebsite\AppBundle\Entity\About;
use APWebsite\AppBundle\Validation\ValidationException;
use Doctrine\Common\Persistence\ObjectManager;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * About manager.
 *
 * @DI\Service("app.manager.about")
 */
class AboutManager
{
    /** @var ObjectManager */
    private $om;

    /**
     * AboutManager constructor.
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

    public function get(): About
    {
        // There is only one record in this table
        $records = $this->om->getRepository('AppBundle::About')->findAll();

        return !empty($records) ? $records[0] : null;
    }

    public function update(array $data): About
    {
        $errors = $this->validate($data);
        if (!empty($errors)) {
            throw new ValidationException('Invalid about data.', $errors);
        }

        $about = $this->get();
        if (empty($about)) {
            $about = new About();
        }

        $this->om->persist($about);
        $this->om->flush();

        return $about;
    }

    public function validate(array $data): array
    {
        $errors = [];

        if (!empty($data['civility'])) {
            if (empty($data['civility']['firstName'])) {
                $errors['civility.firstName'] = 'can not be empty';
            }
            if (empty($data['civility']['lastName'])) {
                $errors['civility.lastName'] = 'can not be empty';
            }
        } else {
            $errors['civility'] = 'is required';
        }

        return $errors;
    }
}

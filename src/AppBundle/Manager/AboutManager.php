<?php

namespace AppBundle\Manager;

use AppBundle\Entity\About;
use AppBundle\Validation\ValidationException;
use Doctrine\Common\Persistence\ObjectManager;

class AboutManager
{
    /** @var ObjectManager */
    private $om;

    public function __construct(ObjectManager $om)
    {
        $this->om = $om;
    }

    public function get()
    {
        // There is only one record in this table
        $records = $this->om->getRepository('AppBundle::About')->findAll();

        return !empty($records) ? $records[0] : null;
    }

    public function update(array $data)
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

    public function validate(array $data)
    {
        $errors = [];

        return $errors;
    }
}

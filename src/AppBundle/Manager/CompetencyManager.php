<?php

namespace AppBundle\Manager;

use AppBundle\Entity\Competency;
use AppBundle\Validation\ValidationException;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\ObjectRepository;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * Competency manager.
 *
 * @DI\Service("app.manager.competency")
 */
class CompetencyManager
{
    /** @var ObjectManager */
    private $om;

    /** @var ObjectRepository */
    private $repository;

    /**
     * CompetencyManager constructor.
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
        $this->repository = $this->om->getRepository('AppBundle::Competency');
    }

    /**
     * Get all competencies.
     *
     * @return array
     */
    public function all()
    {
        return $this->repository->findAll();
    }

    /**
     * Create a new competency.
     *
     * @param array $data
     *
     * @return Competency
     */
    public function create(array $data)
    {
        return $this->update(new Competency(), $data);
    }

    /**
     * Update an existing competency.
     *
     * @param Competency $competency
     * @param array $data
     *
     * @return Competency
     *
     * @throws ValidationException
     */
    public function update(Competency $competency, array $data)
    {
        $errors = $this->validate($data);
        if (!empty($errors)) {
            throw new ValidationException('Invalid competency.', $errors);
        }

        $this->om->persist($competency);
        $this->om->flush();

        return $competency;
    }

    /**
     * Validate competency data.
     *
     * @param array $data
     *
     * @return array
     */
    public function validate(array $data)
    {
        $errors = [];

        if (empty($data['name'])) {
            $errors['name'] = 'can not be empty';
        }

        return $errors;
    }

    /**
     * Delete a competency.
     *
     * @param Competency $competency
     */
    public function delete(Competency $competency)
    {
        $this->om->remove($competency);
        $this->om->flush();
    }
}
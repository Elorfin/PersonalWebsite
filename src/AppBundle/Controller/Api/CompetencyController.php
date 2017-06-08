<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Competency;
use AppBundle\Manager\CompetencyManager;
use AppBundle\Validation\ValidationException;
use JMS\DiExtraBundle\Annotation as DI;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Competency controller.
 *
 * @DI\Service("app.controller.competency")
 * @EXT\Route("/competencies")
 */
class CompetencyController
{
    /** @var CompetencyManager */
    private $manager;

    /**
     * CompetencyController constructor.
     *
     * @DI\InjectParams({
     *     "manager" = @DI\Inject("app.manager.competency")
     * })
     *
     * @param CompetencyManager $manager
     */
    public function __construct(CompetencyManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * List all competencies.
     *
     * @EXT\Route("")
     * @EXT\Method("GET")
     *
     * @return JsonResponse
     */
    public function indexAction(): JsonResponse
    {
        return new JsonResponse(
            $this->manager->all()
        );
    }

    /**
     * Get a competency details.
     *
     * @EXT\Route("/{id}")
     * @EXT\Method("GET")
     *
     * @param Competency $competency
     *
     * @return JsonResponse
     */
    public function getAction(Competency $competency): JsonResponse
    {
        return new JsonResponse(
            $competency
        );
    }

    /**
     * Create a new competency.
     *
     * @EXT\Route("")
     * @EXT\Method("POST")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function createAction(Request $request): JsonResponse
    {
        try {
            return new JsonResponse(
                $this->manager->create(json_decode($request->getContent(), true)),
                201
            );
        } catch (ValidationException $e) {
            return new JsonResponse(
                $e->getErrors(),
                422
            );
        }
    }

    /**
     * Update a competency.
     *
     * @EXT\Route("/{id}")
     * @EXT\Method("PUT")
     *
     * @param Competency $competency
     * @param Request    $request
     *
     * @return JsonResponse
     */
    public function updateAction(Competency $competency, Request $request): JsonResponse
    {
        try {
            return new JsonResponse(
                $this->manager->update($competency, json_decode($request->getContent(), true)),
                200
            );
        } catch (ValidationException $e) {
            return new JsonResponse(
                $e->getErrors(),
                422
            );
        }
    }

    /**
     * Delete a competency.
     *
     * @EXT\Route("/{id}")
     * @EXT\Method("DELETE")
     *
     * @param Competency $competency
     *
     * @return JsonResponse
     */
    public function deleteAction(Competency $competency): JsonResponse
    {
        $this->manager->delete($competency);

        return new JsonResponse(null, 204);
    }
}

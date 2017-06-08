<?php

namespace AppBundle\Controller\Api;

use AppBundle\Manager\AboutManager;
use AppBundle\Validation\ValidationException;
use JMS\DiExtraBundle\Annotation as DI;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * About controller.
 *
 * @DI\Service("app.controller.about")
 * @EXT\Route("/about")
 */
class AboutController
{
    /** @var AboutManager */
    private $manager;

    public function __construct(AboutManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Get about details.
     *
     * @EXT\Route("")
     * @EXT\Method("GET")
     *
     * @return JsonResponse
     */
    public function getAction(): JsonResponse
    {
        return new JsonResponse(
            $this->manager->get()
        );
    }

    /**
     * Update about info.
     *
     * @EXT\Route("/{id}")
     * @EXT\Method("PUT")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function updateAction(Request $request): JsonResponse
    {
        try {
            return new JsonResponse(
                $this->manager->update(json_decode($request->getContent(), true)),
                200
            );
        } catch (ValidationException $e) {
            return new JsonResponse(
                $e->getErrors(),
                422
            );
        }
    }
}

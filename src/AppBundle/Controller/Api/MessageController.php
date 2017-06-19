<?php

namespace APWebsite\AppBundle\Controller\Api;

use APWebsite\AppBundle\Manager\MessageManager;
use APWebsite\AppBundle\Validation\ValidationException;
use JMS\DiExtraBundle\Annotation as DI;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Message controller.
 *
 * @EXT\Route("/message")
 */
class MessageController
{
    /** @var MessageManager */
    private $manager;

    /**
     * MessageController constructor.
     *
     * @DI\InjectParams({
     *     "manager" = @DI\Inject("app.manager.message")
     * })
     *
     * @param MessageManager $manager
     */
    public function __construct(MessageManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Send a message.
     *
     * @EXT\Route("")
     * @EXT\Method("POST")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function sendAction(Request $request): JsonResponse
    {
        try {
            $this->manager->create(json_decode($request->getContent(), true));

            return new JsonResponse(null, 204);
        } catch (ValidationException $e) {
            return new JsonResponse($e->getErrors(), 422);
        }
    }
}

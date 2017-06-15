<?php

namespace AppBundle\Controller\Api;

use AppBundle\Manager\PdfManager;
use JMS\DiExtraBundle\Annotation as DI;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;
use Symfony\Component\HttpFoundation\Response;

/**
 * PDF controller.
 *
 * @EXT\Route("/pdf")
 */
class PdfController
{
    /** @var PdfManager */
    private $manager;

    /**
     * PdfController constructor.
     *
     * @DI\InjectParams({
     *     "manager" = @DI\Inject("app.manager.pdf")
     * })
     *
     * @param PdfManager $manager
     */
    public function __construct(PdfManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Download full CV in PDF format.
     *
     * @EXT\Route("")
     * @EXT\Method("GET")
     *
     * @return Response
     */
    public function downloadAction()
    {
        $pdf = $this->manager->get();

        // Generate response
        $response = new Response();

        // Set headers
        $response->headers->set('Cache-Control', 'private');
        $response->headers->set('Content-type', 'application/pdf');
        $response->headers->set('Content-Disposition', 'attachment; filename="'.basename($pdf).'";');
        $response->headers->set('Content-length', filesize($pdf));

        // Send headers before outputting anything
        $response->sendHeaders();

        $response->setContent(file_get_contents($pdf));

        return $response;
    }
}

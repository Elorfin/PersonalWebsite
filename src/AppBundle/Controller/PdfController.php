<?php

namespace AppBundle\Controller;

use AppBundle\Manager\PdfManager;
use JMS\DiExtraBundle\Annotation as DI;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;

/**
 * PDF controller.
 *
 * @DI\Service("app.controller.pdf")
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
     */
    public function downloadAction()
    {

    }
}

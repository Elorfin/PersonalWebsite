<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CompetencyController extends Controller
{
    /**
     * @EXT\Route("/", name="competencies")
     * @EXT\Method("GET")
     */
    public function indexAction()
    {
        return [];
    }
}
